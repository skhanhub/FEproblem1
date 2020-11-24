import React from 'react';
import { Button, Form } from 'react-bootstrap';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick, value }, ref) => (
  <Form.Group>
    <Form.Label as="h5" style={{display: "block"}}>{children}</Form.Label>
    <Button
      style={{minWidth: "8rem"}}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {value?value:"Select"} &#x25bc;
    </Button>
  </Form.Group>
));

export default CustomToggle;