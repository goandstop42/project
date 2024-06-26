export default {
  install: (app, options) => {
    console.log('options >> ', options)
    app.config.globalProperties.$translate = (key, params = {}) => {
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
    }
  }
}
