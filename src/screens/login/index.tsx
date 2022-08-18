import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { HeaderBackScreen, ModalAlert } from "../../components";
import { ModalAlertContext } from "../../context/modal";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './login-styles';

export default function Login() {
    const [modalAlertOpen, setModalAlertOpen] = useState<boolean>(false)

    //States para o login
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    //States para o modal
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const verifyLogin = () => {
        if (username === "takedi" && password === "takedi123") {
            return;
        } else {
            setModalAlertOpen(true)
            setModalTitle("Erro ao logar.")
            setModalMessage("Usuário ou senha inválidos!")
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/imageLogin.png')}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{
                    resizeMode: "cover",
                    height: 300,
                }}
            >
                <HeaderBackScreen
                    screenName="Login"
                    backgroundColor="#fff"
                    iconColor="#22577A"
                    color="#000"
                />
                <View style={styles.titles}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subTitle}>Realize o login para continuar.</Text>
                </View>
                <View style={styles.inputs}>
                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            placeholder='Usuário'
                            placeholderTextColor="#d3d3d3"
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={[styles.inputArea, styles.paddingTop]}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={hidePassword}
                            placeholder='Senha'
                            placeholderTextColor="#d3d3d3"
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            style={styles.iconPassword}
                            onPress={() => setHidePassword(state => !state)}
                        >
                            <IconIonicons
                                name={hidePassword ? "eye" : "eye-off"}
                                size={25}
                                color="#22577A"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonLogin}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={verifyLogin}
                        >
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.signUp}>
                    <Text style={{ color: "#000", fontFamily: "Inter-400" }}>
                        Não possui uma conta?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.textSignUp} >Clique Aqui!</Text>
                    </TouchableOpacity>
                </View>
                <ModalAlertContext.Provider value={{ modalAlertOpen, setModalAlertOpen }}>
                    <ModalAlert
                        type="error"
                        icon="error"
                        title={modalTitle}
                        message={modalMessage}
                        time={2500}
                    />
                </ModalAlertContext.Provider>
            </ImageBackground>
        </View>
    );
}