import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from "react-bootstrap";
import Operatingtime from "./Operatingtime";
import Reviews from "./Reviews";

function ViewRest() {
  const params = useParams();

  const [allrestaurent, setallrestaurent] = useState([]);

  // function to api call for datas inside json file
  const getrestaurentdata = async () => {
    await fetch("/restaurants.json").then((data) => {
      data.json().then((result) => {
        setallrestaurent(result.restaurants);
      });
    });
  };

  //  console.log(allrestaurent);

 const restData= allrestaurent.find(item=>item.id==params.id)
//  console.log(restData);
  useEffect(() => {
    getrestaurentdata();
  }, []);

  return (
    <>
      {
        restData?(
          <Row>
            <Col>
            <Image className="p-5" src={restData.photograph} fluid />
            </Col>
            <Col className="mt-5">
            <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>cuisine_type: {restData.cuisine_type}</h4>
            <h4>address: {restData.address}</h4>

            <Operatingtime timedata={restData.operating_hours}></Operatingtime><br></br>

            <Reviews reviewData={restData.reviews}></Reviews>


            {/* <Button>Operating Hours</Button>

            <Button className="ms-3">Customer Reviews</Button> */}

            </Col>

          </Row>
        )

        :'null'}
    </>
  );
}

export default ViewRest;
