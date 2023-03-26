import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import {useState} from "react";

const ModalAddElement = ({type, isOpen, setIsOpen}) => {
    const [formData, setFormData] = useState({
        command: '',
        description: '',
        environmentId: null,
    })
    const {datas: environments, isLoading} = useFetch('/environments')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className={"fixed top-0 w-full h-screen z-10 "}>
            <div  className={"bg-white w-1/2 h-min-1/2 mt-48 mx-auto rounded-md p-4"}>
                <h2 className={"p-3 text-2xl"}>Ajouter une commande</h2>
                <form className={"py-4 flex flex-col gap-3"} onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Environnement</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.environmentId}
                            label="Environment"
                            onChange={(event) => setFormData({
                                    ...formData,
                                    environmentId: event.target.value
                                })
                            }
                        >
                            {!isLoading && environments.data.map(environment => (
                                <MenuItem key={`${environment.name}-${environment.id}`} value={environment.id}>{environment.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField id="tipCommand" name={"tip-command"} label={"Commande"} variant="outlined" onChange={(event) => setFormData({
                                    ...formData,
                                    command: event.target.value
                                })
                            } />
                    <TextField id="tipDescription" name={"tip-description"} label={"Description"} variant="outlined"  onChange={(event) => setFormData({
                                    ...formData,
                                    description: event.target.value
                                })
                            } />
                    <Button variant="outlined" type={"submit"}>Ajouter</Button>
                </form>
            </div>
        </div>
    )
}

export default ModalAddElement