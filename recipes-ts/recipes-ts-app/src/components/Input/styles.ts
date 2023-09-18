import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    inputRoot: {
        // flex: 1,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        height: 38,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        columnGap: 3,
        borderRadius: 19
    },
    text: {
        color: colors.white,
    },
    searchIcon: {
        width: 16, height: 16
    },
});
