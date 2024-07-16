import { Connection } from 'typeorm';
import { User } from '../users/user.entity'; // Asegúrate de importar correctamente tu entidad User

export const createUsers = async (connection: Connection) => {
  await connection
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      {
        username: 'milton',
        password: '123',
        name: 'Milton Silva',
        dateOfBirth: new Date('1985-09-15'),
        email: 'milton@gmail.com'
      },
      {
        username: 'steven',
        password: '123',
        name: 'Steven Johnson',
        dateOfBirth: new Date('1990-04-25'),
        email: 'steven@gmail.com'
      },
      {
        username: 'manuel',
        password: '123',
        name: 'Manuel Pérez',
        dateOfBirth: new Date('1988-11-10'),
        email: 'manuel@gmail.com'
      }
    ])
    .execute();
};
