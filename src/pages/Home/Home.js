
import { CardInitial } from "../../components/CardInitial/CardInitial"
import { NavBar } from "../../components/layout/navbar/NavBar"
import { BehindInitial } from "../../components/BehindInitial/BehindInitial"
import { ButtonInitial } from "../../components/ButtonInitial/ButtonInitial"
import styled from './home.module.css'
import { Rules } from "../../components/Rules/Rules"
import {Footer} from '../../components/layout/footer/Footer'

export function Home() {
  return (
    <div className={styled.area_all}>


      <BehindInitial>
        <NavBar />
      </BehindInitial>
      <CardInitial />
      <Rules />
      <ButtonInitial
        text='Quero Participar'
        url='/register' 
        />

        <Footer/>
        
    </div>
  )
}