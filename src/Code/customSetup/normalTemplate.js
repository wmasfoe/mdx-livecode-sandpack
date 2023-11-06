const indexJs = ({ main }) => `
import ${main} from './${main}.js'

const container = document.getElementById('app');
`

const indexHtml = ({ main }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${main}</title>
  </head>
  <body>
    <script src="../index.js" type="module"></script>
    <div id="app"></div>
  </body>
</html>
`

const setupReact = (options) => {

  return {
    customSetup: {
      entry: '/index.js',
      dependencies: {
        ...options.dependencies
      },
  
      ...options.customSetup
    },
    files: {
      '/index.js': {
        hidden: true,
        code: indexJs(options)
      },
  
      '/public/index.html': {
        hidden: true,
        code: indexHtml(options)
      },
      ...options.files
    }
  }
}

export default setupReact