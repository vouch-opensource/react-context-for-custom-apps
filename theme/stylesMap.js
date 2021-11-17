import buttonStylesFactory from '../src/button/styles.js';
import landingPageStylesFactory from '../src/landingPage/styles.js'

export default (styleGuide) => ({
    buttonComponent: buttonStylesFactory(styleGuide),
    landingPageComponent: landingPageStylesFactory(styleGuide),
    styleGuide,
})