export class Flight {
  flightCode: string;
  from: string;
  to: string;
  date: string;
  time: string;
  flightState: string;
  company: string;
}

export interface FlightResponse {
  _id: string;
  flightCode: string;
  from: string;
  to: string;
  date: Date;
  flightState: string;
  company: string;
  __v: number;
  time: string;
}
