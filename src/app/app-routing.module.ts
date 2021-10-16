import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'langs',
    loadChildren: () => import('./langs/langs.module').then( m => m.LangsPageModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'landing2',
    loadChildren: () => import('./landing2/landing2.module').then( m => m.Landing2PageModule)
  },
  {
    path: 'landing3',
    loadChildren: () => import('./landing3/landing3.module').then( m => m.Landing3PageModule)
  },
  {
    path: 'landing4',
    loadChildren: () => import('./landing4/landing4.module').then( m => m.Landing4PageModule)
  },
  {
    path: 'landing5',
    loadChildren: () => import('./landing5/landing5.module').then( m => m.Landing5PageModule)
  },
  {
    path: 'landing6',
    loadChildren: () => import('./landing6/landing6.module').then( m => m.Landing6PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
