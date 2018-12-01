
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
  },

  layout: {
    name: 'breadthfirst',
    directed: false,
    padding: 10
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
        target: false, // Defaults to target element
        event: 'mouseenter', // Show on mouse over by default
        effect: true, // Use default 90ms fade effect
        delay: 90, // 90ms delay before showing
        solo: false, // Do not hide others when showing
        ready: false, // Do not show immediately
    },
    hide: {
        target: false, // Defaults to target element
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
