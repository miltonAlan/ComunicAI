import { Injectable } from '@nestjs/common';
import axios from 'axios';
import OpenAI from 'openai';

@Injectable()
export class ChatgptService {
  private readonly openaiBaseUrl = 'https://api.openai.com/v1';
  private readonly apiKey1 = process.env.OPENAI_API_KEY;
  private openai: OpenAI;
  private conversationHistory: {
    role: 'function' | 'user' | 'system' | 'assistant';
    content: string;
  }[] = [];

  constructor() {
    this.openai = new OpenAI(
      { apiKey: process.env.OPENAI_API_KEY, }
    );
  }
  async interpret(originalMessage: string, originalLanguage: string, destinationLanguage: string) {
    this.conversationHistory.push({
      role: 'user',
      content: originalMessage,
    });

    try {
      const messages = [
        {
          role: 'system',
          content: `Eres un intérprete de idiomas. Primero, 
          corrige el lenguaje original en ${originalLanguage}. 
          Luego, traduce y da sentido a las frases, verbos frasales o expresiones 
          propias de ${originalLanguage} al ${destinationLanguage}.
          Debes responderme de la siguiente manera:
          <${originalLanguage.toUpperCase()}> Mensaje original corregido : (la frase o texto que recibas)
          <${destinationLanguage.toUpperCase()}> Mensaje traducido e interpretado: (la frase o texto interpretada y traducida correctamente)`
        },
        ...this.conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ];

      const chatInterpreter = await this.openai.chat.completions.create({
        messages: messages.map(msg => ({
          role: msg.role as 'system' | 'user' | 'assistant',  // Asegúrate de que role sea uno de los valores permitidos
          content: msg.content
        })),
        model: 'gpt-3.5-turbo',
      });

      this.conversationHistory.push({
        role: 'assistant',
        content: chatInterpreter.choices[0].message.content
      });

      return chatInterpreter.choices[0].message.content;
    } catch (error) {
      console.error('Error al interpretar el mensaje:', error);
      throw new Error('Error al interpretar el mensaje');
    }
  }


  async askQuestion(question: string): Promise<any> {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: question.trim(), // Mismo contenido que se agregó al historial
          },
        ],
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error al procesar la pregunta:', error.response ? error.response.data : error.message);
      throw new Error('Error al procesar la pregunta');
    }
  }

}