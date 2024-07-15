// src/chatgpt/chatgpt.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatgptService } from './chatgpt.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [ChatgptService],
  exports: [ChatgptService],
})
export class ChatgptModule {}
