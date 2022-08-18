import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titles: {
        flex: 1.25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        width: '100%',
        height: '100%',
    },
    animatePosition: {
        position: 'absolute',
        top: '25%',
    },
    title: {
        fontSize: 36,
        fontFamily: 'Inter-900',
        color: '#323232',
    },
    subTitle: {
        color: '#00000066',
        fontSize: 22,
        fontFamily: 'Inter-500',
    },
    buttons: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#38A3A5',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 60,
        padding: 15,
        borderRadius: 25,
    },
    textButton: {
        fontFamily: 'Inter-700',
        fontSize: 16,
        color: '#323232'
    },
    separatorText: {
        fontFamily: 'Inter-900',
        fontSize: 14,
        color: '#323232',
        paddingTop: 20,
        paddingBottom: 20,
        textTransform: 'uppercase',
    }
});

export default styles;