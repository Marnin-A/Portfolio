import ArticlesContent from "@/components/page-content/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marnin Audu | Articles",
  description: "Technical Logs",
};

export default function ArticlesPage() {
  return (
    <ArticlesContent />
  );
}
