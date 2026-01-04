type NavbarProps = {
  onAboutClick?: () => void;
  onHomeClick?: () => void;
};

export default function Navbar({ onAboutClick, onHomeClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="container h-14 grid grid-cols-3 items-center">
        <div />
        <button
          onClick={onHomeClick}
          className="justify-self-center text-lg font-semibold hover:opacity-80 inline-flex items-center gap-2"
          aria-label="Go to Home"
        >
          <img src="/favicon.svg" alt="Logo" className="h-6 w-6" />
          Marcos Pieras
        </button>
        <div className="justify-self-end">
          <button
            onClick={onAboutClick}
            className="inline-flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            About
          </button>
        </div>
      </div>
    </header>
  );
}
