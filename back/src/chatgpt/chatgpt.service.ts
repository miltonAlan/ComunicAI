// chatgpt.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatgptService {
  private readonly openaiBaseUrl = 'https://api.openai.com/v1';
  private readonly apiKey = process.env.OPENAI_API_KEY; // Asegúrate de tener tu API key configurada

  async askQuestion(question: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.openaiBaseUrl}/engines/gpt-3.5-turbo/completions`, // Actualiza la URL y el nombre del modelo según la documentación actual
        {
          prompt: question,
          max_tokens: 150
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error al procesar la pregunta:', error.response ? error.response.data : error.message);
      throw new Error('Error al procesar la pregunta');
    }
  }
}
