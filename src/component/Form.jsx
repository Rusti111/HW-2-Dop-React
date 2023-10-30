import { useState } from "react";


const Form = ({ getWeather }) => {
    const [city, setCity] = useState('');
    return (
        <form className="form">
            <input type="text" placeholder="City name" onChange={(event) => {
                setCity(event.target.value);
            }} />
            <button type="button" onClick={() => {
                getWeather(city)
            }}>get</button>
        </form>
    );
}

export default Form;
