import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    splashRoot: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 82,

    },
    titleWrapper: {
        marginTop: 32,
        gap: 8,
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontSize: 32,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.green,
        backgroundColor: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        width: 80,
    },
    mainText: {
        fontSize: 50,
        color: colors.white,
        fontWeight: 'bold',
        marginTop: 32
    },
    subMainTitle: {
        color: colors.white,
        textAlign: 'center'
    },
    btnWrapper: {
        marginTop: 52,
        flex: 1,
        alignItems: 'center'
    },
    btn: {
        width: 150,
        maxHeight: 70,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    btnContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    btnText: {
        fontSize: 20, fontWeight: 'bold',
        color: colors.white
    },
    imgBtn: {
        maxWidth: 40,
        maxHeight: 30,
    }
});
