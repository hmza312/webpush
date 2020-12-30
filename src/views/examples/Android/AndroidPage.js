import { Select } from 'antd';
import AndroidChrome from './chrome'
import AndroidFirefox from './firefox'
import AndroidOpera from './opera'
import React,{Component} from "react";
const { Option } = Select;

export default class Android extends React.Component{
    constructor(props){
      super(props)
      this.state={
        androidcategory:'ChromeonAndroid'
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
             this.state.androidcategory==='FirefoxonAndroid' ?
             <AndroidFirefox />:
             this.state.androidcategory==='OperaonAndroid' ?
             <AndroidOpera />:
            
             null
          }
  
        </div>
        
      )
    }
  }
  