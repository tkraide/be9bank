import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/@shared/model';
import { DatabaseService } from '@app/@shared/services/database/database.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public showFiller: boolean = false;
  public project: any = environment.product;
  public user:IUser;
  constructor(private db:DatabaseService) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.db.user.toCollection().first();    
  }
}
