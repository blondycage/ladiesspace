export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-burgundy/10 bg-burgundy-deep text-ivory">
      <div className="container-page flex min-h-10 flex-col items-center justify-center gap-1 py-2 text-center text-xs sm:flex-row sm:justify-between sm:text-sm">
        <p>Creating meaningful spaces for women to connect, grow and flourish · ESP. 2025</p>
        <a
          href="#about"
          className="link-underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-burgundy-deep"
        >
          Discover Ladies’ Space
        </a>
      </div>
    </div>
  );
}
