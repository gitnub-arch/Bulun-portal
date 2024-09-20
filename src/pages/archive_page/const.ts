import ArchiveProps from "./type";
import tree from "@/assets/images/tree.jpg";
import room from "@/assets/images/room.jpg";
import camera from "@/assets/images/camera.jpg";
import office from "@/assets/images/office.jpg";

export const ARCHIVE_ITEM: ArchiveProps[] = [
  {
    imgURL: tree,
    text: "Фотографии",
  },

  {
    imgURL: room,
    text: "Фотографии музея",
  },

  {
    imgURL: camera,
    text: "Видео",
  },

  {
    imgURL: office,
    text: "Видео поздравления",
  }
];
