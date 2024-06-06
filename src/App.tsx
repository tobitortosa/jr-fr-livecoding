import "./App.css";
import BoxComponent from "./components/BoxComponent/BoxComponent.jsx";

function App() {
  return (
    <main>
      <div className="mainContainer">
        <div className="container">
          <div className="boxContainer">
            <BoxComponent boxWidth="100%" />
          </div>
          <div className="boxContainer">
            <BoxComponent boxWidth="30%" />
            <BoxComponent boxWidth="64%" />
          </div>
          <div className="boxContainer">
            <BoxComponent boxWidth="64%" />
            <BoxComponent boxWidth="30%" />
          </div>
        </div>
      </div>
    </main >
  );
}

export default App;
