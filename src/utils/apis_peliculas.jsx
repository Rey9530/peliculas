import { clientApi } from "./api";

export const getPopular = async (page=1) => {
    try { 
        const { data } = await clientApi.get('movie/popular?page='+page) ;
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}

export const getEnCarteleras = async (page=1) => { 
    try { 
        const { data } = await clientApi.get('movie/now_playing?page='+page) ;
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}


export const getDetailMovie = async (movieId=0) => {
    try { // movie/{movie_id}?api_key
        const { data } = await clientApi.get('movie/'+movieId+'') ; 
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}


export const getTopRate = async (page=1) => { 
    try { 
        const { data } = await clientApi.get('movie/top_rated?page='+page) ;
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}
export const getUpcoming = async (page=1) => { 
    try { 
        const { data } = await clientApi.get('movie/upcoming?region=US&page='+page) ;
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}
export const getSeacrhMovie = async (query="",page=1) => { 
    try { 
        const { data } = await clientApi.get('search/movie?region=US&include_adult=false&query='+query+'&page='+page) ;
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}