import { RestauranteInterface } from "./RestauranteInterface";
import { UsuarioInterface } from "./UsuarioInterface";


export interface ReservaInterface {
    Id?: number,
    restaurante? : RestauranteInterface,
    usuario?: UsuarioInterface,
    Nombre?: string,
    Cantidad_personas?: number,
    Fecha?: Date,
    Subtotal?: number,
    Transaccion?: string,
}