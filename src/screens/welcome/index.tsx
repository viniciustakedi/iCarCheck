import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenNavigationProp from "../../routes/types";
import styles from './welcome-styles';

import * as Animatable from 'react-native-animatable';
import AnimatedLottieView from "lottie-react-native";

function Welcome() {
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.titles}>
                <AnimatedLottieView
                    source={require('../../assets/lottie/checking.json')}
                    style={[styles.animatePosition, { width: 70, height: 70 }]}
                    resizeMode="cover"
                    loop={false}
                    autoPlay={true}
                />
                <Animatable.Text
                    animation="fadeInLeft"
                    delay={1000}
                    style={styles.title}
                >
                    iCarCheck
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeInLeft"
                    delay={1300}
                    style={styles.subTitle}
                >
                    Olá, vamos começar?
                </Animatable.Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.buttons}
            >
                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: '#57CC99' }
                    ]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.separatorText}>Ou</Text>
                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: '#80ED99' }
                    ]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.textButton}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default Welcome;