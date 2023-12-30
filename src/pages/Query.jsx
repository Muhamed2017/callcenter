import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./css/inquery.css";
import { FaCarRear } from "react-icons/fa6";
import { FaCarCrash, FaGasPump } from "react-icons/fa";

import {
  GiHornInternal,
  GiCargoShip,
  GiCommercialAirplane,
  GiFire,
} from "react-icons/gi";
import { RiBodyScanLine } from "react-icons/ri";
import { SiGoogleearthengine } from "react-icons/si";
import { setInquery } from "../redux/actions/queryActions";
import { connect } from "react-redux";

const Query = (props) => {
  return (
    <div className="query-page tab-page">
      <div className="container mt-5">
        <Row>
          <Col md={3} className="mb-3">
            <div
              className="inquery-card"
              onClick={() => props.setInqueryType("CAR_FORM")}
            >
              <p>
                سيارات{" "}
                <span>
                  <FaCarRear />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="inquery-card"
            onClick={() => props.setInqueryType("SEAL_FORM")}
            >
              <p>
                بحري{" "}
                <span>
                  <GiCargoShip />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                داخلي{" "}
                <span>
                  <GiHornInternal />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                أجسام{" "}
                <span>
                  <RiBodyScanLine />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="inquery-card">
              <p>
                طيران{" "}
                <span>
                  <GiCommercialAirplane />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                حريق{" "}
                <span>
                  <GiFire />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                حوادث{" "}
                <span>
                  <FaCarCrash />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                بترول{" "}
                <span>
                  <FaGasPump />
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquery-card">
              <p>
                هندسه{" "}
                <span>
                  <SiGoogleearthengine />
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

// export default Query;

const mapDispatchToProps = (dispatch) => ({
  setInqueryType: (type) => dispatch(setInquery(type)),
});

const mapStateToProps = (state) => {
  return {
    form: state.inqueryReducer.form,
    //   isLoggedIn: state.regularUser.isLoggedIn,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Query);
