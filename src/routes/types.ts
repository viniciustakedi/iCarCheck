import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Home: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList
>;

export default ScreenNavigationProp;