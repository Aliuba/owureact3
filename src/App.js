import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";


function App() {
    const [cars, SetCars]=useState([])
    const [updateCar, SetUpdateCar]= useState(null)

    useEffect(()=>{
        carService.getAll().then(({data})=>SetCars([...data]))
    },[])

  return (
    <div >
      <CarForm setCars={SetCars} updatedCar={updateCar}/>
      <hr/>
      <Cars cars={cars} setUpdateCar={SetUpdateCar} setCars={SetCars}/>
    </div>
  );
}

export default App;
