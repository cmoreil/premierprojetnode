import React, { Component } from "react";
import { GetLastMessage } from "../GetLastMessage/GetLastMessage.js";
import { GetLastUser } from "../GetLastUser/GetLastUser.js";
import { Row, Col, Grid } from 'react-bootstrap';

export class Home extends React.Component {
    render() {
      return (
        <div className="App">
            <Grid>
            <Row>
            <Col md="9">
            < GetLastMessage />
            </Col>
            <Col md="3">
            < GetLastUser />
            </Col>
            </Row>
            </Grid>
        </div>
            );
        }
    }

export default Home;
