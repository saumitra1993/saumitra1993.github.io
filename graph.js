
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
      })
    .selector('.selected')
      .css({
        'background-color': '#fff'
      }),

  elements: {
    nodes: [
      { data: { id: '10', title: "Improved conclusion. Article looks satisfactory, I guess." }},
      { data: { id: '9', title: "Removed all the extra content and explained the point more clearly." }},
      { data: { id: '8', title: "iphonecomment: Completed the content" }},
      { data: { id: '7', title: "iphonecomment: Merge branch 'realExamples' into iphonecomment" }},
      { data: { id: '6', title: "iphonecomment: Finally got a way to reach the point" }},
      { data: { id: '5', title: "realExample: Added example that doesn't quite drive the point home" }},
      { data: { id: '4', title: "Updated git explanation with relevant terms" }},
      { data: { id: '3', title: "realExample: started out with a real life example to illustrate how git can be used for all data requirements in general" }},
      { data: { id: '2', title: "Git workflow explained" }},
      { data: { id: '1', title: "Set the context of discussion" }},
      { data: { id: '0', title: "Article text file added with theme text." }}
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

  nodes.addClass('selected');
  angular.element(document.getElementById('body')).scope().show(nodes.attr("id"));
  angular.element(document.getElementById('body')).scope().$apply();

}); // on tap

cy.elements().qtip({
					content: function(){ return this.attr("label") },
					position: {
						my: 'top center',
						at: 'bottom center'
					},
					style: {
						classes: 'qtip-bootstrap',
						tip: {
							width: 100,
							height: 30
						}
					}
				});

cy.layout({
  name: 'dagre',
  // dagre algo options, uses default value on undefined
  nodeSep: undefined, // the separation between adjacent nodes in the same rank
  edgeSep: undefined, // the separation between adjacent edges in the same rank
  rankSep: undefined, // the separation between adjacent nodes in the same rank
  rankDir: 'TB', // 'TB' for top to bottom flow, 'LR' for left to right,
  ranker: undefined, // Type of algorithm to assign a rank to each node in the input graph. Possible values: 'network-simplex', 'tight-tree' or 'longest-path'
  minLen: function( edge ){ return 1; }, // number of ranks to keep between the source and target of the edge
  edgeWeight: function( edge ){ return 1; }, // higher weight edges are generally made shorter and straighter than lower weight edges

  // general layout options
  fit: true, // whether to fit to viewport
  padding: 30, // fit padding
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
  animate: false, // whether to transition the node positions
  animateFilter: function( node, i ){ return true; }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  transform: function( node, pos ){ return pos; }, // a function that applies a transform to the final node position
  ready: function(){}, // on layoutready
  stop: function(){} // on layoutstop
 }).run()
