import "./styles.css";
export default function App() {
  const navLinks = document.getElementsByClassName("nav-links")[0];
  return (
    <div className="nav">
      <div className="brand-title">Headstrait</div>
      <a
        href="#toggle"
        className="toggle-button"
        onClick={() => {
          navLinks.classList.toggle("active");
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
