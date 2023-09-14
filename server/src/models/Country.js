const DataTypes = require('sequelize');
// const sequelize = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Country', {
      idPais: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        primaryKey: true
        // defaultValue: "xxx"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      flagImage: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 's/n'
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 's/n'
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,//false,
        defaultValue: 0.000
        
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,//false,
        defaultValue: 0.000
        
      },
      // numeric_id: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true, 
      //   allowNull: false,
      // },
    },{
      timestamps: false,
    })

}