import {GoDiffAdded} from "react-icons/go";
import {useContext } from "react";
import ModalAddTip from "./modal/ModalAddTip";
import {ModalContext} from "../../contexts/ModalContext";

const AddTip = () => {
    const { isOpenModal, setIsOpenModal, setTypeModal } = useContext(ModalContext)

    return (
        <>
            <div className={"fixed bottom-4 right-8 z-10 pb-3"}>
                <button type={"button"} onClick={() => {
                    setIsOpenModal(true)
                    setTypeModal('tip')
                }} className={"text-white font-semibold text-4xl "}>
                    <GoDiffAdded />
                </button>
            </div>
            {isOpenModal && <ModalAddTip />}
        </>

    )
}

export default AddTip