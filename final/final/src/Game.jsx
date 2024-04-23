import { useState } from "react";
import "./Game.css";
import Card from "./Card";
import codecho from "./assets/images/codecho-bg.jpg";
import findus from "./assets/images/findus-bg.jpg";

function Game({ setPage }) {
  const [filter, setFilter] = useState("all");

  const games = [
    {
      title: "Code Echo",
      text: "You will become an AI repair technician, uploading data from the AGI era and aiding future humans in rebuilding a new AI system, under the codename Echo.",
      pic: codecho,
      alt: "Code Echo Game",
      category: "commercial",
      page: "/code-echo"
    },
    {
      title: "Find Us",
      text: "You'll step into the shoes of an applicant participating in a special talent recruitment test for the mixed-reality game company, Vapor. This company is a metaverse gaming company, but they aspire to achieve much more than what meets the eye...",
      pic: findus,
      alt: "Find Us Game",
      category: "non-commercial",
      page: "/find-us"
    }
  ];

  return (
    <div id='main-content'>
      <div className="game">
        <h1 className="game-title">OUR GAMES</h1>
        <div className="filter-buttons">
          <label className="filter-title" htmlFor="game-filter">Game Filter: </label>
          <select className="filter-option" id="game-filter" onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="all">Show All</option>
            <option value="commercial">Commercial</option>
            <option value="non-commercial">Non-Commercial</option>
          </select>
        </div>
        <div className="game-cards">
          {games.filter(game => filter === 'all' || game.category === filter).map((game, index) => (
            <Card
              key={index}
              className="game-card"
              title={game.title}
              text={game.text}
              pic={game.pic}
              alt={game.alt}
              linkText="Read More"
              onNavigate={() => setPage(game.page)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;




