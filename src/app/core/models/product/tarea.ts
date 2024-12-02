export interface Tarea {
    idTarea: string;
    nombre: string;
    responsable: string;
    descTarea: string;
    prioridad: string;
    estado: string;
    fechaInicio : Date;
    fechaFinal : Date;
    //fechaRegistro :  Date;
    //fechaModificacion: Date;
    colorEstado : string
}
