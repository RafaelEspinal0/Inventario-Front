import { ICategoria } from "./categoria.interfaces";
import { IMarca } from "./marca.interfaces";

export interface IProducto{
    id?:string;
    nombre?:string;
    cantidad?:string;
    precio?:string;
    foto?:IFoto;
    descripcion?:string;
    categoria?:ICategoria;
    marca?:IMarca;
}

export interface IFoto{
    id?:string;
    url?:string;
}
