export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="container pt-20">
        <div className="mx-auto max-w-3xl rounded-4xl bg-white/80 backdrop-blur-xl dark:bg-neutral-900/40 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hello! My name is Marcos Pieras
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software developer specialized in developing and designing data analytics applications. Specialized on interactive data visualizations
          </p>
        </div>
      </div>
      <a
        href="#projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
        aria-label="Scroll to projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
