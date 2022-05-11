import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EncuestaService } from 'src/app/service/serviceEncuesta/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public form!: FormGroup;
  mostrarSpinner = false;

  constructor(public fb: FormBuilder, public encuestaService: EncuestaService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'nombre': [, [Validators.required, Validators.maxLength(11), Validators.maxLength(3)]],
      'apellido': [, Validators.required,Validators.maxLength(11), Validators.maxLength(3)],
      'edad': [, [Validators.required, Validators.min(1), Validators.max(99)]],
      'telefono': [, [Validators.required, Validators.minLength(10),Validators.maxLength(11)]],
      'experiencia': [, Validators.required],
      'mejoras': [, Validators.required, Validators.maxLength(10), Validators.maxLength(300)],
      'calificacion': [, [Validators.required, Validators.min(1), Validators.max(10)]],
    });
  }

  aceptar() {
    let resource = JSON.stringify(this.form.value);
    this.encuestaService.subirEncuesta(resource);

    this.mostrarSpinner = true;

    setTimeout( () => {
      this.mostrarSpinner = false;
      window.location.reload();
    }, 2000);

  }

}
