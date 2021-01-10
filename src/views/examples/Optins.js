/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Plus } from 'tabler-icons-react';
// reactstrap components
import { Button } from 'antd';
import {

  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
import { Tabs } from 'antd';
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Switch } from 'antd';
import { Upload } from 'antd';

import ImgCrop from 'antd-img-crop';
import { Select, Checkbox } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;
var fileList = ''
class Optins extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      banner: '',
      category: 'Desktop',
      title: 'Notification title here',
      message: 'Notification message here',
      allow: 'Allow',
      background: '#2E5FDC',
      color: '#000',
      later: 'Later',
      check: 'false',
      logo: "data:image/png;base64,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"

    }
  }
  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  onChangelogo = ({ fileList: newFileList }) => {
    console.log(newFileList)
    fileList = newFileList
    if (newFileList[0].status === 'done') {
      this.setState({ banner: URL.createObjectURL(newFileList[0].originFileObj) })
      console.log('bannert', this.state.banner)
    }
    else {
      console.log('hello')
    }
  };
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });

  }
  onChangecheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
    this.setState({ check: e.target.checked })
  }
  onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  render() {

    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Browser Prompt" key="1">
              <Row>
                <Col lg="24" xl="12" >
                  <Card className="" >
                    <CardHeader className=" bg-transparent">
                      Opt-in timings
                  <p>set a timer according to when you want the browser prompt to be shown</p>
                    </CardHeader>

                    <CardBody >
                      <Row>
                        <Col xl='6' lg='12'>
                          <h4>Desktop</h4>
                          <span >Show Prompt after &nbsp;
                      <Select defaultValue="5" style={{ width: 120 }} onChange={this.handleReminder}>
                              <Option value="5">5</Option>
                              <Option value="10">10</Option>

                              <Option value="15">15</Option>
                              <Option value="20">20</Option>
                              <Option value="25">25</Option>
                              <Option value="30">30</Option>
                              <Option value="35">35</Option>
                              <Option value="40">40</Option>
                              <Option value="45">45</Option>
                              <Option value="50">50</Option>
                              <Option value="55">55</Option>
                              <Option value="60">60</Option>
                              <Option value="never">never</Option>

                            </Select> &nbsp;second</span>
                          <br />

                          <h4>Mobile</h4>
                          <span >Show Prompt after &nbsp;
                      <Select defaultValue="5" style={{ width: 120 }} onChange={this.handleReminder}>
                              <Option value="5">5</Option>
                              <Option value="10">10</Option>

                              <Option value="15">15</Option>
                              <Option value="20">20</Option>
                              <Option value="25">25</Option>
                              <Option value="30">30</Option>
                              <Option value="35">35</Option>
                              <Option value="40">40</Option>
                              <Option value="45">45</Option>
                              <Option value="50">50</Option>
                              <Option value="55">55</Option>
                              <Option value="60">60</Option>
                              <Option value="never">never</Option>

                            </Select> &nbsp;second</span>
                          <br />
                          <h2>Browser Prompt Overlay</h2>
                          <Checkbox onChange={this.onChangecheck}>Enable overlay</Checkbox>
                          <span style={{ color: 'blue' }}><i class="fas fa-eye" style={{ color: 'blue' }}></i>
&nbsp;View Preview</span>
                          <br />
                          <p>Use this overlay to show attractive message to your visitor and urge them to subscribe</p>
                          {this.state.check === true ?
                            <div>
                              <p>Write a custom message for your overlay with offers and brands promotions to increase optins.</p>
                              <label>Title</label>
                              <FormGroup className="mb-3">


                                <Input placeholder="Enter Title" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />

                              </FormGroup>
                              <label>Message </label>
                              <FormGroup className="mb-3">

                                <Input placeholder="Enter Description" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                              </FormGroup>
                            </div>

                            :
                            <div></div>}
                        </Col>
                        <Col xl='6' lg='12'  >
                          <img src={require('../../assets/img/image.PNG')} />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Custom Prompt" key="2">
              <Row>
                <Col lg="24" xl="12" >
                  <Card className="" >
                    <CardHeader className=" bg-transparent">
                      Opt in details
                                  <p>Customize the opt-in that is shown to your store visitors </p>
                    </CardHeader>

                    <CardBody >
                      <Row>
                        <Col xl='6' lg='12'>
                          <div className="col">
                            <label>Store Logo</label>
                            <br />
                            <ImgCrop rotate>
                              <Upload

                                listType="picture-card"
                                fileList={fileList}
                                onChange={this.onChangelogo}
                                onPreview={this.onPreview}
                              >
                                {fileList.length < 1 && '+ Upload'}
                              </Upload>
                            </ImgCrop>

                            <label>Title</label>
                            <FormGroup className="mb-3">


                              <Input placeholder="Enter Title" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />

                            </FormGroup>
                            <label>Description </label>
                            <FormGroup className="mb-3">

                              <Input placeholder="Enter Description" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                            </FormGroup>

                            <Card className="" >
                              <CardHeader className=" bg-transparent">
                                Allow Button  </CardHeader>

                              <CardBody >
                                <label>Text</label><label style={{ color: 'red' }}>*</label>
                                <FormGroup className="mb-3">


                                  <Input placeholder="Enter Title" type="text" name='allow' onChange={(e) => this.setState({ allow: e.target.value })} />

                                </FormGroup>
                                <Row>
                                  <Col xl='6'>
                                    <label>Background Color </label>
                                    <FormGroup className="mb-1">

                                      <Input placeholder="Enter Background Color" type="text" name='background' onChange={(e) => this.setState({ background: e.target.value })} />
                                    </FormGroup>
                                  </Col>
                                  <Col xl='6'>
                                    <FormGroup className="mb-1">
                                      <label> Color </label>
                                      <Input placeholder="Enter Color" type="text" name='color' onChange={(e) => this.setState({ color: e.target.value })} />
                                    </FormGroup>
                                  </Col>
                                </Row>


                              </CardBody>
                            </Card>
                            <br />
                            <Card className="" >
                              <CardHeader className=" bg-transparent">
                                Later Button  </CardHeader>

                              <CardBody >
                                <label>Text</label><label style={{ color: 'red' }}>*</label>
                                <FormGroup className="mb-3">


                                  <Input placeholder="Enter Title" type="text" name='later' onChange={(e) => this.setState({ later: e.target.value })} />

                                </FormGroup>



                              </CardBody>
                            </Card>
                          </div>

                        </Col>
                        <Col xl='6' lg='12'  >
                          <Card className="card-stats mb-4 mb-xl-0 card">
                            <CardHeader style={{ color: 'black' }}>
                              Preview
                 </CardHeader>
                            <CardBody  >
                              <Row>
                                <Col lg="12" xl="6">
                                  <input type="radio" id="Desktop" name="sendnow" value="Desktop" checked={this.state.category === "Desktop"} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Desktop">Desktop</label></Col>
                                <Col lg="12" xl="6">
                                  <input type="radio" id="Mobile" name="sendnow" value="Mobile" checked={this.state.category === "Mobile"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mobile">Mobile </label>
                                </Col>


                              </Row>
                              {this.state.category === 'Desktop' ?

                                <Card className="card-stats mb-4 mb-xl-0" >
                                  <CardBody>
                                    <Row>

                                      <div>
                                        <Row>

                                          <div>

                                          </div>
                                          <Col lg='4' xl='1'>

                                            <img src={this.state.logo}
                                              width='30px' height='30px' style={{
                                                margin: 0,
                                                position: 'absolute',
                                                top: '30%'
                                              }} />

                                          </Col>
        &nbsp;&nbsp;
        <Col lg='12' xl='10'>

                                            <span style={{
                                              color: '#000',
                                              fontSize: '16px',
                                              maxHeight: '2.3rem',
                                              lineHeight: '1.225',
                                              overflow: 'hidden',
                                              fontFamily: 'Roboto,sans-serif'
                                            }}>{this.state.title}</span>      <br />

                                            <span style={{
                                              color: '#000',
                                              fontSize: '16px',
                                              maxHeight: '4.6rem',
                                              lineHeight: '1.225',
                                              overflow: 'hidden',
                                              fontFamily: 'Roboto,sans-serif'
                                            }}>{this.state.message}</span><br />


                                          </Col>

                                          <Col>
                                          </Col>
                                        </Row>
                                        <br />
                                        <br />

                                      </div>
                                    </Row>
                                    {
                                      this.state.allow === '' && this.state.background === '' ?
                                        <Button style={{ backgroundColor: '2E5FDC', color: this.state.color, float: 'right' }} >

                                          Allow
                   </Button> :
                                        this.state.allow === '' && this.state.background !== '' ?

                                          <Button style={{ backgroundColor: this.state.background, color: this.state.color, float: 'right' }} >

                                            Allow
                   </Button>
                                          :
                                          this.state.allow !== '' && this.state.background === '' ?
                                            <Button style={{ backgroundColor: "#2E5FDC", color: this.state.color, float: 'right' }} >

                                              {this.state.allow}
                                            </Button> :
                                            <Button style={{ backgroundColor: this.state.background, color: this.state.color, float: 'right' }} >

                                              {this.state.allow}
                                            </Button>




                                    }
                                    {
                                      this.state.later === '' ?
                                        <Button style={{ color: 'black', border: '0px solid white', float: 'right' }} >

                                          Later
                   </Button>
                                        :
                                        <Button style={{ color: 'black', border: '0px solid white', float: 'right' }} >

                                          {this.state.later}
                                        </Button>}
                                  </CardBody>
                                </Card>
                                :
                                this.state.category === 'Mobile' ?


                                  <Card className="card-stats mb-4 mb-xl-0" style={{ paddingTop: 10 }}>
                                    <CardBody>
                                      <Row>

                                        <div>
                                          <Row>

                                            <div>

                                            </div>
                                            <Col lg='4' xl='1'>

                                              <img src={this.state.logo}
                                                width='30px' height='30px' style={{
                                                  margin: 0,
                                                  position: 'absolute',
                                                  top: '30%'
                                                }} />

                                            </Col>
        &nbsp;&nbsp;
        <Col lg='12' xl='10'>

                                              <span style={{
                                                color: '#000',
                                                fontSize: '16px',
                                                maxHeight: '2.3rem',
                                                lineHeight: '1.225',
                                                overflow: 'hidden',
                                                fontFamily: 'Roboto,sans-serif'
                                              }}>{this.state.title}</span>      <br />

                                              <span style={{
                                                color: '#000',
                                                fontSize: '16px',
                                                maxHeight: '4.6rem',
                                                lineHeight: '1.225',
                                                overflow: 'hidden',
                                                fontFamily: 'Roboto,sans-serif'
                                              }}>{this.state.message}</span><br />


                                            </Col>

                                            <Col>
                                            </Col>
                                          </Row>
                                          <br />
                                          <br />

                                        </div>
                                      </Row>
                                      {
                                        this.state.allow === '' && this.state.background === '' ?
                                          <Button style={{ backgroundColor: '2E5FDC', color: this.state.color, float: 'right' }} >

                                            Allow
                   </Button> :
                                          this.state.allow === '' && this.state.background !== '' ?

                                            <Button style={{ backgroundColor: this.state.background, color: this.state.color, float: 'right' }} >

                                              Allow
                   </Button>
                                            :
                                            this.state.allow !== '' && this.state.background === '' ?
                                              <Button style={{ backgroundColor: "#2E5FDC", color: this.state.color, float: 'right' }} >

                                                {this.state.allow}
                                              </Button> :
                                              <Button style={{ backgroundColor: this.state.background, color: this.state.color, float: 'right' }} >

                                                {this.state.allow}
                                              </Button>




                                      }
                                      {
                                        this.state.later === '' ?
                                          <Button style={{ color: 'black', border: '0px solid white', float: 'right' }} >

                                            Later
                   </Button>
                                          :
                                          <Button style={{ color: 'black', border: '0px solid white', float: 'right' }} >

                                            {this.state.later}
                                          </Button>}
                                    </CardBody>
                                  </Card> :
                                  this.state.category === 'Mac' ?
                                    <div></div> :
                                    null
                              }
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col></Row>
              <br />
              <Card>
                <CardHeader className=" bg-transparent">
                  Opt-in timings
                  <p>set the delay time for showing the prompt-in.The browser subscription will show directly after clicking the "Allow" Button </p>
                </CardHeader>

                <CardBody >

                  <h4>Desktop</h4>
                  <span >Show Prompt after &nbsp;
                      <Select defaultValue="5" style={{ width: 120 }} onChange={this.handleReminder}>
                      <Option value="5">5</Option>
                      <Option value="10">10</Option>

                      <Option value="15">15</Option>
                      <Option value="20">20</Option>
                      <Option value="25">25</Option>
                      <Option value="30">30</Option>
                      <Option value="35">35</Option>
                      <Option value="40">40</Option>
                      <Option value="45">45</Option>
                      <Option value="50">50</Option>
                      <Option value="55">55</Option>
                      <Option value="60">60</Option>
                      <Option value="never">never</Option>

                    </Select> &nbsp;second</span>
                  <br />

                  <h4>Mobile</h4>
                  <span >Show Prompt after &nbsp;
                      <Select defaultValue="5" style={{ width: 120 }} onChange={this.handleReminder}>
                      <Option value="5">5</Option>
                      <Option value="10">10</Option>

                      <Option value="15">15</Option>
                      <Option value="20">20</Option>
                      <Option value="25">25</Option>
                      <Option value="30">30</Option>
                      <Option value="35">35</Option>
                      <Option value="40">40</Option>
                      <Option value="45">45</Option>
                      <Option value="50">50</Option>
                      <Option value="55">55</Option>
                      <Option value="60">60</Option>
                      <Option value="never">never</Option>

                    </Select> &nbsp;second</span>
                  <br />
                  <br />
                  <h3 className=" bg-transparent">
                    Opt-in Position</h3>
                  <p>Customize your opt-in placement on your website</p>
                  <br />
                  <h4>Desktop</h4>

                  <Select defaultValue="top-left" style={{ width: 120 }} onChange={this.handleReminder}>
                  <Option value="top-left">top-left</Option>
                    <Option value="top-center">top-center</Option>
                    <Option value="top-right">top-right</Option>
                    <Option value="bottom-left">bottom-left</Option>
                    <Option value="bottom-center">bottom-center</Option>
                    <Option value="bottom-right">bottom-right</Option>
                   
                    
                  </Select>
                  <h4>Mobile</h4>

                  <Select defaultValue="top" style={{ width: 120 }} onChange={this.handleReminder}>
                    <Option value="top">Top</Option>
                    <Option value="bottom">Bottom</Option>
                  </Select>
                  <br />
                  <h3>Browser Prompt Overlay</h3>
                  <Checkbox onChange={this.onChangecheck}>Enable overlay</Checkbox>
                  <span style={{ color: 'blue' }}><i class="fas fa-eye" style={{ color: 'blue' }}></i>
&nbsp;View Preview</span>
                  <br />
                  <p>Use this overlay to show attractive message to your visitor and urge them to subscribe</p>
                  {this.state.check === true ?
                    <div>
                      <p>Write a custom message for your overlay with offers and brands promotions to increase optins.</p>
                      <label>Title</label>
                      <FormGroup className="mb-3">


                        <Input placeholder="Enter Title" type="text" name='title' style={{ width: '50%' }} value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />

                      </FormGroup>
                      <label>Message </label>
                      <FormGroup className="mb-3">

                        <Input placeholder="Enter Description" type="text" name='message' style={{ width: '50%' }} value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />

                      </FormGroup>
                    </div>

                    :
                    <div></div>}


                </CardBody>
              </Card>
            </TabPane>
            <TabPane tab="No Prompt" key="3">
              <h5 style={{ backgroubd: 'red', padding: 10 }}><span style={{ color: 'red' }}><i class="fas fa-exclamation-triangle"></i>
Warning:</span> Your store visitor will no longer be prompted to subsciber to web push notiifcation. Enable prompt again to ask them to subscribe again.</h5>
            </TabPane>
          </Tabs>
          <br />
          <Card className="card-stats mb-4 mb-xl-0 card" >
            <CardHeader className=" bg-transparent">
              <Row>
                <Col xl='4'>
                  FLYOUT WIDGET
            </Col>
                <Col xl='1'>
                  <Switch defaultChecked onChange={this.onChange} /></Col></Row>

            </CardHeader>
            <CardBody >
              The widgets takes fake approval before showing the browser prompt for actual permission.
                                  </CardBody>
            <Row>
              <Col lg="24" xl="12" >
                <Card className="" >
                  <CardHeader className=" bg-transparent">
                    Content
                 </CardHeader>
                  <CardBody >
                    <Row>
                      <Col xl='6' lg='12'>
                        <div className="col">
                          <label>Mesage before subscribing</label>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">

                              <Input placeholder="Enter Message before subscribing" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />
                            </InputGroup>
                          </FormGroup>
                          <label>Mesage after subscribing</label>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">

                              <Input placeholder="Enter Message after subscribing" type="text" name='title' onChange={(e) => this.setState({ title: e.target.value })} />
                            </InputGroup>
                          </FormGroup>
                          <label>Button to Subscribe </label>
                          <FormGroup className="mb-3">

                            <Input placeholder="Button to Subscribe" type="text" name='message' onChange={(e) => this.setState({ message: e.target.value })} />

                          </FormGroup>
                        </div>

                      </Col>
                      <Col xl='6' lg='12'  >
                        <Card className="card-stats mb-4 mb-xl-0 card">
                          <CardHeader style={{ color: 'black' }}>
                            Preview
                 </CardHeader>
                          <CardBody  >
                            <Row>
                              <Col xl='9' >
                                <h5>  Get Notification when a item is back in stock</h5></Col>
                              <Col xl='3' ><h5 style={{ color: 'blue' }}>SUBSCRIBER</h5></Col>

                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>

<br/>
        </Container>
      </>
    );
  }
}

export default Optins;
