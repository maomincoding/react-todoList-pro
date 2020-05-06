import React from 'react'
import {Link} from 'react-router-dom'

export default class RouterTwo extends React.Component{
  render(){
    return (
      <div>
        <p>This is ROUTER TWO</p>
        <Link to='/'>跳转</Link>   
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}