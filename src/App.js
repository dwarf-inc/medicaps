import React from "react";
import "./App.css";
import { BrowserRouter as router, route, link } from 'react-router-dom';
import { motion } from "framer-motion"

function App() {
  return (
    <div className="app">
        <motion.div className="loading"
            whileHover={{ scale: 1.1, rotate: [0, 0, 270,260], borderRadius: ["20%","30%", "40%", "50%"] }}
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            whileTap={{scale: 2.2}}
            drag
        />
    </div>
  );
}

export default App;

