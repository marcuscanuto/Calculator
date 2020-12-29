import React from 'react'
import './Button.css'

export default props =>{

    let classes = 'button '
    classes +=  props.operation ? 'operation' : ''
    classes +=  props.double ? 'double' : ''
    classes +=  props.triple ? 'triple' : ''
    return (
        // OBS DENTRO DE UMA TEMPLATE STRING USA-SE O DOLAR E CHAVES PARA INTERPOLAR UMA VARIÁVEL.
        // a primeira classe vai ser aplicada sempre independente de qualquer regra,mas as outras não. 
        <button 
        onClick ={e => props.click  && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>

    )
}
