import { Button, Card, Spinner } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { getSelected, getTotalTime } from "../store/results";
import { CLEAR } from "../store/types";

function Result() {

  const dispatch = useDispatch();
  const hiddenPlanet = useSelector(state => state.getData.hiddenPlanet)
  const selected = useSelector(getSelected);
  const timeTaken = useSelector(getTotalTime);
  const history = useHistory();
  const loading = useSelector((state) => state.getData.loading)
  const GetHeader = ()=>{
    if(!selected) 
      return "Hmm, you havent explored the maximum number of planets";
    else if(hiddenPlanet.status === "success") 
      return "Success! Congratulations on Finding Falcone, King Shan is mighty pleased."
    else
      return "Failed! Couldn't find Falcone, sad.";
  }

  return (
    
    <Card className="text-center">
      {loading ? 
      <Spinner style={{margin: "auto", display: "block"}} animation="border" /> :
      <>
      <Card.Header 
        as="h5"
      >
        {GetHeader()}
      </Card.Header>
      <Card.Body>
        <Card.Title hidden={hiddenPlanet.status !== "success"}>Time taken: {timeTaken}</Card.Title>
        <Card.Text hidden={hiddenPlanet.status !== "success"}>
          Planet found: {hiddenPlanet.planet_name}
        </Card.Text>
        <Button 
          variant="primary"  
          onClick={event=>{
            dispatch({type: CLEAR});
            history.push("/");
          }}
        >
          Start {selected ? "Again" : "Playing"}
        </Button>
      </Card.Body>
      </>
      }
    </Card>
    
  );
}

export default Result;