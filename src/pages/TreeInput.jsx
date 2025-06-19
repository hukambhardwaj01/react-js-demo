// TreeInput.jsx
import React from "react";

// Create node helper
export const createNode = (label = "") => ({
  id: Date.now() + Math.random(),
  label,
  children: [],
});

const TreeInput = ({ node, onChange, onRemove }) => {
  const handleLabelChange = (e) => {
    onChange({ ...node, label: e.target.value });
  };

  const handleAddChild = () => {
    const newChild = createNode("");
    onChange({ ...node, children: [...node.children, newChild] });
  };

  const handleChildChange = (index, updatedChild) => {
    const newChildren = node.children.map((child, i) =>
      i === index ? updatedChild : child
    );
    onChange({ ...node, children: newChildren });
  };

  const handleRemoveChild = (index) => {
    const newChildren = node.children.filter((_, i) => i !== index);
    onChange({ ...node, children: newChildren });
  };

  return (
    <div style={{ marginLeft: 20, marginTop: 10 }}>
      <input
        type="text"
        placeholder="Enter name"
        value={node.label}
        onChange={handleLabelChange}
      />
      <button onClick={handleAddChild}>Add Child</button>
      {onRemove && <button onClick={onRemove}>Remove</button>}

      {node.children.map((child, index) => (
        <TreeInput
          key={child.id}
          node={child}
          onChange={(updatedChild) => handleChildChange(index, updatedChild)}
          onRemove={() => handleRemoveChild(index)}
        />
      ))}
    </div>
  );
};

export default TreeInput;
