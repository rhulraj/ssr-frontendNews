import express, { response } from 'express';
import fs from 'fs'
import path from 'path'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {Provider} from 'react-redux';
import { store } from '../src/Redux/store.js';
import { HelmetProvider } from 'react-helmet-async';


const app = express();


app.use(express.static(path.resolve(__dirname, '..', 'build')));
const port = 8000;
const context = {};

app.get('/', (req,res)=>{
     fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error,data)=>{
        if(error){
            console.log(error)
            return response.status(500).send('Error', error)
        }
        const helmetContext = {}
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter  location={req.url} context ={context}>
                    <HelmetProvider context={helmetContext}>
                    <App />
                    <Toaster />
                    </HelmetProvider>
                </StaticRouter>
                </Provider>
        )

        res.setHeader("Content-Type", "text/html");
        const { title, meta } = helmetContext;
        res.send(
            data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
            .replace('<title></title>', `<title>${title}</title>`)
            .replace('<meta charset = "UTF-8",', meta.toString())
        )
     })
})
// Catch-all handler for all other routes (including dynamic routes)
app.get('*', (req, res) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error', error);
      }
      res.setHeader('Content-Type', 'text/html');
      res.send(data); // Always return index.html for any route
    });
  });




app.listen(port, ()=>{
    console.log('server is running on port 8000')
})