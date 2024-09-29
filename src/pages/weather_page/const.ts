import WeatherProps from "./type";
import sun from "@/assets/weather_icons/sun.svg";
import cloud from "@/assets/weather_icons/cloud.svg";
import rain from "@/assets/weather_icons/rain.svg";
import night_rain from "@/assets/weather_icons/night_rain.svg";

export const WEATHER_ITEM_FIRST: WeatherProps[] = [
  {
    time: "Утром",
    degrees: +21,
    imgURL: sun,
    weather: "Ясно",
    speed: "3 - 5",
    pressure: 760,
    humidity: 53,
  },
  {
    time: "Днем",
    degrees: +25,
    imgURL: sun,
    weather: "Ясно",
    speed: "1 - 2",
    pressure: 758,
    humidity: 40,
  },
  {
    time: "Вечер",
    degrees: +22,
    imgURL: cloud,
    weather: "Облачно",
    speed: "8 - 10",
    pressure: 759,
    humidity: 50,
  },
  {
    time: "Ночью",
    degrees: +19,
    imgURL: cloud,
    weather: "Облачно",
    speed: "6 - 7",
    pressure: 757,
    humidity: 65,
  },
];

export const WEATHER_ITEM_SECOND: WeatherProps[] = [
  {
    time: "Утром",
    degrees: +23,
    imgURL: cloud,
    weather: "Облачно",
    speed: "4 - 5",
    pressure: 758,
    humidity: 55,
  },
  {
    time: "Днем",
    degrees: +27,
    imgURL: sun,
    weather: "Солнечно",
    speed: "7 - 9",
    pressure: 756,
    humidity: 45,
  },
  {
    time: "Вечер",
    degrees: +24,
    imgURL: cloud,
    weather: "Облачно",
    speed: "5 - 7",
    pressure: 759,
    humidity: 50,
  },
  {
    time: "Ночью",
    degrees: +20,
    imgURL: night_rain,
    weather: "Дождь",
    speed: "3 - 12",
    pressure: 754,
    humidity: 70,
  },
];

export const WEATHER_ITEM_THIRD: WeatherProps[] = [
  {
    time: "Утром",
    degrees: +19,
    imgURL: rain,
    weather: "Дождь",
    speed: "5 - 8",
    pressure: 755,
    humidity: 70,
  },
  {
    time: "Днем",
    degrees: +21,
    imgURL: rain,
    weather: "Ливень",
    speed: "2 - 3",
    pressure: 752,
    humidity: 85,
  },
  {
    time: "Вечер",
    degrees: +18,
    imgURL: rain,
    weather: "Дождь",
    speed: "7 - 9",
    pressure: 751,
    humidity: 75,
  },
  {
    time: "Ночью",
    degrees: +16,
    imgURL: night_rain,
    weather: "Дождь",
    speed: "5 - 7",
    pressure: 750,
    humidity: 80,
  },
];

export const WEATHER_ITEM_FOURTH: WeatherProps[] = [
  {
    time: "Утром",
    degrees: +20,
    imgURL: cloud,
    weather: "Облачно",
    speed: "8 - 10",
    pressure: 760,
    humidity: 60,
  },
  {
    time: "Днем",
    degrees: +22,
    imgURL: cloud,
    weather: "Облачно",
    speed: "6 - 8",
    pressure: 758,
    humidity: 50,
  },
  {
    time: "Вечер",
    degrees: +19,
    imgURL: cloud,
    weather: "Пасмурно",
    speed: "4 - 6",
    pressure: 757,
    humidity: 55,
  },
  {
    time: "Ночью",
    degrees: +17,
    imgURL: cloud,
    weather: "Облачно",
    speed: "5 - 7",
    pressure: 755,
    humidity: 65,
  },
];

export const WEATHER_ITEM_FIFTH: WeatherProps[] = [
  {
    time: "Утром",
    degrees: +18,
    imgURL: sun,
    weather: "Ясно",
    speed: "2 - 4",
    pressure: 762,
    humidity: 55,
  },
  {
    time: "Днем",
    degrees: +20,
    imgURL: sun,
    weather: "Ясно",
    speed: "1 - 2",
    pressure: 759,
    humidity: 45,
  },
  {
    time: "Вечер",
    degrees: +19,
    imgURL: cloud,
    weather: "Облачно",
    speed: "8 - 10",
    pressure: 760,
    humidity: 50,
  },
  {
    time: "Ночью",
    degrees: +17,
    imgURL: night_rain,
    weather: "Дождь",
    speed: "5 - 7",
    pressure: 758,
    humidity: 70,
  },
];
