import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCar, setCars}) => {


    return(
        <div>

            {cars.map(value => <Car key={value.id} car={value} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>


    )

  
}

export {Cars}