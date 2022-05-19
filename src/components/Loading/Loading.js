import styled from './loading.module.css'
import spin from '../../images/spin.svg'


export function Loading({show}) {
  return (
    <div className={`${styled.setLoading} ${ show ? styled.show : styled.noShow }`}>
        <img src={spin} alt="carregando..." />
    </div>
  )
}