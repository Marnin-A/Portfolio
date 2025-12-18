import { Metadata } from "next";
import ProjectsContent from "@/components/page-content/projects";

export const metadata: Metadata = {
  title: "Marnin Audu | Projects",
  description: "Marnin's journey so far as a software developer",
};

export default function ProjectsPage() {
  return (
    <ProjectsContent />
  );
}
