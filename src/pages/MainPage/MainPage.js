import { useEffect, useState } from 'react'
import { AreaAward } from '../../components/areaAward/AreaAward'
import { RaffleService } from '../../services/RaffleService'
import { NavBar } from '../../components/layout/navbar/NavBar'
import { Tickets } from '../../components/Tickets/Tickets'
import styled from './mainpage.module.css'
import { SatatusTickets } from '../../components/StatusTickets/StatusTickets'
import { useContext } from 'react'
import { UserContext } from '../../context/ContextUser'

export function MainPage() {

  const name = useContext(UserContext)

  const [numbers, setNumber] = useState([{}])

  useEffect(() => {
    const getNumber = async () => {
      let result = await RaffleService.getRaffleNumbers(100)
      if (result) {
        setNumber(result)
      }
      console.log(result)
    }
    getNumber()

  }, [])


  return (
    <>

      <NavBar />
      <h1 className={styled.titleAreaAward}>
        Sorteio em andamento 
       
      </h1>
      <div className={styled.areaAllAward}>
        <AreaAward />

        <Tickets
          numbers={numbers}
         
        />

        <div className={styled.informationTicket}>
          <div className={styled.statusTicket}>
            <SatatusTickets/>
          </div>

          <div className={styled.AreaPriceTicket}>
              <label className={styled.Textprice}>Total:</label>
              <label className={styled.Textprice}>R$ 30,00 </label> <br/>
              <label className={styled.textGoPayment}>Ir para pagamento</label>
             
          </div>
        </div>
      </div>

    </>
  )
}