import AfishaProps, { AfishaListProps, AfishaTimeProps } from "./type";
import gentelmen from "@/assets/images/gentelmen.png";
import greenBook from "@/assets/images/greenBook.png";
import angel from "@/assets/images/angel.png";

export const AFISHA_LIST: AfishaListProps[] = [
  {
    day: "ЧТ",
    data: "16 июл.",
    number: 1,
    index: 0,
  },
  {
    day: "ПТ",
    data: "16 июл.",
    number: 2,
    index: 1,
  },
  {
    day: "СБ",
    data: "16 июл.",
    number: 3,
    index: 2,
  },
  {
    day: "ВС",
    data: "16 июл.",
    number: 4,
    index: 3,
  },
  {
    day: "ПН",
    data: "16 июл.",
    number: 5,
    index: 4,
  },
  {
    day: "ВТ",
    data: "16 июл.",
    number: 6,
    index: 5,
  },

  {
    day: "СР",
    data: "16 июл.",
    number: 7,
    index: 6,
  },
];

export const AFISHA_TIME: AfishaTimeProps[] = [
  {
    time: "10:00",
    index: 0,
  },
  {
    time: "12:00",
    index: 1,
  },
  {
    time: "14:50",
    index: 2,
  },
  {
    time: "16:40",
    index: 3,
  },
  {
    time: "17:00",
    index: 4,
  },
  {
    time: "18:20",
    index: 5,
  },
  {
    time: "20:15",
    index: 6,
  },
  {
    time: "22:15",
    index: 7,
  },
];

export const AFISHA_ITEM: AfishaProps[] = [
  {
    imgUrl: gentelmen,
    title: "Джентльмены",
    enName: "The Gentlemen",
    duration: "1 час 55 минут",
    description:
      "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на ...",
    janr: "Боевик, Криминальный",
    index: 0,
  },
  {
    imgUrl: greenBook,
    title: "Зеленая книга",
    enName: "Green Book",
    duration: "1 час 55 минут",
    description:
      "960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли, утонченный светский лев, богатый и талантли ...",
    janr: "Боевик, Криминальный",
    index: 1,
  },
  {
    imgUrl: angel,
    title: "Падение ангела",
    enName: "Angel Has Fallen",
    duration: "1 час 55 минут",
    description:
      "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на ...",
    janr: "Боевик, Криминальный",
    index: 2,
  },
];
