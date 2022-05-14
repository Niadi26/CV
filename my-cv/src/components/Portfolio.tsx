import "./portfolio.css";

export function Portfolio() {
  return (
    <div className="side">
      <h3 className="title">Portfolio</h3>
      <div className="board__cont">
        <div className="board__item">
          <a
            className="board board-lang "
            href="https://niadi26.github.io/RS-lang/rs-lang/"
            target="_blank"
          >
            <p className="board__title">RS-lang</p>
          </a>
          <p>Application for learning English, with authorization and a working backend. Helped develop teamwork skills</p>
        </div>
        <div className="board__item">
        <a
          className="board board-qwiz"
          href="https://niadi26.github.io/Art-quiz/"
          target="_blank"
        >
          <p className="board__title">Art-quiz</p>
        </a>
          <p>Mini-game for guessing pictures and their authors. The project helped to develop the logic for working with the user.</p>
        </div>
        <div className="board__item">
        <a
          className="board board-moment"
          href="https://niadi26.github.io/Momentum/"
          target="_blank"
        >
          <p className="board__title">Momentum</p>
        </a>
          <p>An app similar to Google Momentum. Custom audio player, real-time timer, ability to choose language, work with different API</p>
        </div>
        <div className="board__item">
        <a
          className="board board-crist"
          href="https://niadi26.github.io/Christmas-time/christmas-task/"
          target="_blank"
        >
          <p className="board__title">Christmas-time</p>
        </a>
          <p>An app that allows you to choose Christmas toys and decorate the Christmas tree. Implemented filtering and sorting,drag&dro</p>
        </div>
      </div>
    </div>
  );
}
