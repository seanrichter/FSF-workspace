module.exports = function (sequelize, DataTypes) {
    var todo = sequelize.define("todo",
        {
            text: DataTypes.String,
            complete: DataTypes.BOOLEAN

        });
    return todo;
}