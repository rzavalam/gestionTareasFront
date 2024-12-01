import { Catalogo } from "./catalogo";

export interface Tarea {
    idTarea: string;
    nombre: string;
    responsable: Catalogo;
    descTarea: string;
    prioridad: string;
    estado: string;
    fechaInicio : Date;
    fechaFinal : Date;
    fechaRegistro :  Date;
    fechaModificacion: Date;

}
