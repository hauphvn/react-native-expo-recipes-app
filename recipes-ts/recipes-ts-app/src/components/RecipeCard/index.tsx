import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface IRecipeCardProps {
    style?: any,
    title: string,
    imageProduct: any,
    level?: number,
    itemKey: number | string
}

const RecipeCard = (props: IRecipeCardProps) => {
    const startIcon = require('../../../assets/star.png');
    const noStartIcon = require('../../../assets/starEmpty.png');
    const { title, style, imageProduct, level = 1, itemKey = '' } = props;
    const renderStart = () => {
        let count = level;
        const icons = [];
        while (count > 0) {
            icons.push(<Image key={itemKey.toString() + ' start ' + count.toString()} source={startIcon}
                              style={styles.startIcon}/>);
            --count;
        }
        let noStart = 5 - level;
        while (noStart > 0) {
            icons.push(<Image key={itemKey.toString() + ' no start ' + noStart.toString()} source={noStartIcon}
                              style={styles.startIcon}/>);
            --noStart;
        }
        return icons;
    };
    return (
        <View style={[styles.recipeCardRoot, styles.shadow, style]}>
            <View style={styles.imgContainer}>
                <Image style={[styles.imgProduct]} source={imageProduct}/>
            </View>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.startsWrapper}>{renderStart()}</View>
        </View>
    );
};

export default React.memo(RecipeCard);
