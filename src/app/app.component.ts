import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean=true;
  newCol='red';
  newBackCol='blue'
  title:string = 'Get value of input Box';
  displayVal:string='';
  displayName:string='';
  counter:number=0;
  disabled:boolean=false;
  show:boolean=true;
  formData:any={};
  color:string="orange";
  users=['anil','Deep','Jimit','sanket'];
  userObj=[
    {name:"deep",email:"deep@deep.com",phone:7878787878},
    {name:'anil',email:'anil@anil.com',phone:2323232323},
    {name:'Sanket',email:'sanket@sanket.com',phone:21212121},
  ];
  userNewObj=[
    {name:'anil',email:'anil@anil.com',socialAccounts:['instagram','fb','yt']},
    {name:'deep',email:'deep@deep.com',socialAccounts:['insta','yt','gmail']},
  ];
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  getName(name:string){
    alert("function called"+name)
  }
  getData(){
    console.warn("button clicked")
  }
  getKeyData(val:string){
    console.log(val)
  }
  getBoxData(val:string){
    console.log(val)
    this.displayVal=val;
  }
  getBoxDataOnClick(val:string){
    this.displayName=val;
  }
  updateCol(){
    this.newCol='blue';
    this.newBackCol='yellow';
  }
  getFormData(data:NgForm){
    console.warn(data)
    this.formData=data;
  }
  toggle(){
    if(this.display==false){
      this.display=true;
    }else{
      this.display=false;
    }
  }
}
