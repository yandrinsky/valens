import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import css from "./Drawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import Link from "next/link"

class Drawer extends Component{

    renderLinks(links){
        return links.map((link, index)=>{
            return (
                <li key={index}>
                    <Link
                        href={link.to}
                        // to={link.to}
                        // exact={link.exact}
                        // activeClass={css.active}
                        onClick={this.props.onClose}
                    >
                        {link.label}

                    </Link>
                </li>
            )
        })
    }

    render() {

        const cls = [css.Drawer]

        if(!this.props.isOpen){
            cls.push(css.close)
        }

        const links = [
            // {to: '/', label: 'Главная', exact: true},
            {to: '/', label: 'Главная', exact: true},
            {to: '/about', label: 'О нас', exact: true},
            {to: '/projects', label: 'Проекты', exact: true},
        ]


        return(
            <>
                <nav className={cls.join(" ")}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {
                    this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null
                }

            </>

        )
    }
}

export default Drawer