import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Tarea } from '../../../core/models/product/tarea';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-tarea-create',
  /*standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    SharedModule,
    FloatLabelModule, CalendarModule,
    CardModule, DividerModule, ReactiveFormsModule, InputGroupModule, InputGroupAddonModule,
    InputTextareaModule, AutoCompleteModule],*/
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css'
})
export class TareaCreateComponent implements OnInit  {
  public title: String | undefined;
  tareaForm: FormGroup;
  errorMessage: string | null = null;
  lstPrioridad: any[] | undefined;
  lstEstado : any[] | undefined;
  lstResponsables : any[] | undefined;
  date: Date | undefined;

  selectedCountry: any;

  filteredCountries: any[] | undefined;

  ngOnInit(): void {
    this.inicio();
  }

  constructor(private fb: FormBuilder,private tareaService: TareaService, private router: Router) {
    this.title = "Registrar Tarea";
    this.tareaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.email]],
      responsable: ['', [Validators.required, Validators.email]],
      descTarea: ['', [Validators.required, Validators.minLength(8)]],
      prioridad : ['', [Validators.required]],
      fechaInicio : ['', [Validators.required]],
      fechaFinal : ['', [Validators.required]],
      estado : ['', [Validators.required]]
    });

  }

  async inicio(){
   console.log("inicio");

    this.lstPrioridad =[
      {
        codPrioridad : "01",
        desPrioridad : "Alta"
      },
      {
        codPrioridad : "02",
        desPrioridad : "Media"
      },
      {
        codPrioridad : "03",
        desPrioridad : "Baja"
      },
    ]

    this.lstEstado =[
      {
        codEstado : "01",
        desEstado : "Registrada"
      },
      {
        codEstado : "02",
        desEstado : "Asignada"
      },
      {
        codEstado : "03",
        desEstado : "Terminada"
      },
    ]

    this.lstResponsables =[
      {
        codResponsable : "AXXX",
        desResponsable : "Francy"
      },
      {
        codResponsable : "BXXX",
        desResponsable : "Howard"
      },
      {
        codResponsable : "CXXX",
        desResponsable : "Rocio"
      },
      {
        codResponsable : "DXXX",
        desResponsable : "Lisney"
      },
    ]
  }

  cargarFormularioRegistro(){
    this.title = 'REGISTRO DE TAREA';
  }

  /*id
      name
      responsable
      descripcion de tarea
      fechaInicio
      fechaFinal
      prioridad
      estado*/

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.lstPrioridad as any[]).length; i++) {
        let prioridad = (this.lstPrioridad as any[])[i];
        /*if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }*/
    }

    this.filteredCountries = filtered;
}

registrarTarea(){
  console.log("Tarea Registrada");

  console.log(this.tareaForm.value as Tarea)

  /*
  this.tareaService.createTarea(this.tareaForm.value as Tarea).subscribe({
    next: (data) => {
      alert("Tarea Registrada");
    },
    error: (err) => {
      this.errorMessage = 'No se pudieron cargar los productos.';
      console.error('Error al obtener productos:', err);
    }
  });
  */
}
}
