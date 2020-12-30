import { Select } from 'antd';
import WindowChrome from './chrome'

import WindowOpera from './opera'
import React,{Component} from "react";
const { Option } = Select;

export default class Mac extends React.Component {
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

    render() {
      return (
       
                <div>
                  <Select style={{ width: '100%' }} placeholder="Select Device For Preview" onChange={this.handleChangeANDROID}  >
          
                    <Option value="ChromeonWindows">Chrome on Windows</Option>
                    <Option value="1">Firefox on Windows</Option>
                    <Option value="OperaonWindows">Opera on Windows</Option>
                    <Option value="3">Chrome on Windows 10</Option>
                    <Option value="4">Firefox on Windows 10</Option>
                    <Option value="5">Opera on Windows 10</Option>
                    <Option value="6">Edge on Windows 10</Option>
                  </Select>
                  <br/>
          <br/>
          { this.state.androidcategory==='ChromeonWindows' ?
             <WindowChrome /> :
             this.state.androidcategory==='FirefoxonAndroid' ?
             <br />:
             this.state.androidcategory==='OperaonWindows' ?
             <WindowOpera />:
            
             null
          }
  
                </div>
              )
            }
          }
      