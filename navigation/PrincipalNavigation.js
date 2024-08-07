import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeTabNavigation from "./HomeTabNavigation";
import Profile from "../screens/Profile";

export default function PrincipalNavigation() {

const DrawerPrincipal=createDrawerNavigator();

return (
        <DrawerPrincipal.Navigator >
            <DrawerPrincipal.Screen name="Tabs" component={HomeTabNavigation} />
            <DrawerPrincipal.Screen name="Profile" component={Profile} />
        </DrawerPrincipal.Navigator>
    )
}