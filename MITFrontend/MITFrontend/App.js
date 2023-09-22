import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {



  return (
    <View style={styles.menu_container}>
          <View style={styles.rectangle}></View>
          <View style={styles.wrectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.wrectangle}></View>
          <View style={styles.rectangle}></View>
    </View>
  );
}

let menuINFO = {
    xPOS: -160,
    yPOS: -350,
    deltaX: 100,
    deltaY: 0,
    isOpen: false
};

expandMenu = () => {
    menuINFO.isOpen = true;
    menuINFO.xPOS += menuINFO.deltaX;
    menuINFO.yPOS += menuINFO.deltaY;
};

const contractMenu = () => {
    menuINFO.isOpen = true;
    menuINFO.xPOS += menuINFO.deltaX;
    menuINFO.yPOS += menuINFO.deltaY;
}

const menuClicked = () => {
    if (menuINFO.isOpen == false)
        expandMenu();
    else if (menuINFO.isOpen == true)
        contractMenu();
};


var globalBackgroundColor = { bacgroundcolor: 'white' }



const styles = StyleSheet.create({
    menu_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
        left: menuINFO.xPOS,
        top: menuINFO.yPOS,
    },


   rectangle: {
        width: 30,
        height: 5,
       backgroundColor: 'red',
    },

    wrectangle: {
        width: 20,
        height: 3,
        backgroundColor: globalBackgroundColor.bacgroundcolor,
    }
});
