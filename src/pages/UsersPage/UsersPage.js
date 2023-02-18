import React from 'react';

import Users from "../../components/Users/Users";
import SelectedUser from "../../components/SelectedUser/SelectedUser";

const UsersPage = () => {
    return (
        <div>
            <SelectedUser/>
            <Users/>
        </div>
    );
};

export default UsersPage;