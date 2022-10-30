import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
  });
  updateProfile() {
    this.profileForm.patchValue({
      firstName: '',
    });
  }

  onSubmit() {
    const firstname = this.profileForm.controls.firstName.value; //Como acceder directamente a nuestros controls
    console.warn(this.profileForm.value, firstname);
    this.profileForm.reset(); //Para limpiar y volver al estado inicial de nuestro form
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
}
