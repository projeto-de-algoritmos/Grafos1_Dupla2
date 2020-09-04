import React, { useState, useEffect, useRef } from 'react';
import { GraphView } from 'react-digraph';

import data from '../../graphData';
import GraphConfig from '../../utils/GraphConfig';

import { Container } from './styles';

const Graph = () => {
  const graphRef = useRef();

  const [nodes, setNodes] = useState(data.nodes);
  // const [completed, setCompleted] = useState();

  // useEffect(() => {
  //   const completedNodes = nodes.filter(node => node.type === "completed");

  //   setCompleted(completedNodes);
  // }, [nodes]);

  function handleClick(selectedNode) {
    let updatedNode = selectedNode;

    if(updatedNode !== null){
      updatedNode.type = updatedNode.type === "notCompleted" ? "completed" : "notCompleted";

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