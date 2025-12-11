import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../App";
import { useToast } from "@/components/ui/use-toast";
import { apiCreateRequirement, RequirementInput, apiGetRequirement, apiUpdateRequirement, apiDeleteRequirement } from "../lib/api";
import { useNavigate, useSearchParams } from "react-router-dom";

const highlightOptions = [
  "Working full time",
  "College student",
  "25+ age",
  "<25 age",
  "Working night shifts",
  "Have 2 wheeler",
  "Have 4 wheeler",
  "Will shift immediately",
  "Have pets",
  "Need no furnishing",
  "Pure vegetarian",
];

export default function NeedRoomForm() {
  const { token } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const editId = params.get('edit');
  const form = useForm<RequirementInput>({
    defaultValues: {
      location: "",
      approxRent: 5000,
      lookingFor: "Any",
      occupancy: "Single",
      highlights: [],
      interestedInPg: false,
      phoneVisibility: "public",
      interestedInTeams: false,
      description: "I am looking for a room with roommate.",
    },
  });

  // Prefill when editing
  useEffect(() => {
    if (editId) {
      apiGetRequirement(editId).then((r: any) => {
        form.reset({
          location: r.location,
          approxRent: r.approxRent,
          lookingFor: r.lookingFor,
          occupancy: r.occupancy,
          highlights: r.highlights || [],
          interestedInPg: !!r.interestedInPg,
          phoneVisibility: r.phoneVisibility,
          interestedInTeams: !!r.interestedInTeams,
          description: r.description || "",
        });
      }).catch(() => {});
    }
  }, [editId]);

  async function onSubmit(values: RequirementInput) {
    if (!token) {
      toast({ variant: "destructive", title: "Please sign in", description: "You must be logged in to submit." });
      navigate("/signin");
      return;
    }
    try {
      if (editId) {
        await apiUpdateRequirement(token, editId, values);
        toast({ title: "Updated", description: "Your requirement has been updated." });
      } else {
        await apiCreateRequirement(token, values);
        toast({ title: "Submitted", description: "Your requirement has been posted." });
      }
      navigate("/");
    } catch (e: any) {
      toast({ variant: "destructive", title: "Submission failed", description: e.message || "Try again later" });
    }
  }

  function toggleHighlight(tag: string) {
    const current = form.getValues("highlights") || [];
    if (current.includes(tag)) form.setValue("highlights", current.filter((t) => t !== tag));
    else form.setValue("highlights", [...current, tag]);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{editId ? 'Edit your requirement' : 'Add your requirement'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Add Your Location*</label>
                  <Input placeholder="Add location..." {...form.register("location", { required: true })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Looking For</label>
                  <div className="flex gap-2 mt-2">
                    {(["Male", "Female", "Any"] as const).map((opt) => (
                      <Button type="button" key={opt} variant={form.watch("lookingFor") === opt ? "default" : "secondary"} onClick={() => form.setValue("lookingFor", opt)}>
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Approx Rent*</label>
                  <Input type="number" min={0} {...form.register("approxRent", { valueAsNumber: true, required: true })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Occupancy</label>
                  <div className="flex gap-2 mt-2">
                    {(["Single", "Shared", "Any"] as const).map((opt) => (
                      <Button type="button" key={opt} variant={form.watch("occupancy") === opt ? "default" : "secondary"} onClick={() => form.setValue("occupancy", opt)}>
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Choose Highlights for your property</label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {highlightOptions.map((h) => {
                    const active = (form.watch("highlights") || []).includes(h);
                    return (
                      <button type="button" key={h} onClick={() => toggleHighlight(h)} className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                        {h}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Are you interested in PG too?</label>
                  <div className="flex gap-2 mt-2">
                    <Button type="button" variant={form.watch("interestedInPg") ? "default" : "secondary"} onClick={() => form.setValue("interestedInPg", true)}>Yes</Button>
                    <Button type="button" variant={!form.watch("interestedInPg") ? "default" : "secondary"} onClick={() => form.setValue("interestedInPg", false)}>No</Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Are you interested in making Teams?</label>
                  <div className="flex gap-2 mt-2">
                    <Button type="button" variant={form.watch("interestedInTeams") ? "default" : "secondary"} onClick={() => form.setValue("interestedInTeams", true)}>Yes</Button>
                    <Button type="button" variant={!form.watch("interestedInTeams") ? "default" : "secondary"} onClick={() => form.setValue("interestedInTeams", false)}>No</Button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Do you want to make your mobile visible to other users?</label>
                <div className="flex gap-2 mt-2">
                  <Button type="button" variant={form.watch("phoneVisibility") === "public" ? "default" : "secondary"} onClick={() => form.setValue("phoneVisibility", "public")}>Yes! make it public</Button>
                  <Button type="button" variant={form.watch("phoneVisibility") === "private" ? "default" : "secondary"} onClick={() => form.setValue("phoneVisibility", "private")}>No! make it private</Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Description*</label>
                <textarea className="w-full border rounded-md p-3 bg-muted" rows={5} {...form.register("description", { required: true })} />
              </div>

              <Button type="submit" className="px-8">Submit</Button>
              {editId && (
                <div className="flex justify-between pt-4">
                  <Button type="submit">Update</Button>
                  <Button type="button" variant="destructive" onClick={async () => {
                    if (!token) return; if (!confirm('Delete this listing permanently?')) return;
                    await apiDeleteRequirement(token, editId);
                    toast({ title: 'Removed', description: 'Your listing has been deleted.' });
                    navigate('/listings');
                  }}>Remove Listing</Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}


