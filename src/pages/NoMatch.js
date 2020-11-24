import React from "react";
import { Card } from 'react-bootstrap';

function NoMatch() {

  return (
    <Card className="text-center">
      <Card.Body>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Card.Body>
    </Card>
  );
}

export default NoMatch;
