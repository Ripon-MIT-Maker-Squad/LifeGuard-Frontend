import styles from "./Styles";
import { View } from "react-native";
import { Component } from "react";

class Menu extends Component{

    constructor() {
        super();
        this.menuINFO = {
            xPOS: -160,
            yPOS: -350,
            deltaX: 100,
            deltaY: 0,
            isOpen: false
        };
    }

    render() {
        return (

            <View>
                <View style={styles.rectangle}></View>
                <View style={styles.wrectangle}></View>
                <View style={styles.rectangle}></View>
                <View style={styles.wrectangle}></View>
                <View style={styles.rectangle}></View>
            </View>
        )
    }

  

    expandMenu = () => {
        this.menuINFO.isOpen = true;
        this.menuINFO.xPOS += this.menuINFO.deltaX;
        this.menuINFO.yPOS += this.menuINFO.deltaY;

    };

    contractMenu = () => {
        this.menuINFO.isOpen = false;
        this.menuINFO.xPOS += this.menuINFO.deltaX;
        this.menuINFO.yPOS += this.menuINFO.deltaY;
    }

    menuClicked = () => {
        alert("This is an alert message in TypeScript.");

        if (this.menuINFO.isOpen === false)
            this.expandMenu();
        else if (this.menuINFO.isOpen === true)
            this.contractMenu();

    };

}

export default Menu;