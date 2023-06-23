import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import {Col, Row} from "react-bootstrap";

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const {data} =await axios.get('/api/products')

        setProducts(data)

    }

    useEffect(() => {

        fetchProducts()
    }, [])
    return (
        <>

        <h1>
            Latest products
        </h1>

            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default HomeScreen