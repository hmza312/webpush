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
export default class Edge extends React.Component{
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
          <span className="h6  font-weight-bold mb-0">
          shop and rewstrauss.com .via Microsift Edge
</span>
          
        </Col>
      
      </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}