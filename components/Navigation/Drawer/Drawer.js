import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import css from "./Drawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import Link from "next/link"
import {useRouter} from "next/router";

function Drawer(props){
    let router = useRouter();

    function renderLinks(links){
        return links.map((link, index)=>{
            return (
                <li key={index}>
                    <Link
                        href={link.to}
                    >
                        <a href="" onClick={props.onClose}>{link.label}</a>
                    </Link>
                </li>
            )
        })
    }

    function render() {

        const cls = [css.Drawer]

        if(!props.isOpen){
            cls.push(css.close)
        }

        const links = [
            {to: '/', label: router.locale === "Ru" ? 'Главная' : router.locale === "En" ? 'Main' : router.locale === "Fr" ? "Principale" : "", exact: true},
            {to: '/about', label: router.locale === "Ru" ? 'О нас' : router.locale === "En" ? 'About us' : router.locale === "Fr" ? "À propos de nous" : "", exact: true},
            {to: '/projects', label: router.locale === "Ru" ? 'Проекты' : router.locale === "En" ? 'Projects' : router.locale === "Fr" ? "Projet" : "", exact: true},
        ]


        return(
            <>
                <nav className={cls.join(" ")}>
                    <ul>
                        {renderLinks(links)}
                    </ul>
                </nav>
                {props.isOpen ? <Backdrop onClick={props.onClose}/> : null }
            </>
        )
    }
    return render();
}

export default Drawer