import react from 'react';
import styles from "./Styles"
import Menu from "./Menu"
import {View, TouchableHighlight } from 'react-native';

const LifeguardApp = () => {

    return (
      
    <View style={styles.menu_container}>
            <TouchableHighlight underlayColor='white' activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => Menu.menuClicked}>
                <Menu></Menu>
        </TouchableHighlight>
    </View>
  );
};

export default LifeguardApp;






