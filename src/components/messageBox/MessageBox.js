
import styled from './messagebox.module.css'
import { VscChevronDown } from "react-icons/vsc";
import { useEffect, useState } from 'react';
import validator from 'validator'


export function MessageBox(
  { side,
    time,
    name,
    type,
    isInput,
    placeholder,
    showNextMessage,
    next,
    setData,
    data,
    inputTrasition,
    children
  }) {


  useEffect(() => {
    isInput ? setShowBtn(false) : setShowBtn(false)
  }, [])

  const [showBtn, setShowBtn] = useState()
  const [desabledInput, setDesabledIput] = useState(false)


  const handlerNext = () => {
    showNextMessage(next)
    setShowBtn(false)

    if (name == 'name') {
      let fullName = data.name

      if (fullName.split(' ')[0].length < 10) {
        let lastname = fullName.split(' ')[0]
        setData({ ...data, lastname })
      } else {
        let lastname = `${fullName.substring(0, 9)}...`
        setData({ ...data, lastname })
      }
    }

  }


  const handlerData = (e) => {

    switch (name) {
      case 'name':

        let fullName = e.target.value
        setData({ ...data, name: fullName })
        if (inputTrasition.email === false) {
          setShowBtn(true)
        } else {
          setShowBtn(false)
        }
        break;
      case 'email':
        if (validator.isEmail(e.target.value)) {
          if (inputTrasition.password1 === true) {
            setShowBtn(false)
          } else {
            setShowBtn(true)
          }

          setData({ ...data, email: e.target.value })
        } else {
          setShowBtn(false)
        }
        break

      case 'password1':
        setData({ ...data, password1: e.target.value })
        if ((data.password1 !== ' ' || undefined) && inputTrasition.password2 === false) {
          setShowBtn(true)
        } else {
          setShowBtn(false)
        }
        break

      case 'password2':
        if (e.target.value === data.password1) {
          setData({ ...data, password2: e.target.value })
          setShowBtn(true)
        } else {
          setShowBtn(false)
        }

        break
      default:
        break;
    }


  }


  return (

    <div>
      <div
        className={`${styled.body_message} ${styled[side]} `} >
        {
          isInput ?
            (
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handlerData}
                disabled={desabledInput}
              />)
            :
            children
        }


        <span>
          {
            time
          }
        </span>

      </div>

      {
        showBtn && (
          <div className={styled.btnNext} onClick={handlerNext}>
            <VscChevronDown />
          </div>
        )
      }

    </div>

  )
}