var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

var app = 'src/app.css';
var dist = 'dist/build.css';

var css = fs.readFileSync(app);

var processors = [
  autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
    cascade: false
  })
];

postcss(processors)
  .process(css, {
    from: app,
    to: dist
  })
  .then(function(res) {
    fs.writeFileSync(dist, res.css);
  });
