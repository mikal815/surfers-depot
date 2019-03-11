import React from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageShapes from './manage_shapes';

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageShapes/>
        </UserLayout>
    );
};

export default ManageCategories;