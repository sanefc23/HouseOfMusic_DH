module.exports = (sequelize, DataTypes) => {

    let alias = 'artists';
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
        tableName: 'artists',
        timestamps: false,
    };

    const artist = sequelize.define(alias, columns, config);

    artist.associate = (models) => {
        // hasMany
        artist.hasMany(models.albums, {
            as: 'albums',
            foreignKey: 'artists_id'
        })
    }

    return artist;
}