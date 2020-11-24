
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Spinner } from 'react-bootstrap';
import GameForm from "../components/GameForm/GameForm";
import { getPlanets, getVehicles } from "../store/actions";
import { VALID_PLANET_OPTIONS, SELECTED_PLANETS, SELECTED_VEHICLES } from "../store/types";



function Game() {

  const dispatch = useDispatch();
  const planets = useSelector(state => state.getData.planets)
  const loading = useSelector((state) => state.getData.loading)
  
  useEffect(()=>{
    dispatch(getPlanets());
    dispatch(getVehicles());
  }, [])

  useEffect(()=>{
    dispatch({ type: VALID_PLANET_OPTIONS, payload: Object.keys(planets) })
    dispatch({ type: SELECTED_PLANETS, payload: {} })
    dispatch({ type: SELECTED_VEHICLES, payload: {} })
  },[planets])

  return (
    <>
    {
      loading ? 
      <Spinner style={{margin: "auto", display: "block"}} animation="border" /> :
      <GameForm/>
    }
    </>
  );
}

export default Game;