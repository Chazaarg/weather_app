import React from "react";
import { Card, Container } from "reactstrap";
import { Spinner } from "reactstrap";

const Wrapper = ({ children, loading }) => {
  if (loading) {
    return (
      <div
        className="container d-flex"
        style={{
          height: "30vh",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Spinner className="m-auto" type="grow" color="primary" />
      </div>
    );
  }
  return (
    <Container className="mt-5">
      <Card>{children}</Card>
    </Container>
  );
};

export default Wrapper;
