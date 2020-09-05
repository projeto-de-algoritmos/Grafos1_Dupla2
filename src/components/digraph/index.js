import React, { useState, useRef } from 'react';
import { GraphView } from 'react-digraph';

import data from '../../graphData';
import GraphConfig from '../../utils/GraphConfig';

import { Container } from './styles';

const Graph = () => {
  const graphRef = useRef();

  const [nodes, setNodes] = useState(data.nodes);
  
  const completed = [];

  function handleClick(selectedNode) {
    let updatedNode = selectedNode;

    if(updatedNode !== null){
      // Checks if all requirements are completed
      if(updatedNode.type === 'missing'){
        const requirementsFullFilled = updatedNode.requirements.every(i => completed.includes(i));
        if (requirementsFullFilled){
          updatedNode.type = "completed";
          completed.push(updatedNode.id);
        }
      }







      updatedNode.type = updatedNode.type === "notCompleted" ? "completed" : "notCompleted";

      setNodes({...nodes, updatedNode});

      console.log(nodes);
    }
  }

  return (
    <Container>
      <GraphView  
        ref={graphRef}
        nodeKey={"id"}
        nodes={nodes}
        edges={data.edges}
        nodeTypes={GraphConfig.NodeTypes}
        nodeSubtypes={GraphConfig.NodeSubtypes}
        edgeTypes={GraphConfig.EdgeTypes}
        readOnly={true}
        onSelectNode={handleClick}
      />
    </Container>
  );
}

export default Graph;