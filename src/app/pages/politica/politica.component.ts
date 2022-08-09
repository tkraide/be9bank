import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '@app/@shared/model';
import { AuthService } from '@app/@shared/services/auth/auth.service';
import { environment } from '@env/environment';
// import WebViewer from '@pdftron/webviewer';


@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss']
})
export class PoliticaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  public product: any;

  ngOnInit(): void {
    this.product = environment.product as any;
  }


  // @ViewChild('viewer') viewerRef: ElementRef;

  // ngAfterViewInit(): void{
  //   WebViewer({
  //     path:'../assets/lib',
  //     initialDoc:'../assets/PoliticadePrivacidadeAPP.pdf'
  //   },this.viewerRef.nativeElement).then(instance => {

  //   });
  // }

  }
