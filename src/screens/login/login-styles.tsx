import { Dimensions, StyleSheet } from "react-native";
import { withDecay } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    titles: {
        flex: 1.65,
        justifyContent: 'flex-end',
        paddingTop: 40,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Inter-900',
        color: '#000',
        marginLeft: 30,
    },
    subTitle: {
        color: '#00000066',
        fontSize: 16,
        fontFamily: 'Inter-500',
        paddingLeft: 30,
    },
    inputs: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 40,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    inputArea: {
        width: '85%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        elevation: 8,
    },
    input: {
        alignItems: 'center',
        width: '85%',
        height: '100%',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Inter-700',
        color: '#000'
    },
    iconPassword: {
        width: '15%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddingTop: {
        marginTop: 30,
    },
    buttonLogin: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 30,
        paddingTop: 30,
        width: '100%',
        height: '100%',
    },
    primaryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57CC99',
        borderRadius: 25,
        width: 150,
        height: 45,
    },
    textButton: {
        fontFamily: 'Inter-800',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#fff',
    },
    signUp: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textSignUp: {
        color: '#22577A',
        marginLeft: 5,
        fontFamily: 'Inter-400',
    }
});

export default styles;