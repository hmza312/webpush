
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
export default class MacChrome extends React.Component{
render(){
    return(
        <div>
         

         <Card className="card-stats mb-4 mb-xl-0" style={{borderRadius:10,backgroundColor:'lightgrey',padding:1}}>
<CardBody>
  <Row>
    <div className="col">
      <Row>
        <Col lg='4' xl='1'>

        <img src={require("assets/img/theme/safari.jpg")}
                                    width='20px' height='20px' style={{ margin: 0,
                                        position: 'absolute',
                                        top: '40%'}}/>
          
        </Col>
        <Col lg='12' xl='10'>

          <span style={{fontSize:18}}>Title</span>      <br />
          <span className="h5 font-weight-bold mb-0">
            shop and rewstrauss.com 14.27
</span>
          <br />
          <span style={{fontWeight:10,fontFamily:'Ariel'}}>Message</span>

        </Col>
      </Row>
    </div>
  </Row>

</CardBody>
</Card>      </div>
    )
}
}