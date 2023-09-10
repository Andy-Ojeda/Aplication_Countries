const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        //     primaryKey: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1, 
                max: 5, 
            },
        },
        duration: {
            type: DataTypes.TIME,   //*hh:mm:ss
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
            allowNull: false,
        }
    })
}