/* eslint-disable */
import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import styles from './styles';
import ImageSplash from '../../../assets/splash.png'
import LogoImg from "../../../assets/logo.png";
import RightArrow from "../../../assets/arrowRight.png";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/native";

const Splash = ({children}) => {
    const navigation = useNavigation();
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
