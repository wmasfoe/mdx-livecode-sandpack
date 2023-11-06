const indexHtml = ({ main }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>${main}</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`

const indexJs = ({ main }) => `import { createApp } from 'vue'
import ${main} from './${main}.vue'

createApp(${main}).mount('#app')
`

const createVue = (options) => ({
  customSetup: {
    entry: '/index.js',
    environment: options.environment || 'vue-cli',

    dependencies: {
      ...options.dependencies
    },

    ...options.customSetup
  },

  files: {
    '/index.js': {
       code: indexJs(options),
       hidden: true
    },

    '/index.html': {
       code: indexHtml(options),
       hidden: true
    },

  ...options.files
  }
})

export default createVue