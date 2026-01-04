export default function About() {
  return (
    <section className="relative min-h-[60vh] pt-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-white/40 backdrop-blur-xl dark:bg-neutral-900/40 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">About</h2>
          <p className="text-muted-foreground mb-4">
            I’m Marcos Pieras — software developer specialized in building and designing interactive data visualizations.
            I focus on turning complex datasets into clear, engaging experiences.
          </p>
          <div className="grid gap-3 text-sm">
            <div>
              <span className="font-semibold">Skills:</span> React, TypeScript, D3.js, Tailwind CSS, Vite
            </div>
            <div>
              <span className="font-semibold">Focus Areas:</span> dashboards, geospatial maps, network graphs, user interaction design
            </div>
            <div>
              <span className="font-semibold">Approach:</span> data-first storytelling, performance, accessibility, and clean UI systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
