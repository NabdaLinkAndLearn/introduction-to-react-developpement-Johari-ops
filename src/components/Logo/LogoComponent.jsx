import React from 'react'

export default function LogoComponent(props) {
  return (
    <a>
    <img src={props.logo} className={props.class ? `logo ${props.class}` : "logo"} alt={props.alt} />
    </a>
  )
}