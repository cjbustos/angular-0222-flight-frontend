import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight, FlightResponse } from '../model/flight';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/';

  getFlights() {
    return this.http.get(`${this.url}flights`);
  }

  getFlight(id: string){
    return this.http.get(`${this.url}flights/${id}`)
  }

  addFlight(flight: Flight) {
    return this.http.post(`${this.url}add-flight`, flight);
  }

  updateFlight(flight: Flight, id: string){
    return this.http.put(`${this.url}flights/update/${id}`, flight);
  }

}
