import styled from './behindInitial.module.css'
import { InitialText } from '../InitialText/InitialText'
export function BehindInitial({ children }) {
  return (
    <div className={styled.area_behind}>
      {children}
      <InitialText />
    </div>
  )
}