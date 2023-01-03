import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {default as hbs} from 'hbs';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Nicolás Condoluci',
    titulo: 'Curso de NODE'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

app.get('/elements', (req, res) => {
  res.render('elements')
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`La aplicación web está corriendo en el puerto ${port}`)
})