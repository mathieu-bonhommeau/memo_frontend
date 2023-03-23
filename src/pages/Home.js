import CollapseWrapper from "../components/CollapseWrapper";
import Main from "../components/Main";
import {useEffect, useState} from "react";

const Home = () => {
    const [tips, setTips] = useState([])
    console.log(tips)
    useEffect(() => {
        const tips = async () => {
            const response = await fetch('http://localhost:3100/tips')
            if (response.ok) {
                const datas = await response.json()
                setTips(datas)
            }
        }
        tips().then()
        return () => {}
    }, [])

    return (
        <Main>
            {tips.length > 0 ? <CollapseWrapper environment={"test"} tips={tips} /> : ''}
        </Main>
    )
}

export default Home