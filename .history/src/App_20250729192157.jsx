import React, { useState, useEffect } from 'react';
import AdminApp from './components/AdminApp';
import NavBar from "./components/blocks/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";            // Use the combined home sections
import DocumentsPage from './pages/DocumentsPage';  // Your Documents page

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) return <AdminApp />;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
