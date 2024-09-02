import React from 'react'
import { Route, Routes } from "react-router-dom";
const UnprotectedRoute = () => {
    const pages = {

    }
    return (
        <Routes>
            {Object.entries(pages).map(([path, element]) => (
                <Route path={path} element={element} key={path} />
            ))}
        </Routes>

    )
}

export default UnprotectedRoute