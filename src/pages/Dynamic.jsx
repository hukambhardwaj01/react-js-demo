// App.jsx
import React, { useState } from "react";
import TreeInput, { createNode } from "./TreeInput";

export const Dynamic = () => {
  const [nodes, setNodes] = useState([createNode("Brother 1")]);

  const handleChange = (index, updatedNode) => {
    const updatedNodes = nodes.map((node, i) => (i === index ? updatedNode : node));
    setNodes(updatedNodes);
    console.log('nodes are : ', nodes);
  };

  const handleAddRoot = () => {
    setNodes([...nodes, createNode("New Brother")]);
  };

  const handleRemoveRoot = (index) => {
    setNodes(nodes.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Family Tree Form</h2>
      <button onClick={handleAddRoot}>Add Root Node (e.g., Brother)</button>

      {nodes.map((node, index) => (
        <TreeInput
          key={node.id}
          node={node}
          onChange={(updatedNode) => handleChange(index, updatedNode)}
          onRemove={() => handleRemoveRoot(index)}
        />
      ))}

      <h3>Output JSON:</h3>
      <pre>{JSON.stringify(nodes, null, 2)}</pre>
    </div>
  );
};

