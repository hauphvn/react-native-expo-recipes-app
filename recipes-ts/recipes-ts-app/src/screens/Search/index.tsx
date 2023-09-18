import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Input from '../../components/Input';

const Search = () => {
    return (
        <View style={styles.searchRoot}>
            <Input placeholder={'Input name product...'}/>
        </View>
    );
};

export default Search;
