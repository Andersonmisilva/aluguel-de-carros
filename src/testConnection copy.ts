import sequelize from './config/database';

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     process.exit();
//   }
// })();

export default function connectionDB(){
  console.log("sequelize.authenticate()",sequelize.authenticate());
  console.log("TESTE ");
  try {
         sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      } finally {
        process.exit();
      }
}

