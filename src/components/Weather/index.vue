<template>
       <div>
         <h1>Weather in {{ weather.name }}</h1>
         <div v-if="weather" class="weather-grid">
           <div class="weather-item">
             <strong>Temperature:</strong> {{ weather.main.temp }}°C
           </div>
           <div class="weather-item">
             <strong>Feels Like:</strong> {{ weather.main.feels_like }}°C
           </div>
           <div class="weather-item">
             <strong>Condition:</strong> {{ weather.weather[0].description }}
           </div>
           <div class="weather-item">
             <strong>Humidity:</strong> {{ weather.main.humidity }}%
           </div>
           <div class="weather-item">
             <strong>Pressure:</strong> {{ weather.main.pressure }} hPa
           </div>
           <div class="weather-item">
             <strong>Wind Speed:</strong> {{ weather.wind.speed }} m/s
           </div>
           <div class="weather-item">
             <strong>Visibility:</strong> {{ weather.visibility }} m
           </div>
           <div class="weather-item">
             <strong>Sunrise:</strong> {{ formatTime(weather.sys.sunrise) }}
           </div>
           <div class="weather-item">
             <strong>Sunset:</strong> {{ formatTime(weather.sys.sunset) }}
           </div>
         </div>
       </div>
     </template>
     
     <script>
     export default {
       data() {
         return {
           weather: null
         };
       },
       created() {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi,India&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
           .then(response => response.json())
           .then(data => {
             this.weather = data;
           });
       },
       methods: {
         formatTime(timestamp) {
           const date = new Date(timestamp * 1000);
           return date.toLocaleTimeString();
         }
       }
     };
     </script>
     
     <style>
     .weather-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
       gap: 1rem;
       margin-top: 1rem;
     }
     .weather-item {
       background: #f0f0f0;
       padding: 1rem;
       border-radius: 8px;
     }
     </style>
     