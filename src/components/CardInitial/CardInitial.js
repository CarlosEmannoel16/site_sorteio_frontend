import styled from './CardInitial.module.css'
import Image from '../../images/premio.jpg'
export function CardInitial() {

  return (
    <div className={styled.AreaCard}>
    
      <div className={styled.areaImage}>
        <div className={styled.gradient}></div>
         <img src={Image} />
      </div>

      <div className={styled.title_card}>
        <h1>
          Playstation 5
        </h1>
      </div>

      <div className={styled.description_card}>
        <p>
          Aqui ficará a descrição do prêmio
        </p>
      </div>

    </div>
  )
}