import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public formularioLogin!: FormGroup;
  private nameValidatios: any[] = [
    Validators.minLength(5),
    Validators.maxLength(10),
    Validators.required
  ];

  constructor(){}//private formGroup: FormGroup, private formControl: FormControl) { }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      name: new FormControl('', this.nameValidatios),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.maxLength(10)),
      phoneNumber: new FormControl('', Validators.pattern("^[0-9]*$")),
    });
  }

  onInput(name: any){
    // this.formularioLogin.get("name")?.setErrors(null)
    console.log(name);
    
  }

  onSubmit(){
    console.log("Submit");
    console.log(this.formularioLogin);
    console.log(this.formularioLogin.get("name")?.value);
    console.log(this.formularioLogin.get("email")?.value);
    console.log(this.formularioLogin.get("password")?.value);

    this.formularioLogin.markAsDirty()
    this.markAllAsDirty()
    this.formularioLogin.markAllAsTouched()

    if(this.formularioLogin.invalid){
      console.log("ERROR EN FORMULARIO");
      return
    }

    console.log("ENVIADO");
    return
  }

  markAllAsDirty(){
    this.formularioLogin.get("name")?.markAsDirty()
    this.formularioLogin.get("email")?.markAsDirty()
    this.formularioLogin.get("password")?.markAsDirty()
  }

}
