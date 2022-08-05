import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import WebViewer from '@pdftron/webviewer';


@Component({
  selector: 'app-termosapp',
  templateUrl: './termosapp.component.html',
  styleUrls: ['./termosapp.component.scss'],
})



export class TermosappComponent implements OnInit {


  // pdfSrc="TermosWEB.pdf";

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
    public product: any;
      
    ngOnInit(): void {
      this.product = environment.product as any;
    }


  @ViewChild('viewer') viewerRef: ElementRef;

  ngAfterViewInit(): void{
    WebViewer({
      path:'../assets/lib',
      initialDoc:'../assets/TermosAPP.pdf'
    },this.viewerRef.nativeElement).then(instance => {

    });
  }

    
}
  

