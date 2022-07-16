import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  _loading: boolean;
  @Input()  set isLoading(loading: boolean) {   
    this._loading = loading;
  };
  @Input() message: string | undefined;
}
