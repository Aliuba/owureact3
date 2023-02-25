import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";



const Cars:FC= () => {
    let [cars, setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(({data})=> setCars(data))
    }, [])
    return (
        <div>
            {cars.map((car)=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};