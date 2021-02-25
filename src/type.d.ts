interface ITimer {
  id: string;
  name: string;
  billable: boolean;
  assignedBy: string;
  assignedTo: string;
  timer: object;
}

interface ApiDataType {
  data: [];
  name: string;
  assignedTo: string;
  project: string;
  client: string;
  billable: boolean;
  timers: object;
}

declare module "react-datetime-picker";
