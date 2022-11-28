import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Flight, FlightResponse } from 'src/app/model/flight';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights: FlightResponse[] = [];

  constructor(private flightService: FlightsService) {
  }

  ngOnInit(): void {
    this.getAllFlights();
  }

  flightForm = new FormGroup({
    flightCode: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    flightState: new FormControl(),
    company: new FormControl()
  })

  timeFormat(t: string): string {
    let result1 = t.substr(0, 2);
    let result2 = t.substr(3, 4);
    let result = result1.concat(result2);
    return result;
  }

  addFlightFrom() {
    console.log(this.flightForm.value);
  }

  addFlight() {
    let flight = new Flight();
    flight.flightCode = this.flightForm.value.flightCode;
    flight.from = this.flightForm.value.from;
    flight.to = this.flightForm.value.to;
    flight.date = this.flightForm.value.date;
    flight.time = this.timeFormat(this.flightForm.value.time);
    flight.flightState = this.flightForm.value.flightState;
    flight.company = this.flightForm.value.company;

    this.flightService.addFlight(flight).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.getAllFlights();
      }
    });
  }

  getAllFlights() {
    this.flightService.getFlights().subscribe({
      next: (data: any) => {
        console.log(data);
        this.flights = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
