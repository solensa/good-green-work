import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MotivationMap from './pages/MotivationMap';
import StrategicFlywheel from './pages/StrategicFlywheel';
import GoodWorkMechanism from './pages/GoodWorkMechanism';
import WorkforceFlows from './pages/WorkforceFlows';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="app-main">
          <div style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<StrategicFlywheel />} />
              <Route path="/motivation-map" element={<MotivationMap />} />
              <Route path="/mechanism" element={<GoodWorkMechanism />} />
              <Route path="/workforce-flows" element={<WorkforceFlows />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
