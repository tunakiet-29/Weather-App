# Weather App

A simple city weather application built with plain HTML, CSS, and JavaScript. Users can select a city from the dropdown, click the weather button, and the app fetches weather data from an external API to display current temperature, humidity, wind speed, wind gusts, and perceived temperature.

## Features

- Select a city from the dropdown menu
- Fetch weather data from a public weather API
- Display:
  - city name
  - weather description
  - current temperature
  - feels-like temperature
  - humidity
  - wind speed
  - wind gust
- Clean and easy-to-use interface

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Weather API: `https://weather-proxy.freecodecamp.rocks/api/city/{city}`

## Project Structure

```text
WeatherApp/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

Since this is a static web app, you can open `index.html` directly in a browser, or run it with a tool such as Live Server in VS Code for a better development experience.

### Quick Start

1. Open the project folder in VS Code
2. Open `index.html`
3. Right-click and choose `Open with Live Server` if the extension is installed
4. Or open the file directly in your browser

## Supported Cities

- New York
- Los Angeles
- Chicago
- Paris
- Tokyo
- London

## Notes

- The app depends on an external weather API, so an internet connection is required when running it in the browser.
- If the API fails or is unavailable, an alert message will appear: `Something went wrong, please try again later!`

## Author

This project was created for learning and practicing basic frontend development.
