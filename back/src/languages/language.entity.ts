export class Language {
    constructor(public name: string, public abbreviation: string) {}
  
    get flagUrl(): string {
        const countryCode = this.abbreviation.split('-')[1].toUpperCase();
        // Genera la URL de la bandera utilizando la API de FlagsAPI con el país en mayúsculas
        return `https://flagsapi.com/${countryCode}/flat/64.png`;
      }
  }
  