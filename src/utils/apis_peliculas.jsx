import { clientApi } from "./api";

export const getPopular = async (page=1) => {
    try { 
        const { data } = await clientApi.get('movie/popular?&language=es-ES&page='+page) ;
        console.log(data) ; 
        return data 
    } catch (error) {  
        console.log(error) ; 
        return []
    }
}