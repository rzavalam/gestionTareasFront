import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Tarea } from '../../../core/models/product/tarea';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface Catalogo{
  codigo : string;
  descripcion : string;
}

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css'
})
export class TareaCreateComponent implements OnInit  {
  public title: String | undefined;
  tareaForm: FormGroup | any;
  errorMessage: string | null = null;

  lstPrioridad: Catalogo[] | undefined;
  lstEstado : Catalogo[] | undefined;
  lstResponsables : Catalogo[] | undefined;
  date: Date | undefined;

  selectedCountry: any;

  filteredCountries: any[] | undefined;

  ngOnInit(): void {
    this.inicio();
    this.tareaForm = new FormGroup(
      {
      nombre : new FormControl ([Validators.required]),
      descTarea : new FormControl ([Validators.required]),
      responsable : new FormControl <Catalogo | null >(null),
      prioridad : new FormControl <Catalogo | null >(null),
      estado : new FormControl <Catalogo | null >(null),
      }
    );
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
      codigo : "01",
      descripcion : "Alta"
    },
    {
      codigo : "02",
      descripcion : "Media"
    },
    {
      codigo : "03",
      descripcion : "Baja"
    },
  ]

  this.lstEstado =[
    {
      codigo : "01",
      descripcion : "Registrada"
    },
    {
      codigo : "02",
      descripcion : "Asignada"
    },
    {
      codigo : "03",
      descripcion : "Terminada"
    },
  ]

  this.lstResponsables =[
    {
      codigo : "AXXX",
      descripcion : "Francy"
    },
    {
      codigo : "BXXX",
      descripcion : "Howard"
    },
    {
      codigo : "CXXX",
      descripcion : "Rocio"
    },
    {
      codigo : "DXXX",
      descripcion : "Lisney"
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
  this.tareaService.createTarea(this.tareaForm.value as Tarea).subscribe({
    next: (data) => {
      alert("Tarea Registrada");
    },
    error: (err) => {
      this.errorMessage = 'No se pudieron cargar los productos.';
      console.error('Error al obtener productos:', err);
    }
  });
}
}
