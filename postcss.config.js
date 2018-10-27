const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = () => {
  const plugins = [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer')
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(require('cssnano')({
      preset: 'default',
    }))
  }

  return { plugins }
}
