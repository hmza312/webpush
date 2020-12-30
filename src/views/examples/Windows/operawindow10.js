import React from "react";
import '../campaigns.css';
import { Bell } from 'tabler-icons-react';
// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
export default class WindowOpera10 extends React.Component{
render(){
    return(
        <div>
         

         <Card className="card-stats mb-4 mb-xl-0" style={{borderRadius:10,backgroundColor:'#696969',padding:1}}>
<CardBody>
  <Row>
    <div className="col">
      <Row>
        <Col lg='4' xl='1'>

        <img src={require("assets/img/theme/bell.png")}
                                    width='30px' height='30px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '30%'}}/>
          
        </Col>
        &nbsp;&nbsp;
        <Col lg='12' xl='10'>

          <span style={{fontSize:18,color:'white'}}>Title</span>      <br />
         
          <span style={{fontWeight:18,fontFamily:'Ariel',color:'white'}}>Message</span><br />
          <span className="h5 font-weight-bold mb-0">
          Opera Browser.  shop and rewstrauss.com
</span>
          
        </Col>
       <Col xl='7'></Col>
       <Col xl='5'>
        <button
                        className=" btn-icon-clipboard "
                        id="tooltip982655500"
                        type="button"
                        style={{ background: "lightgrey", border: 0, width: "100%",padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', }}
                      >
                      
                          <span style={{  fontSize: 16,color: "white" ,textAlign:'center'}}>Close&nbsp;&nbsp;</span>
                        
                      </button></Col>
      </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}