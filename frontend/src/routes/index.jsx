import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "../pages/home-page"
import { NotFoundPage } from "../pages/notfound-page"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFoundPage/>}
                />
            </Routes>
        </BrowserRouter>        
    )
}