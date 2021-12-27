import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialBottomTabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MaterialBottomTabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;