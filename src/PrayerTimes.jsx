import { useState } from "react";

function PrayerTimes() {
  const [city, setCity] = useState("");   
  const [prayers, setPrayers] = useState(null);

  const fetchPrayers = async () => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Algeria&method=2`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      setPrayers(data.data.timings);
    } catch (err) {
      setPrayers(null);
    }
  };

  return (
    <div className="app">
      <div className="first">
        <input
          type="text"
          placeholder="Enter city (e.g. Algiers)"
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />
        <button onClick={fetchPrayers}>Click here</button>
      </div>

      <div className="second">
        {prayers ? (
          <ul>
            <li>Fajr: {prayers.Fajr}</li>
            <li>Dhuhr: {prayers.Dhuhr}</li>
            <li>Asr: {prayers.Asr}</li>
            <li>Maghrib: {prayers.Maghrib}</li>
            <li>Isha: {prayers.Isha}</li>
          </ul>
        ) : (
          <p>No data yet. Enter a city and click the button.</p>
        )}
      </div>
    </div>
  );
}

export default PrayerTimes;
