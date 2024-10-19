import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoToLastVideo from './GoToLastVideo';
import Error from './Error';

const App = () => (
  <Router>
    <Routes>
      <Route path="/gotolastvideo/:channelId" element={<GoToLastVideo />} />
      <Route path="/error" element={<Error />} />
      {/* Define other routes here, like /not-found or /error */}
    </Routes>
  </Router>
);

export default App;
