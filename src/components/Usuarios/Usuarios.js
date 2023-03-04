import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

const Usuarios = () =>  {

  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then(resposta => resposta.json())
    .then(dados =>{
      const usuarios = dados.data.map(usuario=>({
        id: usuario.id,
        nome: usuario.first_name,
        sobrenome: usuario.last_name,
        email: usuario.email,
      }))
      setUsuarios(usuarios)
    })
  },[])

  const adicionarUsuario = usuario => {
    //const usuarios = [...this.state.usuarios, usuario]
    //this.setState({ usuarios: usuarios })
    setUsuarios(usuarioAtuais => [...usuarioAtuais, usuario])
  }

   return(
      <>
        <AdicionarUsuario adicionarUsuario={adicionarUsuario}/>       

        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
          />
        ))}
      </>
    )
  }


export default Usuarios;