import React from 'react'
import {connect} from 'react-redux'

// 无状态组件一般用在UI组件中
const Todolist = (props)=>{
  const {inputValue,list,handerChange,handerClick,handerDelete} = props
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handerChange}/>
        <button onClick={handerClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index) => {
          return <li key={index} onClick={()=>{handerDelete(index)}}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}


const mapStateToProps = (state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handerChange(e){
      const action = {
        type:'change_input_value',
        value:e.target.value
      };
      dispatch(action);
    },
    handerClick(){
      const action ={
        type:'add_item',
      }
      dispatch(action);
    },
    handerDelete(index){
      console.log(index)
      const action ={
        type:'delete_item',
        index:index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist)

// connect做链接，Todolist组件与store链接
// mapStateToProps ： 将store内的数据映射到组件的props中
// mapDispatchToProps : 将store内的dispatch方法映射到组件内的props中
// Todolist ： 组件名