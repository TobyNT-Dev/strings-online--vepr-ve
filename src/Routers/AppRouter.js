import { Routes, Route } from 'react-router-dom'
import { BreadCrumbs } from '../Components/BreadCrumbs/BreadCrumbs.jsx'
import { Footer } from '../Components/Footer/Footer.jsx'
import { NavBar } from '../Components/NavBar/NavBar.jsx'
import { ProductNav } from '../Components/ProductNav/ProductNav.jsx'
import { SearchBar } from '../Components/SearchBar/SearchBar.jsx'
import { Home } from '../Pages/Home/Home.jsx'
import { Login } from '../Pages/Login/Login.jsx'
import { TradingConditions } from '../Pages/TradingConditions/TradingConditions.jsx'

export const AppRouter = () => {
    return (
        <>
        {/* shows the navigation bar on every page */}
        <NavBar />
        <SearchBar />
        {/* shows the bread crumbs on every page */}
        <BreadCrumbs />
        {/* shows the Product Navigation list on every page */}
        <ProductNav />
        {/* Creates the routes for the links in the NavBar Component */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-and-trading-conditions" element={<TradingConditions />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        {/* shows the footer on every page */}
        <Footer />
        </>
    )
}