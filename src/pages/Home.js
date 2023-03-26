import CollapseWrapper from "../components/modules/CollapseWrapper";
import Main from "../components/layout/Main";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const {datas: environments, isLoading} = useFetch('/environments-tips')

    return (
        <Main>
            {isLoading ? '' : environments.data.map(environment => (
                <CollapseWrapper environment={environment.name} tips={environment.tips} />
            )) }
        </Main>
    )
}

export default Home