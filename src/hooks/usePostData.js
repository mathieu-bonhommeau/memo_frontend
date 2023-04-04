import {useState} from "react";

const usePostData = () => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const postData = async (url, body) => {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        if (response.ok) {
            const datas = await response.json()
            setDatas(datas)
            setIsLoading(false)
        }
    }
    return {datas, postData, isLoading}
}

export default usePostData
