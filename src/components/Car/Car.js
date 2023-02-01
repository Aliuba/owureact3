import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year}=car

    const del=async (id)=>{

        await carService.deleteById(id)
        const {data}= await carService.getAll()
            setCars(()=>data)
    }

    return(
        <div>
            <h3>id: {id}</h3>
            <div>
            <span> brand :{brand}</span>
            <span> price : {price}</span>
            <span> year : {year}</span>
            </div>
            <button onClick={()=>setUpdateCar(car)}>Update </button>
            <button onClick={()=>del(id)}> Delete</button>

        </div>
    )
  
}

export {Car}