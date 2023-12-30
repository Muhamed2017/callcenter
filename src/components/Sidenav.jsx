import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/nav.css";

function SideNav() {
  const [open, setOpen] = useState(true);
  return (
    <>
    <span onClick={()=>setOpen(true)}>
    إفتح
    </span>
      <SwipeableDrawer dir="rtl" open={open} anchor="right">
        <div id="side-nav">
          <Row className="justify-content-md-center align-item-md-center">
            <Col md={8}>
              <h1>لوجو</h1>
            </Col>

            <Col md={4} onClick={() => setOpen(false)}>
              X
            </Col>
          </Row>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default SideNav;
