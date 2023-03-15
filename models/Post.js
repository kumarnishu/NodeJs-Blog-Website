const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('test', 'nishu', '12345678', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});

(async () => {
    await sequelize.sync({ force: true });
    // Code here
})();

export default User