export interface Tarea {
    id?: string;
    name: string;
    responsable: string;
    descripcion: string;
    fechaInicio : Date;
    fechaFinal : Date;
    prioridad: string;
    estado: string;
}
