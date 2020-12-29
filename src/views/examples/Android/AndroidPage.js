import { Select } from 'antd';
import AndroidChrome from './chrome'
import React,{Component} from "react";
const { Option } = Select;

export default class Android extends React.Component{
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
  
            <Option value="ChromeonAndroid">Chrome on Android</Option>
            <Option value="FirefoxonAndroid">Firefox on Android</Option>
            <Option value="OperaonAndroid">Opera on Android</Option>
  
          </Select>
          <br/>
          <br/>
          { this.state.androidcategory==='ChromeonAndroid' ?
             <AndroidChrome /> :
            //  this.state.androidcategory==='FirefoxonAndroid' ?
            //  <Window />:
            //  this.state.androidcategory==='OperaonAndroid' ?
            //  <Mac />:
            
             null
          }
  
        </div>
        
      )
    }
  }
  