import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Mail, Lock, MapPin, School, Heart } from "lucide-react";
import { useAuth } from "../App";
import { apiSignup } from "../lib/api";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const dietaryOptions = ["Vegetarian", "Vegan", "Non-Vegetarian", "Eggetarian", "Other"];
const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
const sleepOptions = ["Early Bird", "Night Owl", "Flexible"];

function passwordValidation(value: string) {
  if (!value) return "Password is required";
  if (value.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
  if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
  if (!/[0-9]/.test(value)) return "Password must contain at least one number";
  return true;
}

export default function GetStarted() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      dietary: "",
      sleep: "",
      interests: "",
      location: "",
      work: "",
    },
    mode: "onTouched",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  async function onSubmit(values: any) {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", { type: "validate", message: "Passwords do not match" });
      return;
    }
    try {
      const { token, user } = await apiSignup({ email: values.email, password: values.password, name: values.name });
      login(token, user);
      toast({ title: "Account created", description: "Let’s set your preferences" });
      navigate("/preferences");
    } catch (e: any) {
      form.setError("email", { type: "manual", message: e.message || "Signup failed" });
      toast({ variant: "destructive", title: "Signup failed", description: e.message || "Try a different email" });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-xl shadow-2xl rounded-2xl border-0">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold mb-2">Get Started</CardTitle>
          <p className="text-muted-foreground text-sm">Create your profile to find your perfect match!</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-sm">
              {/* Account Info Section */}
              <div>
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2"><User className="h-5 w-5" /> Account Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="name" control={form.control} rules={{ required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Enter your name" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField name="email" control={form.control} rules={{ required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="email" className="pl-10" placeholder="Enter your email" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <FormField name="password" control={form.control} rules={{ validate: passwordValidation }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="password" className="pl-10" placeholder="Enter password" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField name="confirmPassword" control={form.control} rules={{ required: "Please confirm your password" }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="password" className="pl-10" placeholder="Confirm password" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>
              <hr className="my-4 border-muted" />
              {/* Personal Info Section */}
              <div>
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2"><Heart className="h-5 w-5" /> Personal Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="gender" control={form.control} rules={{ required: "Gender is required" }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            {genderOptions.map(option => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  {/* <FormField name="dietary" control={form.control} rules={{ required: "Dietary preference is required" }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Preferences</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select dietary preference" />
                          </SelectTrigger>
                          <SelectContent>
                            {dietaryOptions.map(option => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} /> */}
                  {/* <FormField name="sleep" control={form.control} rules={{ required: "Sleep habit is required" }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sleep Habits</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sleep habit" />
                          </SelectTrigger>
                          <SelectContent>
                            {sleepOptions.map(option => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} /> */}
                  {/* <FormField name="interests" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interests</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Music, Sports, Reading" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} /> */}
                  <FormField name="location" control={form.control} rules={{ required: "Location is required" }} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="City or Area" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  {/* <FormField name="work" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work/College</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <School className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Your workplace or college" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} /> */}
                </div>
              </div>
              <Button type="submit" variant="default" className="w-full mt-6 py-3 text-base font-semibold shadow-lg">Create Profile</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
} 