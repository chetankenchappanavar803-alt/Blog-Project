import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Navigate, useNavigate} from 'react-router-dom'
import Button from "../RepComp/Button";
import logoutBtn from "./logoutBtn";

const Header = () => {
    const authStatus = useSelector((state) => {state.auth.login_status})
    const navigate = useNavigate()

    const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
    return(
        <div>
            <header>
                <Container>
                    <nav>
                        <ul>
                            {navItems.map((item) => item.active ? (
                                <li>
                                    {Button(item.name,(() => {}),text)}
                                </li>
                            ) : null)}
                            {authStatus && (() => {
                                logoutBtn()
                            })}
                        </ul>
                    </nav>
                </Container>
            </header>
        </div>
    )
}

export default Header