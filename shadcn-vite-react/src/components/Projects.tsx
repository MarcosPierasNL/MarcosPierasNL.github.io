import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Interactive Sales Dashboard",
    description:
      "A dynamic dashboard visualizing sales performance with filters, animations, and drill-down interactions.",
    imageUrl: "/assets/sales-dashboard.svg",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Geo Data Explorer",
    description:
      "Map-based visualization tool to explore geospatial datasets, with clustering and heatmaps.",
    imageUrl: "/assets/geo-explorer.svg",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Network Graph Insights",
    description:
      "Interactive network graphs to uncover relationships in complex datasets with tooltips and selections.",
    imageUrl: "/assets/network-graph.svg",
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-16 space-y-12">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} reversed={i % 2 === 1} />
      ))}
    </section>
  );
}
