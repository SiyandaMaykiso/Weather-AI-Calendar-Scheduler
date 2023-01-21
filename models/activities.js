module.exports = function(sequelize, DataTypes) {
    var activities = sequelize.define("activities", {
        // Giving the Activities model a name of type STRING
        ACTIVITY: DataTypes.STRING,
        TEMP: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });
    return activities;
};