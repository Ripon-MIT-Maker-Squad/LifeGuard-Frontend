import { StatusBar } from 'expo-status-bar';
import styles from "./Styles"
import menu from "./Menu.js"
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {

    return (
      
    <View style={styles.menu_container}>
        <TouchableHighlight onPress={menu.menuCLicked()} underlayColor='white'>
            <Menu></Menu>
        </TouchableHighlight>
    </View>
  );
}




var globalBackgroundColor = { bacgroundcolor: 'white' }


