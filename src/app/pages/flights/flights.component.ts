import { Component, OnInit } from '@angular/core';
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

  addFlight() {
    let flight = new Flight();
    flight.flightCode = 'AR1600';
    flight.from = 'Jujuy';
    flight.to = 'Buenos Aires';
    flight.date = '2022-11-10';
    flight.time = '1500';
    flight.flightState = 'delayed';
    flight.company = 'Aerolineas Argentinas';

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
