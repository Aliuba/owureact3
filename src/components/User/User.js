import React from 'react';
import {useDispatch} from "react-redux";


import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name, username} = user;
    const dispatch=useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>select me</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>select me from Api</button>
        </div>
    );
};

export default User;