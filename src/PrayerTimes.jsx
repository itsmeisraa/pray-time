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

  const prayerOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  // Use real working external links
  const prayerLinks = {
    Fajr: "https://en.islamway.net/article/8163/fajr-prayer",
    Dhuhr: "https://www.prayertimes.org/en/how-to-perform-dhuhr-prayer/",
    Asr: "https://www.prayertimes.org/en/how-to-perform-dhuhr-prayer/", // replace with Asr-specific link
    Maghrib: "https://www.prayertimes.org/en/how-to-perform-dhuhr-prayer/", // replace with Maghrib-specific link
    Isha: "https://www.prayertimes.org/en/how-to-perform-dhuhr-prayer/", // replace with Isha-specific link
  };

  return (
    <>
      <h3 className="title">Prayer Times</h3>
      <div className="card">
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
              {prayerOrder.map((name) => (
                <li key={name}>
                  {name}: {prayers[name]}
                  <a
                    href={prayerLinks[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-info"
                  >
                    Click here for more info
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data yet. Enter a city and click the button.</p>
          )}
        </div>
        <p>made by <a  href="https://github.com/itsmeisraa" className="israa">&#9829;</a>	 with israa chiheb </p>
      </div>
      </div>
    </>
  );
}

export default PrayerTimes;
