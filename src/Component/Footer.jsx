import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <h3>Contact Us</h3>
      <p>
        If you have any questions or feedback about the Preview & Rating System,
        feel free to contact us.
      </p>

      <div className="footer-info">
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> Tamil Nadu, India</p>
      </div>

      <p className="copyright">
        © 2026 Preview & Rating System
      </p>
    </footer>
  );
};