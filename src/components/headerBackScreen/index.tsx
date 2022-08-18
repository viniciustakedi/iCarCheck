import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import ScreenNavigationProp from "../../routes/types";
import styles from "./backscreen-styles";
import * as Animatable from 'react-native-animatable';

interface HeaderBackScreenInterface {
    screenName: string,
    backgroundColor?: string,
    iconColor?: string,
    color?: string,
}

const HeaderBackScreen: React.FC<HeaderBackScreenInterface> = ({
    screenName,
    backgroundColor,
    iconColor,
    color
}) => {
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        <Animatable.View
            animation="fadeInDown"
            style={[
                styles.header,
                { backgroundColor: `${backgroundColor ? backgroundColor : "#57CC99"}` }
            ]}
        >
            <TouchableOpacity
                style={styles.arrowArea}
                onPress={() => navigation.goBack()}
            >
                <IconMaterialIcons
                    name="arrow-back-ios"
                    size={20}
                    color={iconColor ? iconColor : "#323232"}
                />
            </TouchableOpacity>
            <Text
                style={[
                    styles.screenName,
                    { color: `${color ? color : '#323232'}` }
                ]}
            >{screenName}</Text>
        </Animatable.View>
    );
}

export default HeaderBackScreen;