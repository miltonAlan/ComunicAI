module.exports = {
    type: 'sqlite',
    database: 'database.sqlite', // Nombre del archivo de la base de datos SQLite
    synchronize: true, // Sincroniza automáticamente la estructura de la base de datos con las entidades
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'], // Ruta a las entidades
  };
  