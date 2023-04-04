import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {useEffect, useState} from "react";
import useFetchData from "../../../hooks/useFetchData";
import usePostData from "../../../hooks/usePostData";

const initialState = {
    command: '',
    description: '',
    environmentId: null,
}
const FormAddTip = ({addEnvironment, setAddEnvironment}) => {
    const [formData, setFormData] = useState(initialState)

    const {datas: environments, isLoading} = useFetchData('/environments')
    const { datas: newTips, postData } = usePostData()

    useEffect(() => {
        if (newTips.id) {
            setFormData(initialState)
        }
    }, [newTips])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postData('/tips', formData)
    }

    return (
        <form className={"py-4 flex flex-col gap-3"} onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="environment-select">Environnement</InputLabel>
                <Select
                    labelId="environment-select"
                    id="environment-select"
                    value={formData.environmentId}
                    label="Environment"
                    onChange={(event) => setFormData({
                        ...formData,
                        environmentId: event.target.value
                    })
                    }
                >
                    {!isLoading && environments.data.map(environment => (
                        <MenuItem key={`${environment.name}-${environment.id}`}
                                  value={environment.id}>{environment.name}</MenuItem>
                    ))}
                    <MenuItem onClick={(e) => setAddEnvironment(true)}><FiPlus/></MenuItem>
                </Select>
            </FormControl>
            <TextField id="tipCommand"
                       name={"tip-command"}
                       label={"Commande"}
                       variant="outlined"
                       value={formData.command}
                       onChange={(event) => setFormData({
                        ...formData,
                        command: event.target.value
                    })
            }/>
            <TextField id="tipDescription"
                       name={"tip-description"}
                       label={"Description"}
                       variant="outlined"
                       value={formData.description}
                       onChange={(event) => setFormData({
                        ...formData,
                        description: event.target.value
                    })
            }/>
            <Button variant="outlined" type={"submit"}>Ajouter</Button>
        </form>
    )
}

export default FormAddTip