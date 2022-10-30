import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent implements OnInit {
  @Output()
  @Input()
  alerta: EventEmitter<any> = new EventEmitter();
  name = new FormControl('');
  formulario!: FormGroup;
  texto!: '[a-z]*';
  ejercicio: any;
  public aviso!: String;
  private desactivado!: boolean;
  elemento!: any;
  constructor(private FormBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.ejercicio = this.FormBuilder.group({
      user: ['', []],
    });
    this.aviso = 'Enviar';
  }
  onsubmit(_datosForm: { value: any }) {
    console.log(_datosForm.value);
  }
  updateName() {
    this.name.setValue('');
  }
  notificacion() {
    this.desactivado = true;
    this.aviso = 'Bienvenido al equipo';
    this.alerta.emit(this.elemento);
  }
  desactivacion() {
    console.log(this.elemento.title);
    return !!this.desactivado;
  }
}
