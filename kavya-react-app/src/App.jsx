import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Reliability from './pages/Reliability';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function App() {
  const [content, setContent] = React.useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Fetch site content
    fetch('/api/get_content.php')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error("Failed to fetch content:", err));
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reliability" element={<Reliability />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          {/* Default to Home for other routes for now */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
