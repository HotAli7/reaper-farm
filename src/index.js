import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return <h1>React all</h1>
}

createRoot(document.getElementById("app")).render(<App />);