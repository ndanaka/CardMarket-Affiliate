import React from "react";
import { useNavigate } from "react-router";
import NavListItem from "./ListItem";
import NavUList from "./UList";

const NavPayment = () => {
    const navigate = useNavigate()
    return (
        <>
            <NavUList >
                <NavListItem label={'Request Payments'} handle={() => navigate('/homepage/payments')} coloredName={'Payments'} />
                <NavListItem label={'Payment history'} handle={() => navigate('/homepage/payments/history')} coloredName={'Payments'} />
            </NavUList>
        </>
    )
}
export default NavPayment;