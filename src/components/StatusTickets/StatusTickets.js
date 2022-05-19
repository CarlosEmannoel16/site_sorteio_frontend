import styled from './statustickets.module.css'

export function SatatusTickets() {

  return (
    <div>
      <div className={styled.row_representation_ticket}>
      <div className={`${styled.representation_ticket} ${styled.free}`}> </div>
        <label>Livre</label>
      </div>

      <div className={`${styled.row_representation_ticket}  `}>
        <div className={`${styled.representation_ticket} ${styled.unavailable}`}> </div>
        <label>Indisponível</label>
      </div>
      <div className={`${styled.row_representation_ticket}  `}>
        <div className={`${styled.representation_ticket} ${styled.selected}`}> </div>
        <label>Indisponível</label>
      </div>

    </div>
  )

}