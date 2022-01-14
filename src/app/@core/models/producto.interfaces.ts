import { ICategoria } from "./categoria.interfaces";
import { IMarca } from "./marca.interfaces";

export interface IProducto{
    id?:string;
    nombre?:string;
    cantidad?:string;
    precio?:string;
    descripcion?:string;
    categoria?:ICategoria;
    marca?:IMarca;
}