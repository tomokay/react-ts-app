import React from "react";
import SpaPage from "src/components/SpaPage";
import Top from "src/components/Top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpaDetailPage from "src/components/SpaDetailPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/spa" element={<SpaPage />}>
            <Route path="spadetail/*" element={<SpaDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
