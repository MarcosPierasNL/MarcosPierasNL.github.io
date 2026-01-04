import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link as LinkIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({ project, reversed }: { project: Project; reversed?: boolean }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reversed ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg border"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "default" }))}
            >
              <Github className="mr-2 h-4 w-4" /> Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "default" }))}
            >
              <LinkIcon className="mr-2 h-4 w-4" /> Live
            </a>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
