import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
    recipeCardRoot: {
        backgroundColor: colors.white,
        // flex: 1,
        height: 90,
        width: width - 40,
        borderRadius: 10,
        position: 'relative',
        padding: 8
    },
    text: {
        color: colors.white,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    bgImg: {
        backgroundColor: 'black'
    },
    imgContainer: {
        backgroundColor: 'black',
        position: 'absolute',
        top: -50,
        right: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.54,
        elevation: 3
    },
    imgProduct: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        borderRadius: 100,
        overflow: 'hidden',
    },
    title: {
        width: width - 160,
        color: colors.black,
        fontWeight: 'bold'
    },
    startsWrapper: {
        flexDirection: 'row',
        paddingTop: 5
    },
    startIcon: {
        width: 15, height: 15
    }
});
