import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import styles from "./modalalert-styles";
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ModalAlertContext } from "../../context/modal";

interface modalAlertComponent {
    type: string,
    icon: string
    title: string,
    message: string,
    time?: number,
}

enum typeAlert {
    error = '#D0342C',
    warning = 'yellow',
    success = 'green'
}

const ModalAlert: React.FC<modalAlertComponent> = ({
    type,
    icon,
    title,
    message,
    time
}) => {

    const { modalAlertOpen, setModalAlertOpen } = useContext(ModalAlertContext)
    const [colorBg, setColorBg] = useState("");

    const modalVisibility = useCallback(() => {
        switch (type) {
            case "error":
                setColorBg(typeAlert.error)
                break;

            case "warning":
                setColorBg(typeAlert.warning)
                break;

            case "success":
                setColorBg(typeAlert.success)
                break;

            default:
                break;
        }

        setTimeout(() => {
            setModalAlertOpen(false);
        }, time ? time : 4500);
    }, [modalAlertOpen])

    useEffect(() => {
        if (modalAlertOpen) {
            modalVisibility();
        }
    }, [modalVisibility])

    return (
        <>
            {
                modalAlertOpen
                    ? <Animatable.View
                        animation="fadeInDown"
                        duration={800}
                        easing="ease-out-cubic"
                        style={[styles.content, { backgroundColor: `${colorBg}` }]}
                    >
                        <View style={styles.icon}>
                            <IconMaterialIcons name={icon} size={40} color="#fff" />
                        </View>
                        <View style={styles.messages}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.message}>{message}</Text>
                        </View>
                    </Animatable.View>
                    : null
            }
        </>
    );
}

export default ModalAlert;