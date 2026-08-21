import React from "react";
import authslicer from "../../Features/auth";

const logoutBtn = () => {
    export const LogoutHandler = () => {
        authslicer.logstatus = false;
    }
    return <button onClick={LogoutHandler}>Logout</button>
}

export default logoutBtn