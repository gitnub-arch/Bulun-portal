import ItemTransportProps from "./types";

export const TRANSPORT: ItemTransportProps = {
  weekdays: [
    {
      title: 'Тикси-3 Гостиница "Арктика"',
      schedule: [
        { time: '7:50' },
        { time: '8:50' },
        { time: '13:50' },
        { time: '14:50' },
        { time: '17:50' },
      ],
    },
    {
      title: 'Аэропорт',
      schedule: [
        { time: '8:20' },
        { time: '9:20' },
        { time: '14:20' },
        { time: '15:20' },
        { time: '18:20' },
      ],
    },
    {
      title: 'Тикси Магазин "Визит"',
      schedule: [
        { time: '8:30' },
        { time: '9:30' },
        { time: '14:30' },
        { time: '15:30' },
        { time: '18:30' },
      ],
    },
  ],
  saturday: {
    title: 'Тикси-3 Гостиница "Арктика"',
    schedule: [
      { time: '7:50' },
      { time: '8:50' },
      { time: '13:50' },
      { time: '14:50' },
      { time: '17:50' },
    ],
    subtitle: 'Тикси-3 Гостиница "Арктика"',
    additionalSchedule: [
      { time: '8:20' },
      { time: '9:20' },
      { time: '14:20' },
      { time: '15:20' },
      { time: '18:20' },
    ],
    name: 'Тикси-3 Гостиница "Арктика"',
    timeItem: [
      { time: '8:20' },
      { time: '9:20' },
      { time: '14:20' },
      { time: '15:20' },
      { time: '18:20' },
    ],
  },
  sunday: 'Воскресенье - выходной',
};