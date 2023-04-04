import {useContext, useState} from "react";
import { FiX } from "react-icons/fi";
import {ModalContext} from "../../../contexts/ModalContext";
import FormAddEnvironment from "./FormAddEnvironment";
import FormAddTip from "./FormAddTip";



const ModalAddTip = () => {
    const [addEnvironment, setAddEnvironment] = useState(false)
    const { setIsOpenModal } = useContext(ModalContext)

    return (
        <div className={"fixed top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-70"}>
            <div className={"bg-white relative w-1/2 h-min-1/2 mt-48 mx-auto rounded-md p-4"}>
                <span className="absolute right-5 top-5 text-3xl cursor-pointer" onClick={() => setIsOpenModal(false)}><FiX /></span>
                <h2 className={"p-3 text-2xl"}>{!addEnvironment ? "Ajouter un tips" : "Ajouter un environment"}</h2>
                {!addEnvironment ?
                    <FormAddTip addEnvironment={addEnvironment} setAddEnvironment={setAddEnvironment}/> :
                    <FormAddEnvironment  addEnvironment={addEnvironment} setAddEnvironment={setAddEnvironment}/>
                }
            </div>
        </div>
    )
}

export default ModalAddTip