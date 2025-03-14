import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "../pages/home-page"
import { NotFoundPage } from "../pages/notfound-page"
import { AdminPage } from "../pages/admin/admin.page"
import { AdminLoginPage } from "../pages/admin/login.admin.page"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}
                />

                <Route
                    path="/admin"
                    element={<AdminPage/>}
                />

                <Route
                    path="/admin/login"
                    element={<AdminLoginPage/>}
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