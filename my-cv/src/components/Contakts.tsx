import './expiriense.css';

export function Experience() {
  return (
    <div className="side">
      <h3 className="title">Experience</h3>
      <div className="exp__cont">
        <p className="exp__data">2022 - Present</p>
        <h3 className="exp__plase exp-stud">The Rolling Scopes School</h3>
        <p className="exp__info">React 2022Q1</p>
      </div>
      <div className="exp__cont">
        <p className="exp__data">2021 - 2022</p>
        <h3 className="exp__plase exp-stud">The Rolling Scopes School
        <a className='certificate' target="blank" href="https://app.rs.school/certificate/mbhmrkyt"></a>
        </h3>
        <p className="exp__info">JavaScript/Front-end 2021Q3</p>
      </div>
      <div className="exp__cont">
        <p className="exp__data">2018 - 2021</p>
        <h3 className="exp__plase exp-work">Center of Hygiene and Epidemiology</h3>
        <p className="exp__info">Hygienist/ Head of the department</p>
      </div>
      <div className="exp__cont">
        <p className="exp__data">2012 - 2018</p>
        <h3 className="exp__plase exp-stud">Belarusian State Medical University</h3>
        <p className="exp__info">Preventive medicine</p>
      </div>
    </div>
  );
}
