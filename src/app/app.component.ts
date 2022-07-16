import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { LoadingEvent } from './@shared/events/loading.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  loading = false;

  ngOnChanges(changes: SimpleChanges) {
    LoadingEvent.loading().subscribe(loading=>{
      this.loading = loading;      
    });
  }


 }
