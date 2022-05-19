import { useEffect, useState } from 'react'
import { MessageBox } from '../../components/messageBox/MessageBox'
import styled from './register.module.css'
import { useNavigate } from 'react-router-dom'
import { servicesAuth } from '../../services/RegisterService'
import { Loading } from '../../components/Loading/Loading'
export function Register() {

let navegate = useNavigate()

  let inputs = {
    name: false,
    email: false,
    password1: false,
    password2: false,
    submit: false,
    errorMessage: false
  }
  const [load, setLoading] = useState(false)
  const [hour, setHour] = useState()
  const [inputTrasition, setInputTransition] = useState(inputs)

  const [data, setData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    lastname: '',
    errorMessage: ''
  })




  const getHour = () => {
    const date = new Date()
    let hour = `${date.getHours()}: ${date.getMinutes()}`
    setHour(hour)
  }

  useEffect(() => {
    setTimeout(() => {
      getHour()
      setInputTransition({ ...inputTrasition, name: true })
    }, 1000)

  }, [])



  const prepareData = () => {
    let dataOk = data
    delete dataOk.lastname
    return dataOk
  }

  const submit = async () => {
    setLoading(true)
    let response = await servicesAuth.register(prepareData())
    if (response.status) {
      setInputTransition(inputs)
      setInputTransition({ ...inputTrasition, errorMessage: false })
      setLoading(false)
      navegate('/login')
    } else {
      setLoading(false)
      setInputTransition({ ...inputTrasition, errorMessage: true })
      setData({ ...data, errorMessage: response.errorMessage })

    }
  }

  const showNextMessage = (value) => {
    switch (value) {
      case 'email':
        getHour()
        setInputTransition({ ...inputTrasition, email: true })
        break;
      case 'password1':
        getHour()
        setInputTransition({ ...inputTrasition, password1: true })
        break;

      case 'password2':
        getHour()
        setInputTransition({ ...inputTrasition, password2: true })
        break;
      case 'submit':
        getHour()
        setInputTransition({ ...inputTrasition, submit: true })
        break;

      default:
        break;
    }
  }




  return (

    <>

      <Loading 
        show={load}
      />
      <div className={styled.area_all}>

        <h1>Cadastre-se</h1>
        {
          inputTrasition.name &&
          (
            <>
              <MessageBox
                side='left'
                isInput={false}
                time={hour}
              >
                <p>Olá, Tudo bem? </p>

              </MessageBox>

              <MessageBox
                side='left'
                isInput={false}
                time={hour}
              >

                <p>Para iniciarmos seu cadastro vou precisar de alguns de seus dados</p>

              </MessageBox>
              <MessageBox
                side='right'
                type='text'
                isInput={true}
                time={hour}
                placeholder='Digite seu nome completo'
                showNextMessage={showNextMessage}
                next='email'
                name='name'
                setData={setData}
                data={data}
                inputTrasition={inputTrasition}
              />
            </>
          )
        }

        {
          inputTrasition.email && (
            <>
              <MessageBox
                side='left'
                time={hour}
                isInput={false}
              >
                <p>{`Ok ${data.lastname ? data.lastname : ' '}`}.
                  <br /> Agora vou precisar de seu e-mail :) </p>

              </MessageBox>

              <MessageBox
                side='right'
                type='text'
                isInput={true}
                time={hour}
                placeholder='Digite seu e-mail'
                showNextMessage={showNextMessage}
                next='password1'
                name='email'
                setData={setData}
                data={data}
                inputTrasition={inputTrasition}
              />
            </>
          )
        }

        {
          inputTrasition.password1 && (
            <>
              <MessageBox
                side='left'
                time={hour}
                isInput={false}
              >
                <p>
                  Tá quse lá! <br />
                  Agora crie uma senha de acesso
                </p>
              </MessageBox>

              <MessageBox
                side='right'
                type='password'
                isInput={true}
                time={hour}
                placeholder='Defina uma senha'
                showNextMessage={showNextMessage}
                next='password2'
                name='password1'
                setData={setData}
                data={data}
                inputTrasition={inputTrasition}
              />

            </>

          )
        }

        {
          inputTrasition.password2 && (
            <>
              <MessageBox
                side='left'
                time={hour}
                isInput={false}
              >

                <p>
                  Digite novamente sua senha para validarmos os seus dados

                </p>

              </MessageBox>


              <MessageBox
                side='right'
                type='password'
                isInput={true}
                time={hour}
                placeholder='Repetir senha'
                showNextMessage={showNextMessage}
                next='submit'
                name='password2'
                setData={setData}
                data={data}
                inputTrasition={inputTrasition}

              />

            </>

          )
        }

        {
          inputTrasition.errorMessage && (
            <>
              <MessageBox
                side='left'
                isInput={false}
                name='error'

              >
                <p>
                  Ops!, não foi possível concluir seu cadastro.Revise os seus dados e tente novamente. <br />

                  {data.errorMessage}
                </p>
              </MessageBox>
            </>

          )
        }

        {
          inputTrasition.submit && (
            <>
              <MessageBox
                side='left'
                isInput={false}
                name='submit'
              >
                <button className={styled.submitData} onClick={submit}>
                  Enviar Dados
                </button>
              </MessageBox>
            </>

          )
        }

      </div >
    </>
  )
}