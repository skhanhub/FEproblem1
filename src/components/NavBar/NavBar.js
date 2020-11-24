import React from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux"
import { CLEAR } from "../../store/types";

export default function NavBar() {

  const history = useHistory();
  const dispatch = useDispatch();
  return (

    <Navbar bg="dark" variant="dark" style={{marginBottom: "2rem"}}>
      <Navbar.Brand 
        data-testid="navBarBrand"
        onClick={event=>history.push("/")}
      >
        Finding Falcone!
      </Navbar.Brand>
      <Button 
        data-testid="resetButton"
        className="ml-auto"
        onClick={event=>{
          dispatch({type: CLEAR});
        }}
        style={{float: "centre"}}
        variant="outline-info"
      >
        Reset
      </Button>
    </Navbar>
  );
}