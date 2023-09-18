import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    homeRoot: {
        flex: 1,
        margin: 20,
        gap: 8
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    recipeCardWrapper: {
        gap: 8,
        height: 140,
        alignItems: 'flex-end',
        paddingLeft: 8
    },
    productCardWrapper: {
        gap: 8,
        // height: 209,
        alignItems: 'flex-end',
        paddingLeft: 8,
        paddingBottom: 8
    },
    flatListWrapper: {
        height: 150,
    },
    flatListProductWrapper: {
        height: 215,
    },
    comments: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10
    }
});
