import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs";

type IRes<T>=Promise<AxiosResponse<T>>

let apiService = axios.create({baseURL});

export type {
    IRes
}

export {
    apiService,

}