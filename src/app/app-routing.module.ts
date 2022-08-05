import { PrefixNot } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './@shared/services/guard/guard.service';
import { EmprestimoModule } from './pages/emprestimo/emprestimo.module';
import { EmpresaModule } from './pages/empresa/empresa.module';
import { MainComponent } from './pages/main/main.component';
import { CartaoModule } from './pages/cartao/cartao.module';
import { AjudaModule } from './pages/ajuda/ajuda.module';
import { ServicosModule } from './pages/servicos/servicos.module';
import { SobreModule} from './pages/sobre/sobre.module';
import { PixModule } from './pages/pix/pix.module';
import { HomeModule } from './pages/home/home.module';
import { TermosappModule } from './pages/termosapp/termosapp.module';
import { TermoswebModule } from './pages/termosweb/termosweb.module';
import { PoliticaModule } from './pages/politica/politica.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'home',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'empresa',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => EmpresaModule,
  },
  {
    path: 'cartao',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => CartaoModule,
  },
  {
    path: 'pix',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => PixModule,
  },
  {
    path: 'servicos',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ServicosModule,
  },
  {
    path: 'ajuda',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => AjudaModule,
  }
  ,
  {
    path: 'emprestimo',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => EmprestimoModule,
  }
  ,
  {
    path: 'sobre',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => SobreModule,
  }
  ,
  {
    path: 'politica',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => PoliticaModule,
  }
  ,
  {
    path: 'termosWeb',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => TermoswebModule,
  }
  ,
  {
    path: 'termosApp',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => TermosappModule,
  }
];
// Páginas
  // Para Voce(home)
  // Pix
  // Cartao
  // Emprestimo
  // Servicos
  // Empresa
  // Sobre a be9
  // Ajuda

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
