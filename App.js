import React from 'react';
import LandingPage from './src/landingPage/landingPage.js';

import ThemeProvider from './theme/themeProvider.js';

const App = () => {
  return (
    <ThemeProvider id='A'>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
