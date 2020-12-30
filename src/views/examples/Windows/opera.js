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
export default class WindowChrome extends React.Component{
render(){
    return(
        <div>
         

                         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <i className="fas fa-bell " />&nbsp;&nbsp;
                                 <span className="h5 font-weight-bold mb-0">
                                  .shop and rewstrauss.com 14.27
                           </span>
                         
                         
                                 <br />
                                 <span>Title</span>
                                 <br />
                                 <span>Message</span>
                               </div>
                               <Col className="col-auto">
                                 <div >
                                 <i className="fas fa-cog " /> &nbsp;&nbsp;
                           <i className="fas fa-times " />
                                </div>
                              </Col>
                            </Row>
                            <img src={require("assets/img/theme/team-4-800x800.jpg")}
                                    width='200px' height='150px' />
                           
                          </CardBody>
                        </Card>

      </div>
    )
}
}