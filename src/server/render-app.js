// @flow

import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const css = isProd ? '<link rel="stylesheet" href="style.css">' : ''

const renderApp = () => (
  `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>One Page Website</title>
      ${css}
    </head>
    <body>
      <div class="${APP_CONTAINER_CLASS}"></div>
      <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}`}/bundle.js"></script>
    </body>
  </html> `
)

export default renderApp
