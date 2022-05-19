import styled from './login.module.css'
import { InputForm } from '../../components/form/input/Input'
import { ButtonForm } from '../../components/form/Button/ButtonForm'
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from '../../components/layout/footer/Footer'
import { useEffect, useState } from 'react'
import { servicesAuth } from '../../services/RegisterService'
import { authLogin } from '../../auth/authLogin'


export function Login() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const [data, setData] = useState({})

  useEffect(() => {
    const req = async () => {
      if (email && password) {
        let response = await authLogin(data)
        alert(response)
        if (response) {
          navigate('/main')
        }
      }
    }
    req()
  }, [data])

  const submit = (e) => {
    e.preventDefault()
    const data = { email, password }
    setData(data)
  }


  return (
    <div className={styled.area_all_login}>

      <h1>
        SorteiaAi
      </h1>
      <form onSubmit={submit}>

        <InputForm
          type="email"
          text="Email"
          placeholder='Digite seu email'
          value={email}
          setData={setEmail}
        />
        <InputForm
          type="password"
          text="Senha"
          placeholder='Digite sua senha'
          values={password}
          setData={setPassword}

        />

        <ButtonForm text="Fazer login" />
        <br />
        <p>
          Ainda não tem cadastro?
          <Link to='/register'>
            cadastre-se
          </Link>
        </p>
      </form>

      <Footer />
    </div>
  )
} 