import CollapseWrapper from "../components/modules/CollapseWrapper";
import Main from "../components/layout/Main";
import useFetchData from "../hooks/useFetchData";
import AddTip from "../components/modules/AddTip";

const Home = () => {

    const {datas: environments, isLoading} = useFetchData('/environments-tips')

    return (
        <Main>
            <AddTip />
            {isLoading ? '' : environments.data.map(environment => (
                <CollapseWrapper key={`${environment.name}-environment.id`} environment={environment.name} tips={environment.tips} />
            )) }
        </Main>
    )
}

export default Home