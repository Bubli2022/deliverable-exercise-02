import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import axios from "axios"
import IdItems from "./components/IdItems"
import MoonLoader from "react-spinners/MoonLoader"

function App() {
   const [id, setId] = useState({})
   const [typeId, setTypeId] = useState("")
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      }, 3000)
   }, [])

   useEffect(() => {
      const randomId = Math.floor(Math.random() * 126) + 1
      axios
         .get(`https://rickandmortyapi.com/api/location/${randomId}`)
         .then((res) => setId(res.data))
   }, [])
   //console.log(id);
   const searchType = () => {
      axios
         .get(`https://rickandmortyapi.com/api/location/${typeId}`)
         .then((res) => setId(res.data))
   }
   return (
      <div className="App">
         {loading ? (
            <MoonLoader
               className="loader"
               color={"#ff5e00"}
               loading={loading}
               size={50}
               aria-label="Loading Spinner"
               data-testid="loader"
            />
         ) : (
            <div>
               {" "}
               <div className="banner"></div>
               <h1>Rick and Morty Wiki</h1>
               <input
                  type="text"
                  value={typeId}
                  onChange={(e) => setTypeId(e.target.value)}
               />
               <button className="btn" onClick={searchType}>
                  Search
               </button>{" "}
               <br />
               <h2 className="info-location">{id.name}</h2>
               <br />
               <div className="information">
                  <span>
                     <b>type:</b> {id.type}
                  </span>
                  <span>
                     <b>dimension:</b> {id.dimension}
                  </span>
                  <span>
                     <b>population: </b> {id.residents?.length}
                  </span>
               </div>
               <br />
               <h3 className="title-2">Residents</h3>
               <ul className="container">
                  {id.residents?.map((id) => (
                     <IdItems id={id} key={id} />
                  ))}
               </ul>
            </div>
         )}
      </div>
   )
}

export default App
