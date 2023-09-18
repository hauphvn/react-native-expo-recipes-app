import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    categoriesRoot: {
        // backgroundColor: '#ccc',
        maxHeight: 50,
        marginRight: -30,
        marginBottom: 17,
    },
    item: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 12,
        borderRadius: 10,
    },
    itemSelected: {
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.green,
        paddingHorizontal: 8,
        overflow: 'hidden'
    },
    itemContainer: {
        marginRight: 17,
    },
    itemContainerSelected: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#4681a3',
    },
});
