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
import Serverless from 'serverless-http';


const app = express();
const router =express.Router();

const port = 8000;
const context = {};

router.use('^/$', (req,res)=>{
     fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error,data)=>{
        if(error){
            console.log(error)
            return response.status(500).send('Error', error)
        }
        res.setHeader("Content-Type", "text/html");
        res.send(
            data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(
                <Provider store={store}>
                    <StaticRouter  location={req.url} context ={context}>
                        <App />
                        <Toaster />
                    </StaticRouter>
                    </Provider>
            )}</div>`)
        )
     })
})

router.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

module.exports = Serverless(app)