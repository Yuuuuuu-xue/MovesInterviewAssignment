interface BaseWeatherData {
  clouds: number, // Cloudiness %
  humidity: number, // %
  pressure: number, // hPa
  wind_speed: number, // metre/sec
  weather: WeatherDescription[], 
  dt: number // current time,
  rain?: number, // mm
  snow?: number, // mm
}


export interface CurrentWeatherData extends BaseWeatherData {
  temp: number
}

interface Temperature {
  day: number,
  env: number,
  max: number,
  min: number
}

export interface DailyWeatherData extends BaseWeatherData{
  temp: Temperature,
}

interface WeatherDescription {
  main: string,
  description: string
}

export interface Data {
  lat: number,
  lon: number,
  current: CurrentWeatherData,
  daily: DailyWeatherData[]
}