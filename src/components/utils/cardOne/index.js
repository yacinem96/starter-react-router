import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button,Card}  from 'react-bootstrap';


export const CardOne = ({item}) => {
  const navigate=useNavigate();
  return (
    <>
   <Card className="mb-2 text-start" style={{ width: '18rem' }}>
      <Card.Img className="p-3" variant="top" style={{height:"220px"}} src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="">
        {item.price}$
        </Card.Text>
        <Button onClick={()=>navigate(`/details/${item.id}`)} style={{backgroundColor:"rgb(250, 154, 21)"}}>Details</Button>
        <Button className="float-end" style={{backgroundColor:"rgb(250, 154, 21)"}}>Add to cart</Button>
      </Card.Body>
    </Card>
    </>
  )
}

