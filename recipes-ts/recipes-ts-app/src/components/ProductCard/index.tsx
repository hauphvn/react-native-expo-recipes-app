import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface IProductProps {
    style?: any,
    title: string,
    imageProduct: string,
    price: string
}

const Product = (props: IProductProps) => {
    const { title = '', style, imageProduct, price } = props;
    return (
        <View style={[styles.productRoot, styles.shadow, style]}>
            <View style={styles.imgContainer}>
                <Image style={[styles.imgProduct]} source={{ uri: imageProduct }}/>
            </View>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
            <Text style={styles.price}>Giá: {price}</Text>

        </View>
    );
};

export default React.memo(Product);
