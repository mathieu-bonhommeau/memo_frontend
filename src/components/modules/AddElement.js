import {GoDiffAdded} from "react-icons/go";
import {useState} from "react";
import ModalAddElement from "../layout/ModalAddElement";

const AddElement = ({tip}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={"fixed bottom-4 right-8 z-10 pb-3"}>
                <button type={"button"} onClick={() => setIsOpen(!isOpen)} className={"text-white font-semibold text-4xl "}>
                    <GoDiffAdded />
                </button>
            </div>
            {isOpen && <ModalAddElement type={"tip"} isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>

    )
}

export default AddElement