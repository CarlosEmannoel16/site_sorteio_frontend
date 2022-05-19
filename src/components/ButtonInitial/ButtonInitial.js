import { Link } from 'react-router-dom'
import styled from './buttonInitial.module.css'
import { useNavigate } from 'react-router-dom'

export function ButtonInitial({ text, url }) {


  const navegate = useNavigate()
  const handlerClick = () => {
      navegate(url)
  }

  return (

    <button className={styled.ButtonInitial} onClick={handlerClick}>
      {text}
    </button>

  )
}