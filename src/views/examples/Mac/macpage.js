import { Select } from 'antd';

import MacChrome from './chrome'
import React,{Component} from "react";
const { Option } = Select;

export default class Mac extends React.Component{
    constructor(props){
      super(props)
      this.state={
        androidcategory:null
      }
    } 
     handleChangeANDROID=  (value) =>{
    //      var a=await event.target.value
    //   console.log(a)
      this.setState({androidcategory:value});
    console.log(`selected ${value}`);
    }
    render(){
      return(
        <div>
          <Select style={{ width: '100%' }} placeholder="Select Device For Preview" onChange={this.handleChangeANDROID} >
          <Option value="1">Chrome on Mac OS</Option>
          <Option value="2">Firefox on Mac OS</Option>
          <Option value="3">Opera on Mac OS</Option>
          <Option value="SafarionMacOS">Safari on Mac OS</Option>
  
          </Select>
          <br/>
          <br/>
          { this.state.androidcategory==='SafarionMacOS' ?
             <MacChrome /> :
            
            
             null
          }
  
        </div>
        
      )
    }
  }
  