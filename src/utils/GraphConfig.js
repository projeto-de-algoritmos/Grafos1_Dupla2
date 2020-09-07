import React from 'react';

const GraphConfig =  {
  NodeTypes: {
    notCompleted: { // required to show empty nodes
      typeText: "Obrigatória",
      shapeId: "#notCompleted", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="notCompleted" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ) 
    },
    completed: { // required to show empty nodes
      typeText: "Obrigatória",
      shapeId: "#completed", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="completed" key="0">
          <circle cx="50" cy="50" r="45" fill="#52b035"></circle>
        </symbol>
      ) 
    },
    missing: { // required to show empty nodes
      typeText: "Obrigatória",
      shapeId: "#missing", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="missing" key="0">
          <circle cx="50" cy="50" r="45" fill="#a33729"></circle>
        </symbol>
      ) 
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {  // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor"> </circle>
        </symbol>
      )
    }
  }
}

export default GraphConfig;