import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src={logoImg} alt="A form and a pencil" />
      </a>
      <h1>React Forms</h1>
    </header>
  );
}
