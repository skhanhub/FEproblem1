
import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import Planet from "../Planet/Planet";
import {findPlanet} from "../../store/actions";
import {getSelected, getTotalTime} from "../../store/results";
import {planetsToBeSelected, colsPerRow, numberOfColsInRow} from "../../config";




function GameForm() {

  const dispatch = useDispatch();
  const selected = useSelector(getSelected);
  const timeTaken = useSelector(getTotalTime);
  const history = useHistory();

  const result = [];
  let cols = [];
  let i;
  for(i = 0; i < planetsToBeSelected; i++){

    cols.push(
      <Col key={`col${i}`} md={numberOfColsInRow/colsPerRow}>
        <Planet planetId={i}/>
      </Col>
    );
    
    if((i+1)%colsPerRow === 0 && i !== 0){
      result.push(
        <Row key={`row${i}`}>
          {cols}
        </Row>
      )
      cols = [];
    }
  }

  if(planetsToBeSelected%colsPerRow !== 0){
    result.push(
      <Row key={`row${i}`}>
        {cols}
      </Row>
    )
  }
  return(
    <>
    <Card style={{margin: "1rem 2rem"}}>
      <Card.Header as="h5">Select planets you want to search in</Card.Header>
      <Card.Body>
        {result}
      </Card.Body> 
    </Card>
    <Card style={{margin: "2rem 2rem"}}>
      <Row>
        <Col style={{textAlign: "center"}}>
          <Button 
            style={{margin: "0.1rem"}}
            disabled={!selected} 
            onClick={event=>{
              dispatch(findPlanet())
              history.push(`/finding-falcone/Result`)
            }} 
            variant="primary"
          >
            Find Falcone!
          </Button>
        </Col>
        <Col>
          <h3 style={{textAlign: "center"}}>
            Time taken: {timeTaken}
          </h3>
        </Col>
      </Row>
    </Card>
    </>
  );
}

export default GameForm;