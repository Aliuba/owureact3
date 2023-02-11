import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService={
    getAll:()=>axiosService.get(urls.comments),
    //тут по правилам мало б бути з коментарів, але нам дали завдання з постів
    getById: (id)=> axiosService.get(`${urls.posts}/${id}`)
}

export {commentsService}