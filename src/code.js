fetch('http://127.0.0.1:3000/data')
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: 'grid'
      },

      style: [
        {
          selector: 'node',
          style: {
            'height': 40,
            'width': 20,
            'background-color': '#18e018',
            'shape': 'round-rectangle',
            'label': 'data(id)',
            'text-halign': 'center',
            'text-valign': 'center',
          }
        },

        {
          selector: 'edge',
          style: {
            'curve-style': 'straight',
            'width': 5,
            'opacity': 0.5,
            'line-color': '#f2efa2',
            'line-cap': 'round',
            'line-style': 'dashed',
            'source-arrow-color': 'red',
            "source-arrow-shape": "triangle-backcurve",
            'target-arrow-color': '#000000',
            "target-arrow-shape": "triangle",
            "target-arrow-width": 20,
            "target-arrow-fill": 'filled',

          }
        }
      ],

      elements: data,
    });
    cy.$('#edge').parallelEdges();
  });

// import { GetData } from './demon'

// function readLocalJsonFile() {
//   var cy = window.cy = cytoscape({
//     container: document.getElementById('cy'),

//     boxSelectionEnabled: false,
//     autounselectify: true,

//     layout: {
//       name: 'grid'
//     },

//     style: [
//       {
//         selector: 'node',
//         style: {
//           'height': 20,
//           'width': 20,
//           'background-color': '#18e018'
//         }
//       },

//       {
//         selector: 'edge',
//         style: {
//           'curve-style': 'haystack',
//           'haystack-radius': 0,
//           'width': 5,
//           'opacity': 0.5,
//           'line-color': '#a2efa2'
//         }
//       }
//     ],

//     elements: GetData
//   });
// }


// readLocalJsonFile()