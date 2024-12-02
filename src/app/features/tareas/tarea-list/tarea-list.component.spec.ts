import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick,  inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';
import { TareaListComponent } from './tarea-list.component';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Tarea } from '../../../core/models/product/tarea';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { provideHttpClient , withFetch  } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { OrdenarPipe } from '../pipes/ordenar.pipe';

describe('TareaListComponent', () => {
  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;
  let tareas : Tarea[] = [{idTarea:'1', nombre:'SunatTest', responsable:'01', descTarea:'descripcion', prioridad:'01', estado:'01', fechaInicio:new Date('10/10/2024'), fechaFinal:new Date('10/10/2024'), fechaRegistro:new Date('10/10/2024'), fechaModificacion:new Date('10/10/2024'), colorEstado:'rojo'}]
  const myServiceSubject = new Subject<Tarea[]>();
  const myServiceMock = jasmine.createSpyObj('TareaService', tareas, {getTareas:()=>myServiceSubject.asObservable()});
  let service: TareaService;

  beforeEach(waitForAsync(()=>(TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
      provideHttpClientTesting(),
  ],
    declarations: [AppComponent, TareaListComponent, OrdenarPipe], 
    providers : [Router,
      {provide: TareaService, useValue: myServiceMock},
      {provide:provideHttpClient(withFetch()), useValue: myServiceMock}
    ]
  }).compileComponents()
)))

  beforeEach( () => {
    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('should create',  async(inject([HttpTestingController, TareaService],
    (httpClient: HttpTestingController, apiService: TareaService) => {
      expect(apiService).toBeTruthy();
    })));*/

    it('Inicia datos',()=>{
      myServiceSubject.next(tareas)

      expect(component.tareas.length).toBe(1)

      expect(component.tareas[0].nombre).toBe('SunatTest')
  })

});
