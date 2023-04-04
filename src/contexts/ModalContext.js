import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ProviderModalContext = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [typeModal, setTypeModal] = useState('')

    return (
        <ModalContext.Provider value={{ isOpenModal, setIsOpenModal, typeModal, setTypeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ProviderModalContext