import React from 'react'
import {Link} from 'react-router-dom'

export default class RouterOne extends React.Component{
  render(){
   return (
     <div>
       <p>This is ROUTER ONE</p>
       <Link to="/two">跳转</Link>   
     </div>
   )
  }
}