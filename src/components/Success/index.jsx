﻿import {Link, useLocation} from "react-router-dom"
import {useEffect} from "react"

import "./style.css"

export default function Success() {
  const location = useLocation()

  const {name, cpf, title, date, seats} = location.state

  const formattedCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (
    regex,
    arg1,
    arg2,
    arg3,
    arg4
  ) => {
    return (`${arg1}.${arg2}.${arg3}-${arg4}`)
  })

  useEffect(() => {window.scrollTo({top: 0, behavior: 'smooth'})}, [])

  return (
    <section className="Success">
      <h2 className="description">Pedido feito com sucesso</h2>

      <ul className="data">
        <li>
          <h3 className="header">Filme e sessão</h3>
          <p>{title}</p>
          <p>{date}</p>
        </li>
        <li>
          <h3 className="header">Ingressos</h3>
          {seats.map(seat => <p key={seat}>{`Assento ${seat}`}</p>)}
        </li>
        <li>
          <h3 className="header">Comprador</h3>
          <p>{`Nome: ${name}`}</p>
          <p>{`CPF: ${formattedCpf}`}</p>
        </li>
      </ul>

      <Link className="button" to="/">Voltar pra Home</Link>
    </section>
  )
}