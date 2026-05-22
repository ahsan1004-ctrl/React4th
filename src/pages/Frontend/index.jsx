import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PageNotFound from '../PageNotFound'
import Todos from './Todos'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/todos' element={<Todos />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend