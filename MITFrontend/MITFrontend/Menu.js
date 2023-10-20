
class Menu {

    constructor() {

        menuINFO = {
            xPOS: -160,
            yPOS: -350,
            deltaX: 100,
            deltaY: 0,
            isOpen: false
        };
        return (
            <div>
                <View style={styles.rectangle}></View>
                <View style={styles.wrectangle}></View>
                <View style={styles.rectangle}></View>
                <View style={styles.wrectangle}></View>
                <View style={styles.rectangle}></View>
            </div>
        )
    }

  

    expandMenu = () => {
        menuINFO.isOpen = true;
        menuINFO.xPOS += menuINFO.deltaX;
        menuINFO.yPOS += menuINFO.deltaY;
    };

    contractMenu = () => {
        menuINFO.isOpen = true;
        menuINFO.xPOS += menuINFO.deltaX;
        menuINFO.yPOS += menuINFO.deltaY;
    }

    menuClicked = () => {
        if (menuINFO.isOpen == false)
            expandMenu();
        else if (menuINFO.isOpen == true)
            contractMenu();
    };

}

const menu = new Menu();
export default menu;