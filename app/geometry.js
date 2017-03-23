var Geometry = function () {
  var pi = 3.14159265;
  return {
    areaOfCircle: function(radius) {
      return radius * radius * pi;
    }
  }
}();

module.exports = Geometry;
