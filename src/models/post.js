const {sequelize} = require('../../database')
const {DataTypes} =require('sequelize')

const PostModel = sequelize.define('posts', {
    title: DataTypes.STRING,
    author: DataTypes.TEXT,
    content: DataTypes.TEXT,
    url: DataTypes.STRING
});
module.exports = { PostModel };