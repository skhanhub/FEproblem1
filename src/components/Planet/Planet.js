import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, Dropdown } from 'react-bootstrap';
import {SELECTED_PLANETS} from "../../store/types";
import {upddateVehicles} from "../../store/actions";
import CustomToggle from "./CustomToggle";
import CustomMenu from "./CustomMenu";

export default function Planet({planetId}) {

  const getPlanetOptions = state => {
    const selectedPlanet = state.formControl.selectedPlanets[planetId];
    const selectedPlanets = state.formControl.selectedPlanets;
    const validPlanetOptions = state.formControl.validPlanetOptions;

    const filteredPlanetOptions = validPlanetOptions.filter(planet=>!Object.values(selectedPlanets).includes(planet));
    return selectedPlanet ? [...filteredPlanetOptions, selectedPlanet] : filteredPlanetOptions
    
  }

  const dispatch = useDispatch();
  const planetOptions = useSelector(getPlanetOptions);
  const selectedPlanet = useSelector(state => state.formControl.selectedPlanets[planetId]);
  const planets = useSelector(state => state.getData.planets);
  const vehicles = useSelector(state => state.getData.vehicles);

  return (
    <Card style={{minHeight: "16rem"}}>
      <Card.Body>
      <Dropdown style={{marginBottom: "1rem"}}  onSelect={value=>dispatch({ type: SELECTED_PLANETS, payload: {[planetId]: value}  })}>
        <Dropdown.Toggle 
          value={selectedPlanet}
          as={CustomToggle} 
        >
          Destination {planetId}
        </Dropdown.Toggle>

        <Dropdown.Menu 
          as={CustomMenu}
        >
          {planetOptions && planetOptions.map((planet)=>
            <Dropdown.Item 
              key={planet} 
              eventKey={planet}
              active={planet===selectedPlanet}
            >
              {planet}
            </Dropdown.Item>
          )}
        
        </Dropdown.Menu>
      </Dropdown>

      <div hidden={!selectedPlanet} onChange={event=>dispatch(upddateVehicles(planetId, event.target.value))}>
        {
          Object.keys(vehicles).map(vehicle=>{
            return(  
              <div key={vehicle}>
                <input 
                  disabled={vehicles[vehicle].remaining===0 || vehicles[vehicle].maxDistance<planets[selectedPlanet]} 
                  style={{marginRight: "1rem"}} 
                  type="radio" 
                  id={`${vehicle}${planetId}`} 
                  name={`vehicle${planetId}`} 
                  value={vehicle}
                />
                <label 
                  htmlFor={`${vehicle}${planetId}`}
                >
                  {vehicle} ({vehicles[vehicle].remaining}/{vehicles[vehicle].total})
                </label>
              </div>
            )
          })
        }
      
      </div>
      </Card.Body>
    </Card>
  );
}