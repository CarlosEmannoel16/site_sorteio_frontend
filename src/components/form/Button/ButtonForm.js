
import styled from './buttonform.module.css'
export function ButtonForm({text}) {
  return (
    <button  className={styled.buttonForm}
    type='submit' >
          {
            text
          }
    </button>
  )
}