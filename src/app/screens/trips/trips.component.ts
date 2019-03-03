import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  newTripForm = new FormGroup({
    selectedLine: new FormControl('', [Validators.required]),
    selectedStation: new FormControl('', [Validators.required])
  });

  lines = [];
  stations;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRailLines().subscribe(lines => {
      this.lines = lines;
      console.log(lines);
    });
    this.dataService.getStations().subscribe(stations => {
      this.stations = stations;
      console.log(stations);
    });
  }

  get selectedLine() {
    return this.newTripForm.get('selectedLine');
  }

  get selectedStation() {
    return this.newTripForm.get('selectedStation');
  }

  resetStation() {
    console.log('Reset Station');
    this.selectedStation.setValue('');
  }

  newTripSubmit() {
    console.log(this.newTripForm.value);
  }

}
