import {BrowserRouter , Route , Routes} from "react-router-dom"
import { Gruz } from "./Components/Gruz/Gruz"
import { Marshrut } from "./Components/Marshrut/Marshrut"
import { Daily } from "./Components/Daily/Daily"

export const AppRouter = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gruz />}/>
                <Route path="/marshrut" element={<Marshrut />}/>
                <Route path="/daily" element={<Daily />} />
            </Routes>
        </BrowserRouter>
    </>
}