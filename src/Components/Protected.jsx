import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children, authentication }) => {
    const [Loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) { navigate('/') }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return Loader ? <h1>Loading</h1>: <>{children}</>
}

export default Protected