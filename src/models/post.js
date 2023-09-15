const {sequelize} = require('../../database')
const {DataTypes} =require('sequelize')

const PostModel = sequelize.define('posts', {
    titulo_del_post: DataTypes.STRING,
    author: DataTypes.TEXT,
    content: DataTypes.TEXT,
    url: DataTypes.STRING
});
module.exports = { PostModel };