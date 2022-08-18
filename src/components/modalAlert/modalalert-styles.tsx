import { StyleSheet, NativeModules, Platform } from "react-native";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT + 60;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        height: STATUSBAR_HEIGHT,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
    icon: {
        marginLeft: 20,
    },
    messages: {
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        color: '#f3f3f3',
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#f3f3f3',
        fontWeight: '400',
    },
    modal: {
        height: '100%',
    },
})

export default styles;