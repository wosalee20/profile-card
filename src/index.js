import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.jpg" alt="Praise Wosa" />;
}
function Intro() {
  return (
    <div>
      <h1> Praise Wosa</h1>
      <p>
        Junior Full-Stack web developer. When not coding or fixing a bug, i like
        to play video games, to cook (and to eat), or to just enjoy watching
        movies.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html+Css" emoji="🙌" color="orangered" />
      <Skill skill="JavaScript" emoji="🤞" color="yellow" />
      <Skill skill="React" emoji="👍" color="#123456" />
      <Skill
        skill="Python(Django,Flask)
    "
        emoji="👍"
        color="forestgreen"
      />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
