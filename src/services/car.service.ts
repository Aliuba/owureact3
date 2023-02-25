import {apiService, IRes} from "./api.service";
import {urls} from "../configs";
import {ICar} from "../interfaces";

const carService={
    getAll:():IRes<ICar[]>=> apiService.get(urls.cars.base)
}

export {
    carService
}