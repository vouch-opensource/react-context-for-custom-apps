import React from 'react';
import ThemeContext from './themeContext.js';
import styleGuideA from './styleGuideA.js';
import styleGuideB from './styleGuideB.js';
import styleGuideDefault from './styleGuideDefault.js';

//Two companies: A and B

export default ({ id = '', children }) => {
    let themeStyleGuide = styleGuideDefault;
    if (id === 'A') {
        themeStyleGuide = styleGuideA;
    } else if (id === 'B') {
        themeStyleGuide = styleGuideB;
    }
    
    const mergedTheme = {
        themeId: id,
        features: FEATURES[id] || {showStartVehicle: true},
        styleGuide: themeStyleGuide,
    };
    return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

const FEATURES = {
    B: {
        showStartVehicle: false,
    },
};
