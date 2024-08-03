import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { Subscription } from 'rxjs';

interface ChatMessage {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit, OnDestroy {
  messageContent: string = '';
  messages: ChatMessage[] = [];
  sender: string = `User ${Math.random()}`;

  private chatService = inject(ChatService);
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.chatService
      .getMessages()
      .subscribe((message: ChatMessage) => {
        this.messages.push(message);
      });
  }

  sendMessage() {
    if (this.messageContent.trim() !== '') {
      const chatMessage: ChatMessage = {
        sender: this.sender,
        content: this.messageContent,
      };

      this.chatService.sendMessage(chatMessage);
      this.messageContent = '';
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
