import React from 'react'
import { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <>
<Button className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
              reviewData.map(item=>
                
                
                <>
                <h3>{item.name} {item.date}</h3>
                <h6>{item.rating}</h6>
                <p>{item.comments}</p>
                </>
                
                )
            }
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Reviews
