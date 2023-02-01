import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, updatedCar}) => {

    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const onSubmit = async (car) => {
        if (updatedCar) {
            await carService.updateById(updatedCar.id, car)
            const {data} = await carService.getAll()
            setCars(() => data)
            reset()
        } else {
            const {data} = await carService.create(car)
            setCars(prev => [...prev, data])
            reset()
        }
    }

    useEffect(() => {

        if (updatedCar) {
            setValue("brand", updatedCar.brand)
            setValue('year', updatedCar.year)
            setValue('price', updatedCar.price)
        }

    }, [updatedCar])

    return (

        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type={"text"} placeholder={'brand'} {...register('brand', {
        //             pattern: {
        //                 value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //                 message: "Only letters 1-20"
        //             },
        //         required:{value:true, message: "required"}
        //         }
        //     )}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //     <input type={"text"} placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: "min 1990"},
        //         max: {value: new Date().getFullYear(), message: `max ${new Date().getFullYear()}`},
        //         required:{value:true, message: "required"}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //     <input type={"text"} placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: { value: 0, message: 'min=0'},
        //         max: {value: 1000000, message: 'max=1000000'},
        //         required:{value:true, message: "required"}
        //     }
        //     )}/>
        //     {errors.price&&<span>{errors.price.message}</span>}
        //     <button>Save</button>
        // </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <button disabled={!isValid}>{updatedCar ? 'Update' : 'Save'}</button>
        </form>
    )

}

export {CarForm}