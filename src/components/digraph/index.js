import React, { useState, useRef } from 'react';
import { GraphView } from 'react-digraph';

import data from '../../graphData';
import GraphConfig from '../../utils/GraphConfig';

import { Container } from './styles';

let completed = [];

const Graph = () => {
  const graphRef = useRef();

  const [nodes, setNodes] = useState(data.nodes);  

  function handleClick(selectedNode) {
    let updatedNode = selectedNode;

    if(updatedNode !== null){
      // Checks if all requirements are completed
      if(updatedNode.type === 'missing'){
        const requirementsFullFilled = updatedNode.requirements.every(id => completed.includes(id));

        if (requirementsFullFilled){
          updatedNode.type = "completed";
          completed.push(updatedNode.id);
        }

      } 
      
      // Changes type to completed and adds to completed array
      else if (updatedNode.type === "notCompleted") {
        updatedNode.type = "completed";
        
        completed.push(updatedNode.id);
      } 

      // Removes from completed array and changes type to notCompleted
      else {
        updatedNode.type = "notCompleted";
        
        const nodeIndex = completed.findIndex(node => node.id === updatedNode.id);
        completed.splice(nodeIndex, 1);
      }
      console.log(completed);

      setNodes({...nodes, updatedNode});
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