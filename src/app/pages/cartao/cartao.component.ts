import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StatusService } from '@app/@shared/services/status/status.service';
import { ParnerService } from '@app/@shared/services/partner/partner.service';
import { AttachmentContractInterface, IKeyValue, IPartner, IRegister } from '@app/@shared/model';
import { LoadingEvent } from '@app/@shared/events/loading.event';
import { MatDialog } from '@angular/material/dialog';
import { ContractService } from '@app/@shared/services/contract/contract.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { AuthService } from '@app/@shared/services/auth/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})

export class CartaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
    public product: any;
      
    ngOnInit(): void {
      this.product = environment.product as any;
    }
}
  

