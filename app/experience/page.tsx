import { Metadata } from "next";
import ExperienceContent from "@/components/page-content/experience";

export const metadata: Metadata = {
  title: "Marnin Audu | Career Blueprint",
  description: "Marnin's journey so far as a software developer",
};

export default function ExperiencePage() {
  return (
    <ExperienceContent />
  );
}
