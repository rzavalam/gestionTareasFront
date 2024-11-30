import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrl: './modal-confirmacion.component.css'
})

export class ModalConfirmacionComponent {
  /*constructor(public activeModal: NgbActiveModal) { }
  indBtn2 = true;
  texto1 = 'Aceptar';
  texto2 = 'Cancelar'; 
  @Input() public modal;
  @Input() public tipoModal = 1;
  @Input() public classModal = 'primary';
  @Input() public href = '#';
  @Input() public link = '';
  @Output() respuesta = new EventEmitter<any>();

  ngOnInit() {
   
    switch (this.tipoModal) {
      case 1:
        this.texto1 = 'OK';
        this.indBtn2 = false;
        break;
      case 2:
        this.texto1 = 'Aceptar';
        this.texto2 = 'Salir';
        break;
      case 3:
        this.texto1 = 'Aceptar';
        this.texto2 = 'Cancelar';
        break;
      case 4:
        this.texto1 = 'Confirmar';
        this.texto2 = 'Cancelar';
        break;
      case 5:
        this.texto1 = 'Si';
        this.texto2 = 'No';
        break;
      case 6:
        this.texto1 = 'Aceptar';
        this.indBtn2 = false;
        break;
    }
  }

  cerrar(): void {
  
    this.respuesta.emit('NO');
    this.activeModal.close();
  }

  aceptar(): void {
   
    this.respuesta.emit('SI');
    this.activeModal.close();
  }*/

}
