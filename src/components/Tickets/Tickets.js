import { useState } from "react"
import { ButtonTicket } from "../ButtonTicket/ButtonTicket"
import styled from './tickets.module.css'
export function Tickets({ numbers }) {

const [selected, setSelected] = useState([{}])

  return (
    <div className={styled.areaTickets}>
      {
        numbers.map((element, index) => (
          <ButtonTicket
            key={index}
            number={element.number}
            status={1}
            selected={selected}
            setSelected={setSelected}
           
          />
          ))
      }
    </div>
  )
}