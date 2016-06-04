const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const paths = {};
paths.app = path.join(__dirname, 'src/app.css');
paths.dist = path.join(__dirname, 'dist/build.css');

const css = fs.readFileSync(paths.app);

const processors = [
  autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
    cascade: false
  })
];

postcss(processors)
  .process(css, {
    from: paths.app,
    to: paths.dist
  })
  .then(res => {
    fs.writeFileSync(paths.dist, res.css);
  });
