import 'babel-polyfill'
import express from 'express'
import graphQLHTTP from 'express-graphql'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { getFarceResult } from 'found/lib/server'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import path from 'path'
// express libs
import compression from 'compression'
import session from 'express-session'
import bodyParser from 'body-parser'
import logger from 'morgan'
import expressStatusMonitor from 'express-status-monitor'
// relay
import { ServerFetcher } from './fetcher'
import { createResolver, historyMiddlewares, render, routeConfig }
  from './router'
import schema from './data/schema'
import indexHtml from './indexHtml'
// config
const PORT = process.env.PORT || 4000

const app = express()

app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true
}))

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack') // eslint-disable-line
  const webpackMiddleware = require('webpack-dev-middleware')  // eslint-disable-line

  const webpackConfig = {
    entry: [
      'babel-polyfill',
      './src/client',
    ],

    output: {
      path: '/',
      filename: 'assets/bundle.js',
    },

    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
        { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader') },
        { test: /learn\.json$/, use: 'file-loader?name=[name].[ext]' },
      ],
    },

    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
  }

  app.use(webpackMiddleware(webpack(webpackConfig), {
    stats: { colors: true },
  }))
}

app.use(expressStatusMonitor())
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  express.static(path.join(__dirname, 'public'),
  { maxAge: 31557600000 }),
)
app.use(session({
  secret: process.env.SESSION_SECRET || 'life beyond',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}))

app.use(async (req, res) => {
  const fetcher = new ServerFetcher(`http://localhost:${PORT}/graphql`)

  const { redirect, status, element } = await getFarceResult({
    url: req.url,
    historyMiddlewares,
    routeConfig,
    resolver: createResolver(fetcher),
    render,
  })

  if (redirect) {
    res.redirect(302, redirect.url)
    return
  }

  res.status(status).send(
    indexHtml(
      ReactDOMServer.renderToString(element),
      serialize(fetcher, { isJSON: true })
    )
  )
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`) // eslint-disable-line no-console
})
