const data = {
  "nodes": [
    {
      "id": 1,
      "title": "Barões da Pisadinha",
      "x": 258.3976135253906,
      "y": 331.9783248901367,
      "type": "notCompleted",
      "completed": false,
      "requirements": "c1",
    },
    {
      "id": 2,
      "title": "Node B",
      "x": 593.9393920898438,
      "y": 260.6060791015625,
      "type": "notCompleted"
    },

  ],
  "edges": [
    {
      "source": 1,
      "target": 2,
      "type": "emptyEdge"
    },
    {
      "source": 2,
      "target": 4,
      "type": "emptyEdge"
    }
  ]
}

export default data;
  
