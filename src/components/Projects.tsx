import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "GraphPolaris",
    description:
      "No code graph analytics platform for data scientists and analysts to visualize and analyze complex relationships.",
    imageUrl: "/assets/graph-polaris.svg",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ComVis-Sail",
    description:
      "The paper presents a visualization tool that helps sailing coaches analyze multi-dimensional sensor data to identify which boat handling techniques improve performance. Its key contribution is a glyph-based design that preserves temporal and spatial details, enabling exploration of multiple performance factors, validated with sailors and coaches.",
    imageUrl: "/assets/genererate_data.gif",
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
