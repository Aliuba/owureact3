import {baseCarsURL} from "../configs";
import axios from "axios";

const axiosCarsService=axios.create({baseURL: baseCarsURL})

export {axiosCarsService}