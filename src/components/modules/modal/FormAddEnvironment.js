import {Button, TextField} from "@mui/material";
import {useState} from "react";
import usePostData from "../../../hooks/usePostData";

const initialState = {
    name: '',
    details: '',
}
const FormAddEnvironment = ({name}) => {
    const [formData, setFormData] = useState(initialState)

    const { datas: newEnvironment, postData } = usePostData()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postData('/environment', formData)
    }

    return (
        <form className={"p-4 flex flex-col gap-3"} onSubmit={handleSubmit}>
            <TextField
                id="environmentName"
                name={"environment-name"}
                label={"Nom"}
                variant="outlined"
                value={formData.name} onChange={(event) => setFormData({
                    ...formData,
                    name: event.target.value
                })
            } />
            <TextField
                id="environmentDetails"
                name={"environment-detailsd"}
                label={"Détails"}
                variant="outlined"
                value={formData.details} onChange={(event) => setFormData({
                ...formData,
                details: event.target.value
            })
            } />
            <Button variant="outlined" type={"submit"}>Ajouter</Button>
        </form>
    )
}

export default FormAddEnvironment