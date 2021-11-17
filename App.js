import React from 'react';
import LandingPage from './src/landingPage/landingPage.js';

import ThemeProvider from './theme/themeProvider.js';

const App = () => {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
