/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from "react-native";
import styles from './styles';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import Input from "../../components/Input";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
import ProductCard from "../../components/ProductCard";
import {AppContext} from "../../../App";


const Home = () => {
    const categories = require('../../data/tags.json');
    const recipies = require('../../data/recipies.json');
    const productsDum = require('../../data/products.json');
    const italyCF = require('../../../assets/products/CF-ITALY.gif');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const onSearch = () => {
        navigation.navigate('Search');
    }
    // @ts-ignore
    const {products} = useContext(AppContext);
    const [productsShow, setProductShow] = useState<any[]>(productsDum);
    useEffect(() => {
        const productFilter = productsDum.filter((item: any) => item.tag.includes(selectedCategory));
        if (productFilter?.length === 0) {
            setProductShow(productsDum);
        } else {
            setProductShow(productFilter);
        }
    }, [selectedCategory])
    return (
        <View style={styles.homeRoot}>
            <Text style={styles.mainTitle}>Welcome KayKayfé Recipes</Text>
            <Input pressAble={true} onPress={onSearch} showIconSearch placeholder={'Enter input value...'}/>
            <Text style={styles.comments}>Đánh giá sản phẩm</Text>
            <View style={styles.flatListWrapper}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.recipeCardWrapper}
                    data={recipies} renderItem={({item}) => (
                    <RecipeCard itemKey={item.id} level={item.level} imageProduct={italyCF} key={item.id}
                                title={item.name}/>
                )}/>
            </View>
            <Categories categories={categories} selectedCategory={selectedCategory} onSelected={setSelectedCategory}/>
            <View style={styles.flatListProductWrapper}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.productCardWrapper}
                    data={productsShow} renderItem={({item}) => (
                    <ProductCard price={item.price}
                                 imageProduct={item.imgPath}
                                 key={item.id}
                                 title={item.name}/>
                )}/>
            </View>
        </View>
    );
};

export default Home;
