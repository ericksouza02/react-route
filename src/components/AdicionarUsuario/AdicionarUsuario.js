import React, { Component, useState } from 'react'

import './AdicionarUsuario.css'

/*const INITIAL_STATE = { 
  usuario: { nome: '', sobrenome: '', email: '' } 
}*/


const AdicionarUsuario = props => {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')

  

const  onSubmitHandler = event => {
    event.preventDefault()
   
    const usuario = {nome, sobrenome, email}

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setNome('')
        setSobrenome('')
        setEmail('')
        console.log(dados)
        props.adicionarUsuario(dados)
      })
  }

 
    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={e=>setNome(e.target.value)}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobrenome}
                onChange={e=>setSobrenome(e.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }


export default AdicionarUsuario;