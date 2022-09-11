
import React from 'react'
import {Link , Outlet}from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import './style.css'

export const AdminLayout = () => {
    return (
        <div className='container-fluid  content-wraper'>
            <Row>
                <Col md={2} className="sidebar ">
                    <h1>Admin DashBoard</h1>
                    <ul>
                        <li><Link to="users">users</Link></li>
                        <li><Link to="posts">posts</Link></li>
                    </ul>
                </Col>
                <Col md={10} className="content"> 
                <Outlet />
               
                </Col>
            </Row>
        </div>
    )
}
