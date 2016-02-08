var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

var app = 'src/app.css';
var dist = 'dist/build.css';

var css = fs.readFileSync(app);

postcss([autoprefixer])
  .process(css, {
    from: app,
    to: dist
  })
  .then(function(res) {
    fs.writeFileSync(dist, res.css);
  });
