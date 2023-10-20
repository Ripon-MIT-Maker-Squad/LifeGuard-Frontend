import react from 'react';
import styles from "./Styles"
import Menu from "./Menu"
import {View, TouchableHighlight } from 'react-native';

const LifeguardApp = () => {

    return (
      
    <View style={styles.menu_container}>
        <TouchableHighlight underlayColor='white'>
                <Menu></Menu>
        </TouchableHighlight>
    </View>
  );
}

export default LifeguardApp;






