module.exports = (sequelize, DataTypes) => {

    let alias = 'genres';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    };

    let config = {
        tableName: 'genres',
        timestamps: false,
    };

    const genres = sequelize.define(alias, columns, config);

    // genres.associate = (models) => {
    //     // hasMany
    //     genres.hasMany(models.albums, {
    //         as: 'albums',
    //         foreignKey: 'genre_id'
    //     })
    // }

    return genres;
}