import { useState } from "react";

function PrayerTimes() {
  const [city, setCity] = useState("");   
  const [times, setTimes] = useState(null); 
const fetchTime = async () => {
  try {
    const response = await fetch(
      `https://worldtimeapi.org/api/timezone/${city}`
    );
    const data = await response.json();

    const datetime = data.datetime;

    const onlyTime = datetime.split("T")[1].split("+")[0]; // "21:45:30"
    const [hour, minute] = onlyTime.split(":"); // ["21", "45", "30"]
    const shortTime = `${hour}:${minute}`; // "21:45"

    setTimes(shortTime);
  } catch (err) {
    setTimes("Error: timezone not found");
  }
};

  return (
    <>
      <div className="app">
        <div className="first">
          <input
            type="text"
            placeholder="Enter the timezone (Region/City)"
            value={city}
            onChange={(e) => setCity(e.target.value)} 
          />
          <button onClick={fetchTime}>Click here</button>
          <h4 className="city">Current time: {times}</h4>
        </div>
      </div>
    </>
  );
}

export default PrayerTimes;
