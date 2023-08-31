import {Container, Row, Col} from "react-bootstrap";
import { contactConfig } from "./content_option";
import {FaFacebook} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
    <body>
    <Container>
      <Row className="sec_sp">
        <Col lg='7' className="d-flex align items center">
            
          <form className="contact__form  w-100">
            <Row>
            <Row className ="mb-5 mt-3">
              <Col lg='8'>
                <div class="titre">
                    <h1 className="display-4 mb-4">
                       Contact
                       <sub>Origami</sub>
                    </h1>
                </div>
              </Col>
            </Row>

              <Col lg='6' className="form-group">
                <input 
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </Col>

              <Col lg='6' className="form-group">
                <input 
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </Col>
            </Row>

            <textarea 
                      className="form-control rounded-0"
                      name="message" 
                      id="message" 
                      placeholder="Type your message..."
                      rows="5">

            </textarea>


            <Row>
              <Col lg='12' className="form-button">
                 <button className="btn" type="submit">Send</button>
              </Col>
            </Row>

          </form>
        </Col>

        <Col lg='5' className="mb-5">
           
      
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email : developer@gmail.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone : +261 XX XXX XX</strong>
              </p>
            </address>
            <p>{contactConfig.description}</p>
            <p>{contactConfig.description}</p>
        </Col>  
      </Row>
    
            <div className="icon">
                <FaFacebook/>facebook 
                <span className="space"></span>
                <FaInstagram/>instagram
                <span className="space"></span>
                <FaLinkedin/>linkedin</div>
      <Row>

      </Row>
    </Container>
    </body>
