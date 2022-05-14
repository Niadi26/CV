import './skills.css';

export function Skills() {
    return (
        <div className="side">
            <h3 className="title">Skills</h3>
            <ul className='skill_cont'>
                <li className="skill__item">JavaScript</li>
                <li className="skill__item">Typescript</li>
                <li className="skill__item">React</li>
                <li className="skill__item">Redux</li>
                <li className="skill__item">HTML, Pug</li>
                <li className="skill__item">Css, Sass/Scss</li>
                <li className="skill__item">Webpack</li>
                <li className="skill__item">Eslint, prettier</li>
            </ul>
            <p><span className='attention'>Work whith:</span> Git, Figma, Trello, Postman, Netlify, etc.</p>
            <a href='https://www.efset.org/cert/3H4psg' className='skill__en' target='_blank'>English level B1<a className='certificate'/></a>
        </div>
    )
}