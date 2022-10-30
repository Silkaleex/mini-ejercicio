import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioComponent } from './formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioReactivoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
