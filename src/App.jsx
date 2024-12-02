// Importing necessary modules and components
import axios from "axios"; // For making API requests
import { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import Loader from "./Loader"; // Loader component to display while fetching data

// Main functional component
function App() {
  // State to store the city entered by the user, defaulting to "Burhanpur"
  const [city, setCity] = useState('Burhanpur');
  // State to store weather data fetched from the API
  const [weather, setWeather] = useState(null);

  // Updates the city state when the user types in the input field
  const handleInput = (e) => {
    setCity(e.target.value);
  };

  // Prevents default form submission and triggers data fetch
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    fetchData(); // Fetches weather data for the entered city
  };

  // Asynchronous function to fetch weather data from the WeatherAPI
  const fetchData = async () => {
    try {
      // API call to fetch weather data for the specified city
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=04ab243dc5284091aa9120543241506&q=${city}&aqi=no`
      );
      setWeather(res.data); // Stores the fetched data in the state
      console.log(res.data); // Logs the data for debugging
    } catch (error) {
      // Handles errors during the API request
      <h3>Please wait, data is fetching</h3>;
    }
  };

  // useEffect hook runs once when the component mounts to fetch weather for the default city
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <div className="main-container">
        {/* Form for entering the city name */}
        <div className="form-body">
          <form action="" onSubmit={handleSubmit}>
            {/* Input field for city name */}
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={handleInput}
            />
            {/* Submit button with an icon */}
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* Conditional rendering: Show weather data or loader */}
        {weather ? (
          <div className="container">
            {/* Sub-container for displaying the main weather information */}
            <div className="sub-container">
              <img src={weather.current.condition.icon} alt="" />
              <h1>
                {weather.current.temp_c} <sup>°C</sup>
              </h1>
              <h3>
                {weather.location.name}/{weather.location.country}
              </h3>
              <h4>{weather.current.condition.text}</h4>
              <h5>{weather.location.localtime}</h5>
            </div>

            {/* Section for additional weather highlights */}
            <div className="main">
              <h2>Today's Highlights</h2>
              <div className="row">
                {/* Weather highlight cards */}
                <div className="col">
                  <h5>UV Index</h5>
                  <h4>{weather.current.uv}</h4>
                </div>

                <div className="col">
                  <h5>Wind Status</h5>
                  <h4>{weather.current.wind_kph} km/h</h4>
                  <h3>{weather.current.wind_dir}</h3>
                </div>

                <div className="col">
                  <h5>Humidity</h5>
                  <h4>{weather.current.humidity}%</h4>
                </div>

                <div className="col">
                  <h5>Visibility</h5>
                  <h4>{weather.current.vis_km} km</h4>
                </div>

                <div className="col">
                  <h5>Wind Degree</h5>
                  <h4>{weather.current.wind_degree}</h4>
                </div>

                <div className="col">
                  <h5>Feels Like</h5>
                  <h4>
                    {weather.current.feelslike_c}<sup>°C</sup>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Show Loader component while waiting for data
          <Loader />
        )}
      </div>
    </>
  );
}

export default App; // Exports the component for use in other parts of the app
