import React from 'react';
import ThemeContext from './themeContext.js';
import stylesMap from './stylesMap.js';
import styleGuideA from './styleGuideA.js';
import styleGuideB from './styleGuideB.js';
import styleGuideDefault from './styleGuideDefault.js';

//Two companies: A and B

export default ({ theme = {}, id = '', children }) => {
    let themeStyleGuide = styleGuideDefault;
    if (id === 'A') {
        themeStyleGuide = styleGuideA;
    } else if (id === 'B') {
        themeStyleGuide = styleGuideB;
    }
    const mergedStyleGuide = Object.assign({}, themeStyleGuide, theme.styleGuide);
    const defaultTheme = stylesMap(mergedStyleGuide);
    const mergedTheme = {
        themeId: id,
        features: FEATURES[id] || {showStartVehicle: true},
        styleGuide: mergedStyleGuide,
        ...Object.keys(defaultTheme).reduce(
            (acc, key) => ({
                ...acc,
                [key]: Object.assign({}, defaultTheme[key], theme[key]),
            }),
            {}
        ),
    };
    return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

const FEATURES = {
    B: {
        showStartVehicle: false,
    },
};
