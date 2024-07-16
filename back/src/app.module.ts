// src/app.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Connection } from 'typeorm';
import { createUsers } from './seeds/users.seed';
import { LanguagesController } from './languages/languages.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite', // Tipo de base de datos (SQLite en este caso)
      database: 'database.sqlite', // Nombre del archivo de la base de datos
      synchronize: true, // Sincronizar esquemas automáticamente (solo para desarrollo)
      entities: [User], // Array de entidades a ser utilizadas por TypeORM
    }),
    UsersModule,
    ChatgptModule,
  ],
  controllers: [AppController, LanguagesController],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(private connection: Connection) { }

  async onModuleInit() {
    // Ejecutar semillas al iniciar la aplicación
    // await createUsers(this.connection); // comento esto para ingresar una sola vez los usuarios
    console.log('Seeds ejecutados correctamente');
  }
}
