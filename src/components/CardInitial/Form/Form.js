import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from './formInitial.module.css'
import { RegisterServices } from '../../../services/RegisterService'

export function FormInitial() {

  const navegate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const requestData = async (data) => {
    await RegisterServices.register(data)
  }

  const submit = (e) => {
    e.preventDefault()
    if (name && email) {
      const data = { name, email }
      requestData(data).then((data) => {
        navegate('/validation-email')
      })
    }



  }
  return (
    <>
      <form className={styled.form} onSubmit={submit}>
        <input className={styled.input} type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
        <input className={styled.input} type="email" placeholder="Digite seu melhor email" onChange={e => setEmail(e.target.value)} />
        <button className={styled.button} type='submit'> COMEÇAR A PARTICIPAR </button>
      </form>
    </>
  )

}