import "./about.css";

export function About() {
  return (
    <div className="side about">
      <h3 className="title">About</h3>
      <div className="about__info-cont">
          <div className="about__city about__info">Minsk,Belarus</div>
          <div className="about__email about__info">byb.divaleri@gmail.com</div>
          <div className="about__phone about__info">+375 29 8000389</div>
      </div>
      <p className="about__descr">Responsible employee whith a big passion to develop in IT direction. Looking for a job in a company where I can prove myself as a frontend developer and get new skills on real projects.</p>
    </div>
  );
}
