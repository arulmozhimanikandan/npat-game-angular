import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SocketService} from '../services/socket.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
