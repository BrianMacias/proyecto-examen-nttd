import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: FormGroup;

  constructor(private fb: FormBuilder){
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void{

  }

  registrar(): void{}

}
