import { Horario } from "./horario.interface";

export interface ActividadHorario {

  id: number;
  horarioID: number;
  actividadId: number;
  horario: Horario;  

}
