/* eslint-disable */
import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import styles from './styles';
import Button from "../../components/Button";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";


const Splash = () => {
    const RightArrow = require("../../../assets/arrowRight.png");
    const LogoImg = require("../../../assets/logo.png");
    const ImageSplash = require("../../../assets/splash.png");
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <ImageBackground source={ImageSplash} style={styles.splashRoot}>
            <View style={styles.logoContainer}>
                <Image source={LogoImg}/>
            </View>
            <View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>KayKafé</Text>
                    <Text style={styles.subTitle}>Express</Text>
                </View>
                <View>
                    <Text style={styles.mainText}>Get Cooking</Text>
                    <Text style={styles.subMainTitle}>SIMPLE WAY TO FIND TASTY RECIPE</Text>
                </View>
                <View style={styles.btnWrapper}>
                    <Button onPress={() => navigation.navigate('Home')} style={styles.btn}>
                        <View style={styles.btnContent}>
                            <Text style={styles.btnText}>Start Cooking</Text>
                            <Image style={styles.imgBtn} source={RightArrow}/>
                        </View>
                    </Button>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Splash;
