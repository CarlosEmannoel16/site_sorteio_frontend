import styled from  './rules.module.css'

export function Rules(){
  return(
    <div className={styled.rule}>
      <h1>
        Regras
      </h1>

      <ul>
        <li>
          1 -  esta será a regra numero que ficará nesse campo
        </li>
        <li>
          2 -  ja esta será uma outra regra deste sorteio
        </li>
        <li>
          2 - Mas para vc ganher terá que seguir essa regra importante
        </li>
      </ul>
    </div>
  )
}