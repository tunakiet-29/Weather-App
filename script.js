const button     = document.getElementById("get-weather-btn");
const select     = document.getElementById("city-select");
const card       = document.getElementById("weather-container");
const emptyState = document.getElementById("empty-state");

button.addEventListener("click", () => {
  if (select.value === "") return;
  showWeather(select.value);
});

async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  button.textContent = "Đang tải...";
  button.disabled = true;

  const weatherData = await getWeather(city);

  button.textContent = "Xem thời tiết";
  button.disabled = false;

  if (!weatherData) {
    alert("Có lỗi xảy ra, thử lại sau nhé!");
    return;
  }

  // Icon
  const iconCode = weatherData.weather?.[0]?.icon;
  const iconEl   = document.getElementById("weather-icon");
  if (iconCode) {
    iconEl.src   = `https://openweathermap.org/img/wn/${iconCode.split("/").pop().replace(".png","")}@2x.png`;
    iconEl.style.display = "block";
  } else {
    iconEl.style.display = "none";
  }

  // Thông tin chính
  document.getElementById("location").textContent     = weatherData.name ?? "N/A";
  document.getElementById("weather-main").textContent = weatherData.weather?.[0]?.description ?? weatherData.weather?.[0]?.main ?? "N/A";

  // Nhiệt độ — làm tròn
  const temp = weatherData.main?.temp;
  document.getElementById("main-temperature").textContent = temp != null ? Math.round(temp) : "N/A";

  const feelsLike = weatherData.main?.feels_like;
  document.getElementById("feels-like").textContent = feelsLike != null ? Math.round(feelsLike) : "N/A";

  document.getElementById("humidity").textContent = weatherData.main?.humidity ?? "N/A";

  const wind = weatherData.wind?.speed;
  document.getElementById("wind").textContent = wind != null ? wind.toFixed(1) : "N/A";

  const gust = weatherData.wind?.gust;
  document.getElementById("wind-gust").textContent = gust != null ? gust.toFixed(1) : "—";

  // Hiện card, ẩn empty state
  card.style.display       = "block";
  emptyState.style.display = "none";
}
