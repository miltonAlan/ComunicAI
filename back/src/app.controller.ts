import { Controller, Post, Body, Get, InternalServerErrorException } from '@nestjs/common';
import { ChatgptService } from './chatgpt/chatgpt.service';

@Controller()
export class AppController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post('ask')
  async askQuestion(@Body() body: { question: string }): Promise<any> {
    console.log('Pregunta recibida:', body.question);
    
    try {
      const { question } = body;
      const answer = await this.chatgptService.askQuestion(question);
      console.log('Respuesta obtenida:', answer);
      return { answer };
    } catch (error) {
      console.error('Error al procesar la pregunta:', error.response ? error.response.data : error.message);
      throw new InternalServerErrorException('Error al procesar la pregunta');
    }
  }

  @Get()
  getInfo() {
    console.log('Solicitud GET recibida');
    return 'Información adicional sobre ChatGPT... xxddd';
  }
}
