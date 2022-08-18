import { StyleSheet, Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios'
    ? 20
    : StatusBarManager.HEIGHT + 25;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        width: '100%',
        height: STATUSBAR_HEIGHT,
    },
    arrowArea: {
        justifyContent: 'center',
        width: 40,
        height: '100%',
    },
    screenName: {
        fontFamily: 'Inter-300',
        fontSize: 18,
    }
});

export default styles;