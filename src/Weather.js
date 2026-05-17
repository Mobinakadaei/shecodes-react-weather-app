import React from "react";

export default function Weather() {
    let weatherData = {
        city: "Paris",
        weekday: "Friday",
        time: "16:32",
        clouds: "overcast clouds",
        humidity: 37,
        wind: 2.12,
        temperature: 20,
    };
    return (
        <div className="weather-app">
            <header>
                <form className="search-form">
                    <input
                        type="search"
                        placeholder="Enter a city..."
                        className="search-form-input"
                    />
                    <input type="submit" value="Search" className="search-form-button" />
                </form>
            </header>
            <main>
                <div className="weather-app-data">
                    <div>
                        <h1 className="weather-app-city">{weatherData.city}</h1>
                        <p className="weather-app-details">
                            <span>
                                {weatherData.weekday} {weatherData.time}
                            </span>
                            , <span>{weatherData.clouds}</span>
                            <br />
                            Humidity:
                            <strong className="humidity"> {weatherData.humidity}%</strong>,
                            Wind: <strong className="wind">{weatherData.wind}km/h</strong>
                        </p>
                    </div>
                    <div className="weather-app-temperature-container">
                        <div className="weather-app-icon">
                            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png" alt="weather status icon" />
                        </div>
                        <div className="weather-app-temperature">
                            {weatherData.temperature}
                        </div>
                        <div className="weather-app-unit">°C</div>
                    </div>
                </div>
            </main>
            <footer>
                This project was coded by{" "}
                <a href="https://github.com/Mobinakadaei">Mobina Kadaei</a>, is{" "}
                <a href="https://github.com/Mobinakadaei/shecodes-react-weather-app">
                    on Github
                </a>{" "}
                and{" "}
                <a href="https://weather-app-react-mobina.netlify.app/">
                    hosted on Netlify
                </a>
            </footer>
        </div>
    );
}
