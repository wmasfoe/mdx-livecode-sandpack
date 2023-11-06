import setupReact from './reactTemplate'
import setupVue from './vueTemplate'
import normalTemplate from './vueTemplate'

export default function(frameWork = 'react') {

  const setupFile = {
    'react': setupReact,
    'vue': setupVue,
    'normal': normalTemplate
  }

  return setupFile[frameWork] || normalTemplate
}