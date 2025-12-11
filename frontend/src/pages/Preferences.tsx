import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { apiGetPreferences, apiSavePreferences } from "../lib/api";

type Preference = {
  key: string;
  label: string;
  emoji?: string;
};

const ALL_PREFERENCES: Preference[] = [
  { key: "night_owl", label: "Night Owl", emoji: "🦉" },
  { key: "early_bird", label: "Early Bird", emoji: "🦚" },
  { key: "studious", label: "Studious", emoji: "📚" },
  { key: "fitness_freak", label: "Fitness Freak", emoji: "🏋️" },
  { key: "sporty", label: "Sporty", emoji: "⚽" },
  { key: "wanderer", label: "Wanderer", emoji: "🚗" },
  { key: "party_lover", label: "Party Lover", emoji: "🥳" },
  { key: "pet_lover", label: "Pet Lover", emoji: "🐶" },
  { key: "vegan", label: "Vegan", emoji: "🌿" },
  { key: "non_alcoholic", label: "Non Alcoholic", emoji: "🚫🍷" },
  { key: "music_lover", label: "Music Lover", emoji: "🎸" },
  { key: "non_smoker", label: "Non Smoker", emoji: "🚭" },
];

function getStoredPreferences(): string[] {
  try {
    const raw = localStorage.getItem("userPreferences");
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export default function Preferences() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [selected, setSelected] = useState<string[]>(() => getStoredPreferences());

  const labelByKey = useMemo(() => {
    const map: Record<string, string> = {};
    ALL_PREFERENCES.forEach((p) => (map[p.key] = p.label));
    return map;
  }, []);

  useEffect(() => {
    // Ensure user is authenticated from GetStarted; otherwise allow anyway
  }, []);

  function toggle(key: string) {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  async function onContinue() {
    localStorage.setItem("userPreferences", JSON.stringify(selected));
    const labels = selected.map((k) => labelByKey[k]).filter(Boolean);
    localStorage.setItem("userPreferenceLabels", JSON.stringify(labels));
    if (token) {
      try {
        await apiSavePreferences(token, { preferredLocation: labels.join(", "), preferenceLabels: labels });
      } catch {}
    }
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      apiGetPreferences(token)
        .then((p: any) => {
          if (p && p.preferredLocation) {
            const labels = String(p.preferredLocation).split(", ").filter(Boolean);
            const keys = labels.map((label: string) =>
              Object.keys(labelByKey).find((k) => labelByKey[k].toLowerCase() === label.toLowerCase())
            ).filter(Boolean) as string[];
            if (keys.length) setSelected(keys);
          }
        })
        .catch(() => {});
    }
  }, [token, labelByKey]);

  return (
    !token ? <Navigate to="/signin" replace /> :
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />
      <div className="flex items-center justify-center p-4 pt-24">
        <Card className="w-full max-w-5xl shadow-2xl rounded-2xl border-0">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold mb-2">
            What type of flatmate do you like?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
            {ALL_PREFERENCES.map((pref) => {
              const isActive = selected.includes(pref.key);
              return (
                <button
                  key={pref.key}
                  type="button"
                  onClick={() => toggle(pref.key)}
                  className={`rounded-2xl border p-6 text-center transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                    isActive
                      ? "border-primary bg-primary/10"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <div className="text-4xl mb-3" aria-hidden>
                    {pref.emoji || "✨"}
                  </div>
                  <div className="font-medium text-sm">{pref.label}</div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button size="lg" onClick={onContinue} className="px-10">
              Continue
            </Button>
          </div>
        </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}


