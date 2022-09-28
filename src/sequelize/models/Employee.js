
const { DataTypes } = require("sequelize");

module.exports = sequelize => {
    // Registra model
    return sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}
