import { useEffect, useState } from "react";
import "./App.css";


function App() {
    const [counterValue, setCounterValue] = useState(10);
    const [changeValue, setChangeValue] = useState(1);

    useEffect(() => {
        fetch("/data.json").then((response) => response.json())
            .then((data) => {
                setCounterValue(data.counter);
                setChangeValue(data.changeValue);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="App">
            <input value={changeValue} type="number" onChange={(e) => { setChangeValue(parseInt(e.target.value)); }} />
            <div className="counter">
                <button onClick={() => setCounterValue((prevValue) => prevValue + changeValue)}>+</button>
                <p>{counterValue}</p>
                <button onClick={() => setCounterValue((prevValue) => prevValue - changeValue)}>-</button>
            </div>
        </div>
    );
}

export default App;
