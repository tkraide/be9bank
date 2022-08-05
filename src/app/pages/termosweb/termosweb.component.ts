import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IConfig } from '@app/@shared/model';
import { ParnerService } from '@app/@shared/services/partner/partner.service';
import { AuthService } from '@app/@shared/services/auth/auth.service';
import { environment } from '@env/environment';
import WebViewer from '@pdftron/webviewer';


@Component({
  selector: 'app-termosweb',
  templateUrl: './termosweb.component.html',
  styleUrls: ['./termosweb.component.scss'],
})
export class TermoswebComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
      public product: any;
        
      ngOnInit(): void {
        this.product = environment.product as any;
      }


    @ViewChild('viewer') viewerRef: ElementRef;

    ngAfterViewInit(): void{
      WebViewer({
        path:'../assets/lib',
        initialDoc:'../assets/TermosWEB.pdf'
      },this.viewerRef.nativeElement).then(instance => {

      });
    }


  }
