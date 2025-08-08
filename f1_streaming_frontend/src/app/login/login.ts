import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login{
  email: string = '';
  senha: string = '';
  @ViewChild('form') formRef!: ElementRef<HTMLFormElement>;

  constructor(private router: Router, private http: HttpClient, private ngZone:NgZone){}
  ngOnInit(){
    // console.log("asklda")

  }
  test(){
    this.ngZone.run(()=>{
      console.log("lksad")
    })   
  }
  onSubmit() {
    console.log("asklda")
  }
  login(user:string, password:string){
    console.log(user)
    console.log(password)

  }
}