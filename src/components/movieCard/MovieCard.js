import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StarRatingComponent from 'react-star-rating-component';


const RestoCard = ({ el }) => {
  return (
 <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.img} style={{
            resizeMode: 'cover',
            height: 200,
            width: 300,
          }}/>
    <Card.Body>
      <Card.Title style={{ color:'blueviolet'}}>{el.title}</Card.Title>
      <Card.Text>{el.description}</Card.Text>
      <StarRatingComponent
    name={"star"} /* name of the radio input, it is required */
    value={el.rate} /* number of selected icon (`0` - none, `1` - first) */
    editing={false} /* is component available for editing, default `true` */
/>
    </Card.Body>
  </Card>
  )
}

export default RestoCard