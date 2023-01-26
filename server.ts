/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

// import { RequestListener, IncomingMessage, ServerResponse } from 'http'

/* import path from 'path'
import { createServer } from 'https'
import fs from 'fs'
const options = {
    key: fs.readFileSync(path.join(__dirname, './ssl/server.key')),
    cert: fs.readFileSync(path.join(__dirname, './ssl/server.crt')),
} */

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname).httpServer().start()
/* new Ignitor(__dirname)
    .httpServer()
    .start((handleUncaughtExceptions) => {
        return createServer(options, handleUncaughtExceptions)
    })
    .catch(console.error) */
