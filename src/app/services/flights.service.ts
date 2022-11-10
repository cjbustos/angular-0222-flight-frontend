import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/';

  addFlight(flight: Flight) {
    return this.http.post(`${this.url}add-flight`, flight);
  }

  getFlights() {
    return this.http.get(`${this.url}flights`);
  }

}
