import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { HttpClientModule } from '@angular/common/http';
import { DataProviderService } from './data-provider.service';
import { LaunchesService } from './launches.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Broadcaster } from './broadcaster.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, DataProviderService, LaunchesService, Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
