import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeRespuesta } from '../../../models/mensaje-respuesta';
import { UsuarioDTOPost } from '../../../DTOs/usuario-dtopost';
import { UsuarioService } from '../../../services/usuariosService/usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomValidators } from '../../../customValidators/custom-validators';
import {DialogGenericoComponent} from "../../ventanas/dialog-generico/dialog-generico.component";
import {TermsConditionsComponent} from "../../terms-conditions/terms-conditions.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import _default from "chart.js/dist/plugins/plugin.tooltip";


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  formUsuario: FormGroup = this.fb.group({});
  mensajeRespuesta: MensajeRespuesta = {} as MensajeRespuesta;
  usuario: UsuarioDTOPost = {} as UsuarioDTOPost;
  hidePassword:boolean = true;
  hideConfirmPassword:boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private alerta: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = new Subscription();

    this.formUsuario = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmpassword: [null, [Validators.required, CustomValidators.mismaPassword]],
      terms: [false, [Validators.requiredTrue]],
      tipoUsuario: [null, [Validators.required]]
    });

  }

  registrarUsuario() {
    this.usuario = {
      email: this.formUsuario.get("email")?.value,
      password: this.formUsuario.get("password")?.value,
      idRol: this.formUsuario.get("tipoUsuario")?.value
    } as UsuarioDTOPost;

    this.subscription?.add(
      this.usuarioService.postUsuario(this.usuario).subscribe({
        next: async (response: MensajeRespuesta) => {
          this.mensajeRespuesta = response;
          this.openSnackBar(this.mensajeRespuesta.mensaje);
          if (this.mensajeRespuesta.ok) {
            setTimeout(() => {
              this.formUsuario.reset();
              this.router.navigate(['login'])
            }, 3000);
          }
        },
        error: async (response: MensajeRespuesta) => {
          this.mensajeRespuesta = response;
          this.openSnackBar(this.mensajeRespuesta.mensaje);
        }
      })
    )
  }

  openSnackBar(mensaje:string) {
    this.alerta.open(mensaje,"Cerrar",{duration:3000});
  }
  get email() {
    return this.formUsuario.get('email');
  }

  get password() {
    return this.formUsuario.get('password');
  }

  get confirmpassword() {
    return this.formUsuario.get('confirmpassword');
  }

  get terms() {
    return this.formUsuario.get('terms');
  }

  openTermsDialog(): void {
    const dialogRef = this.dialog.open(DialogGenericoComponent, {
      data: {
        title: 'Términos y Condiciones',
        component: TermsConditionsComponent
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formUsuario.patchValue({ terms: true });
      }
      else {
        this.formUsuario.patchValue({ terms: false });
      }
    });
  }
}
