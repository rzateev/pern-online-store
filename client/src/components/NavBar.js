import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar} from "react-bootstrap"
import {Button, Container} from "react-bootstrap";
import {SHOP_ROUTE} from "../Utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Купи ШОП</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'} className='ml-4'>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;