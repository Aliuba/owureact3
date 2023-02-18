import React from 'react';
import {useSelector} from "react-redux";

const SelectedUser = () => {

    const{selectedUser}=useSelector(state=>state.users)

    return (
        <div>

            {selectedUser&& selectedUser.name}

        </div>
    );
};

export default SelectedUser;