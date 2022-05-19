import styled from './areaaward.module.css'

import award from '../../images/award.png'


export function AreaAward() {

  return (
    <>
      <div className={styled.area_award}>
        <div className={styled.areaImageReward}>
          <img src={award} className={styled.imageAward}/>
        </div>
        <div className={styled.areaInformationAward}>
         <h2>
            Iphone 7 Plus 128 Gb
         </h2>

        <label>
          Valor do bilhete
        </label>
        <span>
          R$ 30,00
        </span>

        <label>
          Quantidade de bilhete
        </label>
        <span>
          R$ 30,00
        </span>

        <label>
          Valor do bilhetes vendidos
        </label>
        <span>
          R$ 30,00
        </span>

        </div>
      </div>
    </>
  )

}