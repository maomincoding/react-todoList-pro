import React from 'react'
import {Link} from 'react-router-dom'

export default class RouterOne extends React.Component{
  render(){
   return (
     <div>
       <p>This is ROUTER ONE</p>
       {/* <Link  to={{ pathname: '/two/', state:{name: 1}}}>跳转</Link> */}
       <Link to="/two/1">跳转</Link>
     </div>
   )
  }
}