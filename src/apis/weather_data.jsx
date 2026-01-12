import { useEffect } from 'react';

const WeatherComponent = () => {


  useEffect(() => {
    const fetchWeather = async () => {
      const params = {
        latitude: 52.52,
        longitude: 13.41,
        hourly: 'temperature_2m'
      };

      const url = new URL('https://api.open-meteo.com/v1/forecast');


      
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Assuming the response structure is similar to what the TypeScript code references
        const weatherData = processWeatherData(data);
        
        // Logging the processed weather data
        for (let i = 0; i < weatherData.hourly.time.length; i++) {
          console.log(
            weatherData.hourly.time[i].toISOString(),
            weatherData.hourly.temperature2m[i]
          );
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const processWeatherData = (response) => {
    const utcOffsetSeconds = response.utc_offset_seconds;
    const hourly = response.hourly;

    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    const weatherData = {
      hourly: {
        time: range(Number(hourly.time[0]), Number(hourly.time.slice(-1)[0]), hourly.time_interval).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.temperature_2m,
      },
    };

    return weatherData;
  };

  return <div>Weather Component</div>;
};

export default WeatherComponent;
