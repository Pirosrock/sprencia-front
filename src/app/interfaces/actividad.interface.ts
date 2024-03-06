import { Opinion } from "./opinion.interface";
import { ActividadHorario } from "./actividad-horario.interface";

export interface Actividad {
  id: number;
  nombre: string;
  precio: number; 
  resumen: string;
  estado: boolean;
  opinion: Opinion;
  actividad_Horarios: ActividadHorario;
}
