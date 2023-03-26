import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`)
            if (response.ok) {
                const datas = await response.json()
                console.log(datas)
                setDatas(datas)
                setIsLoading(false)
            }
        })()

        return () => {}
    }, [url])

    return {datas, isLoading}
}

export default useFetch