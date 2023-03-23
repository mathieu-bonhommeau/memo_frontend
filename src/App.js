import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
    return (
        <div className={"App bg-zinc-900 h-screen"}>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;
