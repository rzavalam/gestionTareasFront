import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tarea } from '../../models/product/tarea';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl =  environment.urlBase + "/angular/tareas/";
  private apiUrlConsultarAll = environment.urlBase + "/angular/tareas/listarTarea";
  private apiUrlInsertar = environment.urlBase + "/angular/tareas/registrarTarea";

  constructor(private http: HttpClient) {}

  // Método para obtener todos los productos
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrlConsultarAll).pipe(
      catchError(this.handleError)
    );
  }

  // Método para obtener un producto por ID
  getTareaById(id: string): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrlInsertar, tarea).pipe(
      catchError(this.handleError)
    );
  }

  updateTarea(id: string, tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiUrl}/${id}/`, tarea).pipe(
      catchError(this.handleError)
    );
  }

  deleteTarea(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; intenta de nuevo más tarde.');
  }
}
