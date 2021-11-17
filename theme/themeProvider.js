import React from 'react';
import ThemeContext from './themeContext.js';
import stylesMap from './stylesMap.js';
import styleGuideSunray from './styleGuideSunray.js';
import styleGuideMoonlight from './styleGuideMoonlight.js';
import styleGuideDefault from './styleGuideDefault.js';

//Two companies: Sunray and Moonlight

export default ({ theme = {}, id = '', children }) => {
    let themeStyleGuide = styleGuideDefault;
    if (id === 'sunray') {
        themeStyleGuide = styleGuideSunray;
    } else if (id === 'moonlight') {
        themeStyleGuide = styleGuideMoonlight;
    }
    const mergedStyleGuide = Object.assign({}, themeStyleGuide, theme.styleGuide);
    const defaultTheme = stylesMap(mergedStyleGuide);
    const mergedTheme = {
        themeId: id,
        features: FEATURES[id] || {},
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
    sunray: {
        showStartVehicle: true,
    },
    moonlight: {
        showStartVehicle: false,
    },
};
