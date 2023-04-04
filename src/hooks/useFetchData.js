import {useEffect, useState} from "react";

const useFetchData = (url) => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`)
            if (response.ok) {
                const datas = await response.json()
                setDatas(datas)
                setIsLoading(false)
            }
        })()

        return () => {}
    }, [url])

    return {datas, isLoading}
}

export default useFetchData