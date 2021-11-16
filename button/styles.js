export default ({ palette, spacing, type }) => ({
    default: {
        height: 54,
        borderRadius: 70,
        paddingHorizontal: 10,
        borderColor: palette.black,
        backgroundColor: palette.white,
        justifyContent: 'center',
    },
    text: {
        ...type.buttonLabel,
        textAlign: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
