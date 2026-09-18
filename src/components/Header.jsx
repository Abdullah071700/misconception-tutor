function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top">
          <svg
            className="brand-mark"
            viewBox="0 0 36 36"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="36" height="36" rx="9" fill="#1e5c45" />
            <path
              d="M11 22.5c0-4.2 3.1-7.5 7-7.5s7 3.3 7 7.5"
              fill="none"
              stroke="#fffdf8"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="18" cy="12.5" r="2.4" fill="#fffdf8" />
          </svg>
          <span className="brand-copy">
            <span className="brand-name">Misconception Tutor</span>
            <span className="brand-tagline">Understand what you misunderstood.</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#tutor">Try it</a>
          <a href="#how-it-works">How it works</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
