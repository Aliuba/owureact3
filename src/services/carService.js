import {axiosCarsService} from "./axiosCarsService";
import {carsUrls} from "../configs";


const carService={
    getAll:()=>axiosCarsService.get(carsUrls.cars),
    create:(newCar)=>axiosCarsService.post(carsUrls.cars, newCar),
    updateById:(id, data)=>axiosCarsService.put(`${carsUrls.cars}/${id}`, data),
    deleteById:(id)=>axiosCarsService.delete(`${carsUrls.cars}/${id}`, id)
}

export {carService}