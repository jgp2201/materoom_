import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useAuth } from "../App";
import { useToast } from "@/components/ui/use-toast";
import { apiCreateListing, ListingInput } from "../lib/api";
import { useNavigate } from "react-router-dom";

const highlightOptions = [
  "Attached washroom",
  "Market nearby",
  "Attached balcony",
  "Close to metro station",
  "Public transport nearby",
  "Gated society",
  "No Restriction",
  "Newly built",
  "Separate washrooms",
  "House keeping",
  "Gym nearby",
  "Park nearby",
];

const amenityOptions = ["Tv", "Fridge", "Kitchen", "Wifi", "Machine", "Ac", "PowerBackup", "Cook", "Parking"];

export default function NeedRoommateForm() {
  const { token } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<ListingInput>({
    defaultValues: {
      location: "",
      approxRent: 5000,
      lookingFor: "Any",
      occupancy: "Single",
      highlights: [],
      amenities: [],
      // lookingFor can be optionally derived from "Looking For" buttons later
      phoneVisibility: "public",
      description: "Looking for a roommate.",
    },
  });

  function toggle(field: "highlights" | "amenities", value: string) {
    const current = (form.getValues(field) as string[]) || [];
    if (current.includes(value)) (form.setValue(field, current.filter((v) => v !== value) as any));
    else (form.setValue(field, [...current, value] as any));
  }

  async function onSubmit(values: ListingInput) {
    if (!token) {
      toast({ variant: "destructive", title: "Please sign in", description: "You must be logged in to submit." });
      navigate("/signin");
      return;
    }
    try {
      await apiCreateListing(token, values);
      toast({ title: "Listing created", description: "Your room listing has been posted." });
      navigate("/");
    } catch (e: any) {
      toast({ variant: "destructive", title: "Submission failed", description: e.message || "Try again later" });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Add your room details</CardTitle>
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
                      <Button
                        type="button"
                        key={opt}
                        variant={form.watch("lookingFor") === opt ? "default" : "secondary"}
                        onClick={() => form.setValue("lookingFor", opt)}
                      >
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
                <label className="text-sm font-medium">Choose Highlights for your room</label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {highlightOptions.map((h) => {
                    const active = (form.watch("highlights") || []).includes(h);
                    return (
                      <button type="button" key={h} onClick={() => toggle("highlights", h)} className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                        {h}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Amenities</label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {amenityOptions.map((a) => {
                    const active = (form.watch("amenities") || []).includes(a);
                    return (
                      <button type="button" key={a} onClick={() => toggle("amenities", a)} className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}>
                        {a}
                      </button>
                    );
                  })}
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
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}


