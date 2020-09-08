import React, { Component } from 'react';
import { GraphView } from 'react-digraph';

import data from '../../graphData';
import GraphConfig from '../../utils/GraphConfig';

import { Container } from './styles';

let completed = [];

const NODE_KEY = "id" 

class Graph extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      graph: data,
    }
  }

  handleClick(selectedNode) {
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
    }
    
    this.state.graph.nodes.map(node => {
      if(node.requirements){
        if(node.requirements.every(id => completed.includes(id)) && node.type === "missing"){
          node.type = "notCompleted";
        } else if (!node.requirements.every(id => completed.includes(id))){
          node.type = "missing";
        }
        return node;  
      }  
    });
  }

  render() {

    const NodeTypes = GraphConfig.NodeTypes;
    const NodeSubtypes = GraphConfig.NodeSubtypes;
    const EdgeTypes = GraphConfig.EdgeTypes;

    return (
      <Container>
        <GraphView  
          ref='GraphView'
          nodeKey={NODE_KEY}
          nodes={this.state.graph.nodes}
          edges={this.state.graph.edges}
          nodeTypes={NodeTypes}
          nodeSubtypes={NodeSubtypes}
          edgeTypes={EdgeTypes}
          readOnly={false}
          onSelectNode={this.handleClick}
        />
      </Container>
    );
  }
}

export default Graph;