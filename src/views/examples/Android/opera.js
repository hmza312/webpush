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
export default class AndroidOpera extends React.Component{
render(){
    return(
        <div>
         

                         <Card className="card-stats mb-4 mb-xl-0">
                           <CardBody>
                             <Row>
                               <div className="col">
                               <i className="fas fa-opera " />&nbsp;&nbsp;
                                 <span className="h5 font-weight-bold mb-0">
                                   Opera. shop and rewstrauss.com 14.27
                           </span>
                                 <br />
                                 <span>Title</span>
                                 <br />
                                 <span>Message</span>
                               </div>
                               <Col className="col-auto">
                                 <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                 <i className="fas fa-bell " />
                                </div>
                              </Col>
                            </Row>
                            <img src={require("assets/img/theme/team-4-800x800.jpg")}
                                    width='200px' height='150px' />
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card>

      </div>
    )
}
}