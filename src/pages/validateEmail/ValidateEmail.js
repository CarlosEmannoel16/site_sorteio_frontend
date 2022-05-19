import styled from './validateemail.module.css'

import { InputForm } from '../../components/form/input/Input'

export function ValidateEmail(){
  return (
    <div className={styled.area_validate}>
    <label>
        Digite o código que foi enviado ao seu e-mail
    </label>  
      <input type='text' name="codVAlidate" />
      
    </div>
  )
}