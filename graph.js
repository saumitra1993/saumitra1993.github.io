
var cy = cytoscape({
  container: document.getElementById('diagram'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      }),

  elements: {
    nodes: [
      { data: { id: '10' } },
      { data: { id: '9' } },
      { data: { id: '8' } },
      { data: { id: '7' } },
      { data: { id: '6' } },
      { data: { id: '5' } },
      { data: { id: '4' } },
      { data: { id: '3' } },
      { data: { id: '2' } },
      { data: { id: '1' } },
      { data: { id: '0' } }
    ],
    edges: [
      { data: { source: '9' , target:'10'} },
      { data: { source: '8', target: '9'} },
      { data: { source: '7', target: '8'} },
      { data: { source: '6', target: '7'} },
      { data: { source: '5', target: '6'} },
      { data: { source: '4', target: '7'} },
      { data: { source: '2', target: '4'} },
      { data: { source: '1', target: '3'} },
      { data: { source: '1', target: '4'} },
      { data: { source: '3', target: '5'} },
      { data: { source: '0', target: '1'} }
    ]
  }
}); // cy init

cy.on('tap', 'node', function(){
  var nodes = this;
  var tapped = nodes;
  var food = [];

  nodes.addClass('selected');
  angular.element(document.getElementById('body')).scope().show(nodes.attr("id"));
  angular.element(document.getElementById('body')).scope().$apply();

}); // on tap

cy.$('#0').qtip({
  content: 'Article text file added with theme text.',
  position: {
    my: 'top center',
    at: 'bottom center',
    target: 'mouse'
  },
  show: {
        event: 'mouseenter', // Show on mouse over by default
        effect: true, // Use default 90ms fade effect
        delay: 90, // 90ms delay before showing
        solo: false, // Do not hide others when showing
        ready: false, // Do not show immediately
    },
    hide: {
        event: 'mouseleave', // Hide on mouse out by default
        effect: true, // Use default 90ms fade effect
        delay: 0, // No hide delay by default
        fixed: false, // Non-hoverable by default
        inactive: false, // Do not hide when inactive
        leave: 'window', // Hide when we leave the window
        distance: false // Don't hide after a set distance
    },
  style: {
    classes: 'qtip-bootstrap'
  }
});

var options = {
  name: 'grid',

  fit: true, // whether to fit the viewport to the graph
  padding: 30, // padding used on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: false, // uses all available space on false, uses minimal space on true
  rows: 10, // force num of rows in the grid
  cols: 2, // force num of columns in the grid
  position: function( node ){}, // returns { row, col } for element
  sort: function(a, b){ return parseInt($(a).attr("id")) - parseInt($(b).attr("id")) }, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop
  transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
};

cy.layout( options );
