import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Spotify2025Component } from '../spotify2025/spotify2025.component';
import { Netflix2025Component } from '../netflix2025/netflix2025.component';

const routes: Routes = [
  {
    path: '**',
    component: AppComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Spotify2025Component,
    Netflix2025Component
   ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
