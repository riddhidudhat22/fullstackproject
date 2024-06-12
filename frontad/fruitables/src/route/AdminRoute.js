import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/container/Product/Product';
import Layout from '../admin/component/Layout/Layout';
import Review from '../admin/container/Review/Review'
import Category from'../admin/container/Category/Category'
import Counter from '../admin/container/Counter/Counter';
import Facility from '../admin/container/Facility/Facility';
import Coupon from '../admin/container/Coupon/Coupon';
import Contact from '../admin/container/Contact/Contact';
import Subcategori from '../admin/container/Subcategory/Subcategori';




function AdminRoute(props) {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path='/product' element={<Product />} />
                    <Route exact path='/review' element={<Review />} />
                    <Route exact path='/category' element={<Category />} />
                    <Route exact path='/counter' element={<Counter />} />
                    <Route exact path='/facility' element={<Facility />} />
                    <Route exact path='/coupon' element={<Coupon />} />
                    <Route exact path='/contect' element={<Contact/>} />
                    <Route exact path='/subcategori' element={<Subcategori/>} />
                </Routes>
            </Layout>
        </>

    );
}

export default AdminRoute;