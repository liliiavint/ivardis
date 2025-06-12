import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function BasicLayout() {
    return (
        <div className="basic-layout">
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    );
}