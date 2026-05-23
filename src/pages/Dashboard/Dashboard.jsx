import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardTodo from './DashboardTodo'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<DashboardTodo/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Dashboard