import styled from './input.module.css'
export function InputForm({ type, text, placeholder, value, setData }) {



  return (
    <div className={styled.areaInput}>
      
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e)=> setData(e.target.value)}
      
      />
    </div>
  )
}