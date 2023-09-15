const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./database');
require('./src/models/post');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));


app.set('views', __dirname + './src/views');

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.use('/posts', require('./routes/post.routes'));

/*const notas =[
    {
        titulo:"primer nota",
        contenido:"contenido de la primer nota",
    },
    {
        titulo:"segunda nota",
        contenido:"contenido de la segunda nota",
    },
    {
        titulo:"tercera nota",
        contenido:"contenido de la tercera nota",
    },
    {
        titulo:"cuarta nota",
        contenido:"contenido de la cuarta nota",
    },
];

app.get("/", (req, res) =>{
    res.render('index');
})

app.get('/mis-notas', (req, res)=>{
    res.render('mis-notas', {titulo:"Página principal", nota})
});*/

app.listen(4000, () =>{
    sequelize.sync({ force: false });

    console.log("Server on port 4000");
});