import s from './Input.module.css'

export default function Input({
  id, 
  label,
  placeholder,
  type,
  register,
  errorMessage
}) {
  return (
    <div className={s.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input className={s.inputForm} type={type} id={id} placeholder={placeholder} {...register}/>
      <span className={s.errorMessage}>{errorMessage}</span>
    </div>
  )
}