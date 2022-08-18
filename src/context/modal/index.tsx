import { createContext } from "react";

export const ModalAlertContext = createContext({
    modalAlertOpen: false,
    setModalAlertOpen: (modalAlert: false) => { }
});