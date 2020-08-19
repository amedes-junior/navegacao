import React from 'react'
import TextCentral from '../components/TextoCentral'

export default props => {
  const r = props.route
  const numero = r
        && r.params
        && r.params.numero ? r.numero : 0
  return (
    <TextCentral corFundo='#9932cd'>
      Tela C - {numero}
    </TextCentral>
  )
}