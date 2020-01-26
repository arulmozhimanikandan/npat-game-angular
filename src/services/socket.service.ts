import * as io from 'socket.io-client';
import {observable, Observable} from 'rxjs';

export class SocketService {
  private socket;
  constructor() {
    this.socket = io('http://localhost:3000', {transports: ['websocket']});
  }

  public createRoom(name) {
    this.socket.emit('create', name);
  }

  public joinRoom(details) {
    this.socket.emit('join', details);
  }

}
