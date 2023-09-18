import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ICategoriesProps {
    categories: string[],
    selectedCategory: string,
    onSelected: (value: string) => void,
    style?: any
}

const Categories = (props: ICategoriesProps) => {
    const { categories, selectedCategory, onSelected, style } = props;
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.categoriesRoot, style]}
            data={categories}
            renderItem={({ item }) => {
                const selected = selectedCategory === item;
                return (
                    <TouchableOpacity onPress={() => onSelected(item)}
                                      style={[styles.itemContainer, selected ? styles.itemContainerSelected : {}]}>
                        <Text
                            style={[styles.item, selected ? styles.itemSelected : {}]}>{item}</Text>
                    </TouchableOpacity>
                );
            }}
        />

    );
};

export default React.memo(Categories);
