import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
})