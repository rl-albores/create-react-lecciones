/* Ejemplo de componente de tipo clase que dsipone de los
metodos de ciclo de vida de un componente */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('WillMoun: Antes del montaje del componente')
  }

  componentDidMount() {
    console.log(
      'DidMount: Justo al acabar el montaje el componente, antes de renderizarlo'
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps: Si va a recibir nuevas props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true/false -> controla si el componente debe o no actualizarse
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate: Justo antes de actualizarse')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate: Justo después de actualizarse')
  }

  componentWillUnmount() {
    console.log('WillUnmount: Justo antes de desaparecer')
  }

  render() {
    return <div></div>
  }
}

LifeCycleExample.propTypes = {}

export default LifeCycleExample
