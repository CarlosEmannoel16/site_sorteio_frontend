import { useEffect, useState } from 'react'
import styled from './buttonticket.module.css'

export function ButtonTicket({ number, status, selected, setSelected }) {

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (status === 1) {
      setActive(true)
    }
  }, [])


  const checkButton = (e) => {
    e.preventDefault()
    if (status === 1) {
      if (active === true) {
        let numbers = selected
        numbers.push({ number })
        setSelected(numbers)
      } else {
        let numbers = selected.filter(item => {
          if (item.number !== number) {
            return item
          }
        });

        setSelected(numbers)


      }
      setActive(!active)
    }
  }

  return (
    <>
      {
        status === 1 &&
        <button
          className={
            `${styled.buttonTicket} 
             ${active ? styled.free : styled.selected}
           `}
          onClick={checkButton}
        >
          {number}

        </button>
      }
      {
        status === 2 &&
        <button
          disabled
          className={
            `${styled.buttonTicket} 
             ${styled.unavailable}
           `}>
          {number}
        </button>
      }



    </>
  )
}