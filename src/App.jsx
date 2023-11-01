import Home from "./routes/home/home.component.jsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";
import SignUp from "./routes/sign-up/sign-up.component.jsx";

const App = () => {

    const Shop = () => {
        return(
            <div>
                Shop Component
            </div>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
                <Route path='sign-up' element={<SignUp/>}/>
            </Route>
        </Routes>
    )
}

export default App
