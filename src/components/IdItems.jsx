import axios from "axios";
import { React, useState, useEffect } from "react";

const IdItems = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(id).then((res) => setItem(res.data));
  }, []);
  console.log(item);
  return (
    <div>
      <li>{item.name}</li>
      <img src={item.image} alt="" />
      <li>
        <i
          class="fa-solid fa-circle fa-2xs"
          style={{
            color:
              item.status === "Alive"
                ? "green"
                : item.status === "Dead"
                ? "red"
                : "grey",
          }}
        ></i>{" "}
        {item.status} - {item.species}
      </li>
      <li>origin: </li>
      {item.origin?.name}
      <li>episodes where appear: </li> {item.episode?.length}
    </div>
  );
};

export default IdItems;
