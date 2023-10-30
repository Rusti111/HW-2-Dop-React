import { useState } from "react";
import axios from "axios";
import Form from "./component/Form";
import Table from "./component/Table";
import "./style.css"

function App() {

  const [data, setData] = useState({});

  const getWeather = (city) => {
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const APIlink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(APIlink)
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        setData({});
      });
  }
  return (
    <div className="wrapper">
      <Form getWeather={getWeather} />
      <Table data={data} />
    </div>
  );
}

export default App;
