import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface IButtonProps {
    children: any,
    onPress: () => void,
    style?: any
}

const Button = (props: IButtonProps) => {
    const { children, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonRoot, style]}>
            <View>{children}</View>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
