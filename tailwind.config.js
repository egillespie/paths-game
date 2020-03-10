/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      translucent: 'rgba(0, 0, 0, .5)'
    })
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus'],
    cursor: ['responsive', 'hover'],
    scale: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
