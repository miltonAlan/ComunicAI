import { Controller, Post, Body, Get, InternalServerErrorException } from '@nestjs/common';
import { ChatgptService } from './chatgpt/chatgpt.service';

@Controller()
export class AppController {
  constructor(private readonly chatgptService: ChatgptService) {}
  
  @Get()
  getInfo() {
    console.log('Solicitud GET recibida');
    return 'Información adicional sobre ChatGPT... xxddd';
  }

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
  @Post('interpret')
  async interpret(@Body() body: {originalMessage:string, originalLanguage: string, destinationLanguage: string}): Promise <any>{
    console.log('Mensaje recibido: ', body.originalMessage, 'Idioma original: ', body.originalLanguage, 'Idioma destino:', body.destinationLanguage);
    try {
      const {originalMessage, originalLanguage, destinationLanguage} = body;
      const interpretedMessage = await this.chatgptService.interpret(originalMessage, originalLanguage, destinationLanguage);
      console.log('Respuesta Interpretada', interpretedMessage);
      return interpretedMessage;
    } catch (error) {
      console.error('Error al interpretar el mensaje:', error);
      throw new InternalServerErrorException('Error al interpretar el mensaje');
    }
  }
  
}
