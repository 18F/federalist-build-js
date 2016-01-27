var select = require('d3-selection');

select('body')
  .style('color', 'white')
  .style('background-color', 'black');

select('#env').text(process.env.NODE_ENV || '?');
