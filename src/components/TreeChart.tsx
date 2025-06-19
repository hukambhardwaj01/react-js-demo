// components/TreeChart.tsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import treeData from "./treeData.json";

export const TreeChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // clear svg

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const root = d3.hierarchy(treeData as any);

    const treeLayout = d3.tree().size([height - 60, width - 180]);
    treeLayout(root);

    // Links
    g.selectAll(".link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .linkHorizontal()
          .x((d: any) => d.y)
          .y((d: any) => d.x)
      );

    // Nodes
    const node = g
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node
      .append("circle")
      .attr("r", 5)
      .attr("fill", "steelblue");

    node
      .append("text")
      .attr("dy", ".35em")
      .attr("x", (d) => (d.children ? -10 : 10))
      .style("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name);
  }, []);

  return <svg ref={svgRef}></svg>;
};
