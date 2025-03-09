import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../page/home-page"

export const AppRouters = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={<HomePage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}