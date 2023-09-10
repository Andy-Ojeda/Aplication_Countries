require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const activity = require('./models/Activity');
const country = require('./models/Country');
 
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});


sequelize.authenticate()
.then(() => {console.log("DB Connection is OKOK")})
.catch((error) => {console.log("Fallo DB: ", error.message)})

// (async ()=> {
//   try {
//     await sequelize.authenticate();
//     console.log("DB Connection is OK");
//   } catch (error) {
//     console.log("Fallo DB: ", error.message);
//   }
  
// })();











const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Activity, Country } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// activity(sequelize);
// country(sequelize);

Activity.belongsToMany(Country, {through: 'activity_country'});
Country.belongsToMany(Activity, {through: 'activity_country'});



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};