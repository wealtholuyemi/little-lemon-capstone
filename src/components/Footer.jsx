export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand"><span aria-hidden="true">✳</span> LITTLE LEMON</div>
        <p>Fresh Mediterranean flavours, shared with good company.</p>
        <small>© {new Date().getFullYear()} Little Lemon. Demo capstone project.</small>
      </div>
    </footer>
  );
}