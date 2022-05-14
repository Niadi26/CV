import "./main.css";

export function Main() {
  return (
    <main className="main">
      <div className="main__photo"></div>
      <h1 className="main__name">Diana Byben</h1>
      <h2 className="main__work">Frontend Developer</h2>
      <div className="main__contacts">
        <a href="https://github.com/Niadi26" target="blank" className="contact__item git"></a>
        <a href="https://linkedin.com/in/diana-byben" target="blank" className="contact__item link"></a>
        <a href="https://t.me/niadi26" target="blank" className="contact__item telega"></a>
      </div>
    </main>
  );
}
