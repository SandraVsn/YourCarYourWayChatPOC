// src/app/services/websocket.service.ts

import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client/dist/sockjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient!: Client;
  private messageSubject = new Subject<any>();

  constructor() {
    this.connect();
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = new Client({
      webSocketFactory: () => socket as WebSocket,
      onConnect: () => {
        this.stompClient.subscribe('/topic/public', (message: IMessage) => {
          if (message.body) {
            this.messageSubject.next(JSON.parse(message.body));
          }
        });
      },
    });
    this.stompClient.activate();
  }

  sendMessage(message: any) {
    this.stompClient.publish({
      destination: '/app/chat.sendMessage',
      body: JSON.stringify(message),
    });
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
