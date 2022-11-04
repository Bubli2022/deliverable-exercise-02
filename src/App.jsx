import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import IdItems from "./components/IdItems";

function App() {
  const [id, setId] = useState({});
  const [typeId, setTypeId] = useState("");
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setId(res.data));
  }, []);
  //console.log(id);
  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then((res) => setId(res.data));
  };
  return (
    <div className="App">
      <div className="container-1"></div>
      <hr />
      <h3>{id.name}</h3>
      <span>
        {" "}
        <b>type:</b>{" "}
      </span>
      {id.type}{" "}
      <span>
        {" "}
        <b>dimension:</b>
      </span>{" "}
      {id.dimension}{" "}
      <span>
        <b>population: </b>
      </span>{" "}
      {id.residents?.length}
      <br />
      <input
        type="text"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />
      <button onClick={searchType}>Search</button> <br />
      {typeId}
      {id.residents?.map((id) => (
        <IdItems id={id} key={id} />
      ))}
    </div>
  );
}

export default App;
