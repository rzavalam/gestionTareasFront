import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Tarea } from '../../../core/models/product/tarea';
import { Catalogo } from '../../../core/models/product/catalogo';


const tareaIncio = {
  fechaInicio: new Date('01/10/2024'),
  fechaFinal : new Date('01/10/2024')
}

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css'
})
export class TareaCreateComponent /*implements OnInit */ {
  public title: String | undefined;
  tareaForm: FormGroup;
  errorMessage: string | null = null;

  lstPrioridad: Catalogo[] | undefined;
  lstEstado : Catalogo[] | undefined;
  lstResponsables : Catalogo[] | undefined;
  date: Date | undefined;

  selectedCountry: any;

  filteredCountries: any[] | undefined;


  constructor(private fb: FormBuilder,private tareaService: TareaService, private router: Router) {
    this.title = "Registrar Tarea";
    this.tareaForm  = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      responsable: ['', [Validators.required]],
      descTarea: ['', [Validators.required, Validators.minLength(8)]],
      prioridad : ['', [Validators.required]],
      fechaInicio : ['', [Validators.required]],
      fechaFinal : ['', [Validators.required]],
      estado : ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.tareaForm.reset();//tareaIncio
    this.inicio();
    /*this.tareaForm = new FormGroup(
      {
      responsable : new FormControl <Catalogo | null >(null),
      prioridad : new FormControl <Catalogo | null >(null),
      estado : new FormControl <Catalogo | null >(null),
      }
    );*/
  }

  isValidoCampo (field : string): boolean | null{
    return this.tareaForm.controls[field].errors
    && this.tareaForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.tareaForm.controls[field]) return null;
    const errors = this.tareaForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key){
        case 'required' :
          return 'Este campo es requerido';
        case 'minLength' :
            return 'Mínimo 5 caracteres';
      }
    }
    return null;
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



registrarTarea(){
  if(this.tareaForm.invalid){
    this.tareaForm.markAllAsTouched();
    return;
  }


  if(this.tareaForm.valid){
    console.log("Tarea Registrada");

    console.log(this.tareaForm.value as Tarea)

    console.log ("Formulario Válido");


    let  tarea ={} as Tarea;
    tarea  = {
    idTarea: this.tareaForm?.get('idTarea')?.value,
    nombre: this.tareaForm?.get('nombre')?.value,
    responsable: JSON.parse(JSON.stringify(this.tareaForm?.get('responsable')?.value )).descripcion,
    descTarea: this.tareaForm?.get('descTarea')?.value,
    prioridad: JSON.parse(JSON.stringify(this.tareaForm?.get('prioridad')?.value )).descripcion,
    estado: JSON.parse(JSON.stringify(this.tareaForm?.get('estado')?.value )).descripcion,
    fechaInicio : this.tareaForm?.get('fechaInicio')?.value,
    fechaFinal : this.tareaForm?.get('fechaFinal')?.value,
    colorEstado : this.tareaForm?.get('colorEstado')?.value
    }
    console.log(tarea)


    this.tareaService.createTarea(tarea).subscribe({
    //this.tareaService.createTarea(this.tareaForm.value as Tarea).subscribe({
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

limpiar(){
  this.tareaForm.reset();
}

cancelar(){
  this.router.navigate(['/listar']);
}
}
