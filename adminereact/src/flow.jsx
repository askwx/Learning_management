import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', type: 'input', data: { label: 'Frontend' }, position: { x: 250, y: 5 } },

  { id: '2', data: { label: <div>HTML</div> }, position: { x: 100, y: 100 } },

  { id: '3', data: { label: <div>CSS</div> }, position: { x: 50, y: 50 } },

  { id: '4', data: { label: <div>JavaScript</div> }, position: { x: 150, y: 150 } },

  { id: '5', data: { label: <div>Tutorial 1</div> }, position: { x: 150, y: 150 } },

  { id: '6', data: { label: <div>Tutorial 1</div> }, position: { x: 150, y: 150 } },

  { id: '7', data: { label: <div>Tutorial 1</div> }, position: { x: 150, y: 150 } },


  { id: 'e1-2', source: '1', target: '2', animated: true },

  { id: 'e1-3', source: '1', target: '3', animated: true },

  { id: 'e1-4', source: '1', target: '4', animated: true },

  { id: 'e2-5', source: '2', target: '5', animated: true },

  { id: 'e3-6', source: '3', target: '6', animated: true },

  { id: 'e4-7', source: '4', target: '7', animated: true },



];



const Flow = () => (
  <div style={{width: "800px", height: "800px"}}>
    <ReactFlow elements={elements} />
  </div>
);

export default Flow