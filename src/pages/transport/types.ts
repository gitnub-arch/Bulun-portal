export default interface ItemTransportProps {
  weekdays?: {
    title: string;
    schedule: {
      time: string;
    }[];
    subtitle?: string;
  }[];
  saturday?: {
    title: string;
    schedule: {
      time: string;
    }[];
    subtitle?: string;
    additionalSchedule?: {
      time: string;
    }[];
    name?: string;
    timeItem?: {
      time: string;
    }[];
  };
  sunday?: string;
}
