import {useEffect, useState} from "react";


import {albumsService} from "../../services/albumsService";
import Album from "../Album/Album";


const Albums = () => {

    const [albums, setAlbums]=useState([])

    useEffect(()=>{
        albumsService.getAll().then(({data})=>setAlbums(data))
    },[])

    return (
        <div>
            <h1>ALBUMS</h1>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;