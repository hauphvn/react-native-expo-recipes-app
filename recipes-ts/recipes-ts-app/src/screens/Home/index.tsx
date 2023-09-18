/* eslint-disable */
import React, {useState} from 'react';
import {Text, View} from "react-native";
import styles from './styles';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import Input from "../../components/Input";
import Categories from "../../components/Categories";


const Home = () => {
    const data = require('../../data/categories.json');
    const [selectedCategory, setSelectedCategory] = useState(data[0]);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const onSearch = () => {
        navigation.navigate('Search');
    }
    return (
        <View style={styles.homeRoot}>
            <Text style={styles.mainTitle}>Welcome KayKayfé Recipes</Text>
            <Input pressAble={true} onPress={onSearch} showIconSearch placeholder={'Enter input value...'}/>
            <Categories categories={data} selectedCategory={selectedCategory} onSelected={setSelectedCategory}/>
        </View>
    );
};

export default Home;
