import React from "react"
import style from "./header.module.css"

export default function Header() {
    return (
        <>
        <nav className={style.Header}>
            <div className={style.maxWidth}>
            <div className={style.content}>
                <img src="logo-dynamox.png" alt="logo Dynamox" />
            <div className={style.buttons}>
                <li><a href="">DynaPredict</a></li>
                <li><a href="">Sensores</a></li>
                <li><a href="">Contato</a></li>
            </div>
            </div>
            </div>
        </nav>
        </>
    )
}