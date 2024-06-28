import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./esbuild/app";

const domNode = document.getElementById("esbuild-react");
if (domNode !== null) {
  const root = createRoot(domNode);
  root.render(<App />);
}
