import { AdministrationProps } from "./types";
import Jons from "@/assets/Jons.png";
import Naruto from "@/assets/Naruto.png";
import Geralt from "@/assets/Geralt.png";
import Potter from "@/assets/Potter.png";

export const ADMINISTRATION_ITEMS: AdministrationProps[] = [
  {
    id: 0,
    photoURL: Jons,
    name: "Индиана Джонс",
    number: +996550344321,
    position: "Президент",
  },

  {
    id: 1,
    photoURL: Naruto,
    name: "Наруто",
    number: +996550344322,
    position: "Хокаге",
  },

  {
    id: 2,
    photoURL: Geralt,
    name: "Геральт",
    number: +996550344323,
    position: "Главный бухгалтер",
  },

  {
    id: 3,
    photoURL: Potter,
    name: "Поттер",
    number: +996550344324,
    position: "Депутат",
  },
];
