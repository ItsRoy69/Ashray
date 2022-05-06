import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
      <MilanState>

        <Router>
          <Routes>
            {/* //* Home routes */}
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </MilanState>

    </>
    )
}

export default App