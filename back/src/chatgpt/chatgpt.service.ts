import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatgptService {
  private readonly openaiBaseUrl = 'https://api.openai.com/v1';
  private readonly apiKey = process.env.OPENAI_API_KEY;

  async askQuestion(question: string): Promise<any> {
    try {
      if (!question) {
        throw new Error('La pregunta no puede ser nula');
      }

      const response = await axios.post(
        `${this.openaiBaseUrl}/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: question.trim() // Asegurarse de que question no contenga espacios en blanco innecesarios
            }
          ],
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
