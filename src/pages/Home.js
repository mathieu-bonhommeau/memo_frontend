import CollapseWrapper from "../components/modules/CollapseWrapper";
import Main from "../components/layout/Main";
import useFetch from "../hooks/useFetch";
import AddElement from "../components/modules/AddElement";

const Home = () => {

    const {datas: environments, isLoading} = useFetch('/environments-tips')

    return (
        <Main>
            <AddElement type={"tip"}/>
            {isLoading ? '' : environments.data.map(environment => (
                <CollapseWrapper key={`${environment.name}-environment.id`} environment={environment.name} tips={environment.tips} />
            )) }
        </Main>
    )
}

export default Home