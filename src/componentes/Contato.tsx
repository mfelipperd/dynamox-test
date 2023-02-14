import React from "react";
import style from "./contato.module.css";

export default function Contact() {
    return (
        <>
        <div className={style.footer} id="contato">
            <div className={style.maxWidth}>
                <div className={style.content}>
                    <div className={style.title}>
                    Ficou com dúvida? <br />Nós entramos em contato com você
                    </div>
                    <div className={style.inputs}>
                        <input type="text" placeholder="Como gostaria de ser chamado?" />
                        <input type="text" placeholder="Em qual empresa você trabalha?" />
                        <input type="email" placeholder="Digite aqui seu email" />
                        <input type="tel" placeholder="Qual o seu telefone?" />
                    </div>
                    <button>ENVIAR</button>
                </div>
            </div>
        </div>
            
        </>
    )
}