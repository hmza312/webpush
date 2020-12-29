
import React from "react";
import './campaigns.css';
import { Lock, InfoSquare } from 'tabler-icons-react';
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

import Android from './Android/AndroidPage'
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Steps, message } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import ReactDOM from 'react-dom'
import { Edit ,Bell} from 'tabler-icons-react';
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Step } = Steps;
const steps = [
  {
    title: 'Campaign Details',
    content: 'First-content',
  },
  {
    title: 'Create Notification',
    content: 'Second-content',
  },
  {
    title: 'Summary',
    content: 'Last-content',
  },
];

class StartCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  next = () => {

    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {

    const current = this.state.current - 1;
    this.setState({ current });
  };
  render() {


    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">

                  <>
                    <Steps current={this.state.current}>
                      {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                    <br />
                    <div className="steps-content">
                      {
                        this.state.current === 0 ?
                          <CampaignDetails />
                          :
                          this.state.current === 1 ?
                            <CampaignNotification />
                            :
                            this.state.current === 2 ?
                              <Summary />
                              :
                              <div></div>

                      }</div>
                    <br />

                    <div className="steps-action">
                      {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={this.next}>
                          Continue
                        </Button>
                      )}
                      {this.state.current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                          Send
                        </Button>
                      )}
                      {this.state.current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={this.prev}>
                          Previous
                        </Button>
                      )}
                    </div>
                  </>
                </CardHeader>




                <CardBody>

                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default StartCampaign;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
var category = 'RegularCampaign';
var option = 'sendnow';
var show;
class CampaignDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      toggle: false
    }
  }
  RadioChanged() {
    const radio = (
      <div>

      </div>
    )
    ReactDOM.render(radio, document.getElementById('radio'));
  }

  SnowChanged() {
    if (category === 'RegularCampaign' && option === 'Schedule') {
      show = (
        <div>
          <h5>select date to Schedule</h5>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />

          </Space>
        </div>
      )
    }
    else if (category === 'FlashSaleCampaign' && option === 'Schedule') {

      show = (
        <div>
          <h5>select date to Schedule</h5>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />

          </Space>
          <h5>select Expiry date to Schedule</h5>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />

          </Space>
        </div>
      )
    }

    ReactDOM.render(show, document.getElementById('radio'));
  }
  onRadioChanged = (e) => {
    console.log('e.target', e.target.value)
    category = e.target.value;
    this.setState({
      toggle: this.state.toggle
    });
    console.log("radio", category)
  }

  onoptionChanged = (e) => {
    option = e.target.value;
    console.log("option", option)
    this.setState({
      toggle: !this.state.toggle
    });
  }


  render() {


    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Campaign Category
                            </CardTitle>
                        <br />
                        {/* <select>
                            <option>Regular Campaign</option>
                            <option disabled>Flash Sale Campaign</option>
                          </select>
                           */}
                        <Row >
                          {/* onChange={category=> this.setState({category})} */}
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"
                              value="RegularCampaign" onChange={this.onRadioChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;
  <label htmlFor="RegularCampaign">Regular Campaign</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"
                              value="FlashSaleCampaign" onChange={this.onRadioChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;
  <label htmlFor="FlashSaleCampaign">Flash Sale Campaign</label>
                          </Col>




                        </Row>                        </div>

                    </Row>
                  </CardBody>
                </Card>

                <br />

                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Sending Options
                            </CardTitle>
                        <br />
                        <Row>
                          <Col lg="12" xl="6">
                            <input type="radio" id="sendnow" name="sendnow" value="sendnow" onChange={this.onoptionChanged} onClick={this.RadioChanged} />
  &nbsp; &nbsp;<label htmlFor="sendnow">Send Now</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Schedule" name="sendnow" value="Schedule" onChange={this.onoptionChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;<label htmlFor="Schedule">Schedule</label>
                          </Col>

                        </Row>
                        <div id='radio'></div>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Subscribers Segment
                            </CardTitle>
                        <br />
                        <span className="h5 font-weight-bold mb-0">
                        </span>
                        <Select style={{ width: '100%' }} placeholder=" Segments you would like to send campaigns to" >

                          <Option value="1">All Subscribers</Option>
                          <Option value="2">Haven't bought in last 90 days</Option>
                          <Option value="3">Anonymous Subscripbers</Option>
                          <Option value="4">Testing Location Segment</Option>
                          <Option value="5">Mac Subscription</Option>
                          <Option value="6">Mac Subscription</Option>

                        </Select>
                      </div>

                    </Row>

                  </CardBody>
                </Card>


              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Advanced
                            </CardTitle>


                        <br />
                        <input type="checkbox" id="SmartDelivery" name="SmartDelivery" value="SmartDelivery" />
  &nbsp; &nbsp;<label for="SmartDelivery">Smart Delivery</label>
                        <h5>personalize the delivery time of your campaign  for each subscriber by sending the notification to them when they are most likely to be active.</h5>

                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", border: 0, width: "50%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <Lock
                              size={50}
                              strokeWidth={2.5}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Get In Touch</span>
                          </div>
                        </button>
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>

            </Row>
          </div>






        </Container>

        {/* </div> */}
      </>
    );
  }
}

class CampaignNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category: '',
  
    }
  }
  handleChange=(event) =>{
    console.log(event.target.value)
    this.setState({category: event.target.value});
  }
  
  render() {




    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <label>Title *</label>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Enter a Cachy Title" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <label>Message *</label>
                        <FormGroup className="mb-3">

                          <Input placeholder="Enter a Optional Title" type="textarea" />

                        </FormGroup>
                        <label>Should Be less then 500 charaters</label>   </div>
                      <br />

                    </Row>
                    <label>Primary Link *</label>
                    <FormGroup className="mb-3">

                      <Input placeholder="Enter Destinational URL" type="text" />

                    </FormGroup>
                    <label>Desktop Home Page</label>  <br />
                    <button
                      className=" btn-icon-clipboard "
                      id="tooltip982655500"
                      type="button"
                      style={{ background: "blue", border: 0, width: "100%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    >
                      <div>
                        {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                        <Lock
                          size={50}
                          strokeWidth={2.5}
                          color={'#ffffff'}
                        />
                        <span style={{ color: "white", fontWeight: 'bold' }}>Upgrade to Unlock</span>
                      </div>
                    </button>
                    <br />
                    <label>Mobile Home Page</label>
                    <br />
                    <button
                      className=" btn-icon-clipboard "
                      id="tooltip982655500"
                      type="button"
                      style={{ background: "blue", border: 0, width: "100%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    >
                      <div>
                        {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                        <Lock
                          size={50}
                          strokeWidth={2.5}
                          color={'#ffffff'}
                        />
                        <span style={{ color: "white", fontWeight: 'bold' }}>Upgrade to Unlock</span>
                      </div>
                    </button>
                    <label>Banner Image</label>

                    <br />
                    <Input placeholder="Choose Banner Image" type="file" />

                    <br />
                    <label>Logo</label>

                    <br />
                    <Input placeholder="Choose Logo" type="file" />

                  </CardBody>
                </Card>

              </Col>
              {/* <Col lg='12' xl='4'>
                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Android
                            </CardTitle>
                        <br />

                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">

                                <span className="h5 font-weight-bold mb-0">
                                  Chrome shop and rewstrauss.com 14.27
                          </span>
                                <br />
                                <span>Title</span>
                                <br />
                                <span>Message</span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card>

                      </div>
                    </Row>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">

                        <br />
                        <span className="h5 font-weight-bold mb-0"> Mac OS
                        </span>
                        <Select style={{ width: '100%' }} placeholder=" Select Mac OS" >

                          <Option>Light</Option>


                        </Select>
                        <br /><br /><br />
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <Row>
                                  <Col lg='4' xl='4'>

                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                      <i className="fas fa-chart-bar" />
                                    </div>
                                  </Col>
                                  <Col lg='12' xl='8'>

                                    <span>Title</span>      <br />
                                    <span className="h5 font-weight-bold mb-0">
                                      shop and rewstrauss.com 14.27
                          </span>
                                    <br />
                                    <span>Message</span>

                                  </Col>
                                </Row>
                              </div>
                            </Row>

                          </CardBody>
                        </Card>

                      </div>

                    </Row>

                  </CardBody>
                </Card>



              </Col> */}
              <Col lg="12" xl="6">
                {/* <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Window 10
                            </CardTitle>
                        <br />

                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <Row>
                                  <Col lg='4' xl='4'>

                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                      <i className="fas fa-chart-bar" />
                                    </div>
                                  </Col>
                                  <Col lg='12' xl='8'>

                                    <span>Title</span>
                                    <br />
                                    <span>Message</span>
                                    <br />
                                    <span className="h5 font-weight-bold mb-0">
                                      shop.rewstrauss.com via microsoft
                          </span>

                                  </Col>
                                </Row>
                              </div>

                            </Row>

                          </CardBody>
                        </Card>

                      </div>


                    </Row>

                  </CardBody>
                </Card> */}
                {/* <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Window 8 and older
                            </CardTitle>
                        <br />

                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">

                                <span className="h5 font-weight-bold mb-0">
                                  Chrome shop and rewstrauss.com 2m
                          </span>
                                <br />
                                <span>Title</span>
                                <br />
                                <span>Message</span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card> */}
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        
                        <span
                          style={{fontSize:"18px",paddingTop:10,fontWeight:'bold'}}
                        >
                         
                          Preview
                            </span>
                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", float: 'right', border: 0, width: "50%", padding: 5, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <InfoSquare
                              size={50}
                              strokeWidth={4}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Test Notification</span>
                          </div>
                        </button>

                        <br />
                        <br />
                        <br />
                        <div >
                          {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                          <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window" onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac" onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                          {this.state.category==='Android' ?
           <Android /> :
           this.state.category==='Window' ?
           <Window />:
           this.state.category==='Mac' ?
           <Mac />:
           null
        }
                        </div>
                        <br />
                        {/* <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">

                                <span className="h5 font-weight-bold mb-0">
                                  Chrome shop and rewstrauss.com 2m
                          </span>
                                <br />
                                <span>Title</span>
                                <br />
                                <span>Message</span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card> */}

<div id='notification'></div>
                      </div>


                    </Row>

                  </CardBody>
                </Card>

              </Col>

            </Row>
          </div>






        </Container>
        {/* </div> */}
      </>
    );
  }
}
class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category: 'FlashSaleCampaign',
      option: 'Schedule'
    }
  }




  render() {




    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Campaign Summary
                          <Edit
                            size={48}
                            strokeWidth={2}
                            color={'black'}
                          />
                        </CardTitle>
                        <br />
                        <span className="h5 font-weight-bold mb-0"> Type of Campaign</span><br />
                        <span style={{ background: 'lightgrey' }} className="h5 font-weight-bold mb-0"> Regular Campaign</span>
                        <br />
                        <br />
                        <span className="h5 font-weight-bold mb-0"> Sending To</span><br />
                        <span style={{ background: 'lightgrey' }} className="h5 font-weight-bold mb-0"> All Subscriber(Subscriber Count 97)</span>
                        <br />
                        <br />
                        <span className="h5 font-weight-bold mb-0"> Start (Pakistan Standard Time</span><br />
                        <span style={{ background: 'lightgrey' }} className="h5 font-weight-bold mb-0"> Immediately</span>

                      </div>

                    </Row>
                  </CardBody>
                </Card>

                <br />



              </Col>
              <Col lg="12" xl="8">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Preview
                            </CardTitle>


                        <br />
                        <div >
                          {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                          <Row>
                            <Col lg="6" xl="3">
                              <input type="radio" id="sendnow" name="sendnow" value="sendnow" onChange={this.onoptionChanged} onClick={this.RadioChanged} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="6" xl="3">
                              <input type="radio" id="Schedule" name="sendnow" value="Schedule" onChange={this.onoptionChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;<label htmlFor="Window8">Window 8 </label>
                            </Col>
                            <Col lg="6" xl="3">
                              <input type="radio" id="Schedule" name="sendnow" value="Schedule" onChange={this.onoptionChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;<label htmlFor="Window10">Window 10 </label>
                            </Col>
                            <Col lg="6" xl="3">
                              <input type="radio" id="Schedule" name="sendnow" value="Schedule" onChange={this.onoptionChanged} onClick={this.SnowChanged} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div>   <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">

                                <span className="h5 font-weight-bold mb-0">
                                  Chrome shop and rewstrauss.com 2m
                          </span>
                                <br />
                                <span>Title</span>
                                <br />
                                <span>Message</span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />Site Setting
                        </span>{" "}

                            </p>
                          </CardBody>
                        </Card>

                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>

            </Row>
          </div>






        </Container>
        {/* </div> */}
      </>
    );
  }
}  
var androidchro;
class Mac extends React.Component{
  render(){
    return(
      <div>
      <Select style={{ width: '100%' }} placeholder="Select Device For Preview"  >

        <Option value="1">Chrome on Mac OS</Option>
        <Option value="2">Firefox on Mac OS</Option>
        <Option value="3">Opera on Mac OS</Option>
        <Option value="4">Safari on Mac OS</Option>
      </Select>
    </div>
  )
  }
}
class Window extends React.Component{
  render(){
    return(
      <div>
      <Select style={{ width: '100%' }} placeholder="Select Device For Preview" >

        <Option value="0">Chrome on Windows</Option>
        <Option value="1">Firefox on Windows</Option>
        <Option value="2">Opera on Windows</Option>
        <Option value="3">Chrome on Windows 10</Option>
        <Option value="4">Firefox on Windows 10</Option>
        <Option value="5">Opera on Windows 10</Option>
        <Option value="6">Edge on Windows 10</Option>
      </Select>
    </div>
)
  }
}