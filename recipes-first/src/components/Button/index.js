import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Button = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonRoot, style]}>
            <View>{children}</View>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
