
var fs = require('fs');
var path = require('path');

var srcPath = path.join(__dirname, 'src', 'restaurants.json');
var srcData = fs.readFileSync(srcPath, { encodeing: 'utf8' });
var src = JSON.parse(srcData);

var data = {};
var types = ['lunch-eatin', 'lunch-takeaway', 'dinner-eatin', 'dinner-takeaway'];

types.forEach(function (type) {
  data[type] = { type: "FeatureCollection", features: [] };
});

src.forEach(function (restaurant) {
  types.forEach(function (type) {
    if (restaurant.hasOwnProperty(type)) {
      data[type].features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: restaurant.coordinates
        },
        properties: {
          T: restaurant.title,
          L: restaurant[type]
        }
      });
    }
  });
});

types.forEach(function (type) {
  var file = path.join(__dirname, 'dist', type + '.geojson');
  var content = JSON.stringify(data[type], undefined, 2);
  fs.writeFile(file, content, function (err) {
    if (err) throw err;
  });
});
