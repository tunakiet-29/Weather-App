# Weather App

A simple weather application built with plain HTML, CSS, and JavaScript. Users can choose a city from the dropdown, click the button to fetch the weather, and view key information such as temperature, humidity, wind speed, wind gusts, and feels-like temperature.

## Overview

This project is a lightweight frontend demo designed to practice working with JavaScript, DOM manipulation, and external API requests. It is ideal for beginners who want to learn how to fetch and display real-time data in a clean web interface.

## Features

- Select a city from the dropdown menu
- Fetch weather data from a public API
- Display:
  - city name
  - weather condition
  - current temperature
  - feels-like temperature
  - humidity
  - wind speed
  - wind gust
- Clean and easy-to-use interface

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Weather API: `https://weather-proxy.freecodecamp.rocks/api/city/{city}`

## Project Structure

```text
WeatherApp/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Getting Started

Because this is a static web project, you can run it by opening `index.html` directly in the browser, or by using Live Server in VS Code for a smoother development experience.

### Quick Start

1. Open the project folder in VS Code
2. Open `index.html`
3. Right-click the file and choose `Open with Live Server` if the extension is installed
4. Alternatively, open the file directly in your browser

## Supported Cities

- New York
- Los Angeles
- Chicago
- Paris
- Tokyo
- London

## Notes

- An internet connection is required because the app depends on an external weather API.
- If the API request fails, an alert message will appear: `Something went wrong, please try again later!`
- This project is intended for learning and practice, not for production deployment.

## Possible Improvements

- Add search by city name instead of a fixed dropdown
- Support more cities and countries
- Add error handling with better user feedback
- Improve UI/UX with animations and loading states

## Author

This project was created for learning and practicing basic frontend development.
