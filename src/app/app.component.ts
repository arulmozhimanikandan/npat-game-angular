import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'npat-game';
  constructor(private socket: SocketService) {
  }

  ngOnInit(): void {
    this.socket.createRoom('test');
  }

}
