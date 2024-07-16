// src/languages/languages.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Language } from './language.entity';

@Controller('languages')
export class LanguagesController {
  @Get()
  findAll(): any[] {
    const languages = [
      new Language('English', 'en-US'),
      new Language('Español', 'es-MX'),
      new Language('Français', 'fr-FR'),
      new Language('Deutsch', 'de-DE'),
      new Language('Português', 'pt-BR'),
      new Language('Italiano', 'it-IT'),
      new Language('日本語', 'ja-JP'),
      new Language('中文', 'zh-CN'),
      // Agrega más idiomas según sea necesario
    ];

    // Mapear las instancias de Language a objetos con todas las propiedades necesarias
    return languages.map(lang => ({
      name: lang.name,
      abbreviation: lang.abbreviation,
      flagUrl: lang.flagUrl // Llama al getter para obtener la URL de la bandera
    }));
  }
}
