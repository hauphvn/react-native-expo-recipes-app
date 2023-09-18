import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    productRoot: {
        backgroundColor: colors.lightGrey,
        // flex: 1,
        height: 150,
        width: 180,
        borderRadius: 10,
        position: 'relative',
        padding: 8,
        justifyContent: 'space-between'
    },
    name: {
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
        right: 38,
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
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: {
        paddingTop: 60,
        maxWidth: 200,
        textAlign: 'center',
        color: colors.black,
        fontWeight: 'bold',
        // maxHeight: 60 + 50
    },
    startsWrapper: {
        flexDirection: 'row',
        paddingTop: 5
    },
    startIcon: {
        width: 15, height: 15
    },
    price: {
        // paddingTop: 25,
        fontStyle: 'italic'
    }
});
