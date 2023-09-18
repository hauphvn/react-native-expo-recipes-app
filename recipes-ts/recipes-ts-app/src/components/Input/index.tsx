import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

interface IInputProps {
    style?: any,
    placeholder?: string,
    showIconSearch?: boolean,
    pressAble?: boolean,
    onPress?: () => void
}

const Input = (props: IInputProps) => {
    const {
        onPress = () => null,
        placeholder = 'Place holder text',
        style,
        showIconSearch = false,
        pressAble = false
    } = props;
    const renderInput = () => {
        return (
            <View style={[styles.inputRoot, style]}>
                {showIconSearch && (
                    <Image style={styles.searchIcon} source={require('../../../assets/search.png')}/>
                )}
                <TextInput editable={!pressAble} placeholderTextColor={colors.lightGrey} placeholder={placeholder}/>
            </View>
        );
    };
    if (pressAble) {
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        );
    }
    return (
        renderInput()
    );
};

export default React.memo(Input);
