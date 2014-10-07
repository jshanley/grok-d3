var w = 400,
    h = 400;

var svg = d3.select('body').append('svg')
  .attr('width', w)
  .attr('height', h);

var dataset = d3.range(16)
  .map(function() { return {}; });

var force = d3.layout.force()
  .nodes(dataset)
  .size([w,h])
  .on('tick', tickCallback)
  .start();

var circles = svg.selectAll('circle')
  .data(dataset);

circles.enter().append('circle')
  .attr('r', 5);

function tickCallback() {
  circles
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; });
}
