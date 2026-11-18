function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Ivy Bowers · Built with React, TypeScript, and Vite ·{' '}
        <a href="https://github.com/ibowers27/ibowers27.github.io" target="_blank" rel="noreferrer">
          View source
        </a>
      </p>
    </footer>
  );
}

export default Footer;
