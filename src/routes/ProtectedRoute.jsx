import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
const ProtectedRoute = () => {
    const pages = {
        '/':<Home/>
    }
  return (
    <Routes>
            {Object.entries(pages).map(([path, element]) => (
                <Route path={path} element={element} key={path} />
            ))}
        </Routes>
  )
}

export default ProtectedRoute