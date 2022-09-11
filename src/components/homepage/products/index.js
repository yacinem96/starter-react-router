import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { products } from '../../../data'
import { CardOne } from '../../utils/cardOne'

export const Products = () => {
  return (
    <>
    <Container id='products'>
        <h1 className="m-5 text-center">Our Products</h1>
        <Row>
            {products? products.map((item) => {
                return (
                    <Col key={item.id}>
                       <CardOne item={item}/>
                    </Col>
                )
            })
            :<p>aucun produit</p>}
        </Row>
    </Container>
    </>
  )
}

