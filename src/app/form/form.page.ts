import { Component,Inject} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class Formpage {
   statename:any="";
  state:any[]=[
  {id:"1",  namestate:"تهران" },
  {id:"2",  namestate:"اصفهان" },
  {id:"3",  namestate:"آذربایجان شرقی" },
  {id:"4",  namestate:"یزد" }];
  // شهرستان
    city:any[]=[
    {id:"1",namecity:"فیروزکوه",parentId:"1"},
    {id:"2",namecity:"اسلامشهر",parentId:"1"},
    {id:"3",namecity:"پاکدشت",parentId:"1"},
    {id:"4",namecity:"ورامین",parentId:"1"},
    {id:"5",namecity:"نجف آباد",parentId:"2"},
    {id:"6",namecity:"شاهین شهر",parentId:"2"},
    {id:"7",namecity:"کاشان",parentId:"2"},
    {id:"8",namecity:"اصفهان",parentId:"2"},
    {id:"9",namecity:"تبریز",parentId:"3"},
    {id:"10",namecity:"میانه",parentId:"3"},
    {id:"11",namecity:"مرند",parentId:"3"},
    {id:"12",namecity:"هشترود",parentId:"3"},
    {id:"13",namecity:"میبد",parentId:"4"},
    {id:"14",namecity:"اردکان",parentId:"4"},
    {id:"15",namecity:"ابرکوه",parentId:"4"},
    {id:"16",namecity:"تفت",parentId:"4"},];


  title = 'form';
  hide = true;
  item ={name:'',
   username:''
   ,gender:''
   , password:''
   ,birthday:''
   ,email:''
   ,state:''
   ,city:''} ;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    public dialogRef: MatDialogRef<Formpage>,
   //@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


selectCity:any[]=[];

  onStateChange(e:any){
    this.selectCity = this.getCityState(String(e))

    
  }

  getCityState(stateId:string){
    

  
  return this. statename= (this.city.filter((c)=>c.parentId == stateId));
    
     
  }



  onNoClick(): void {
    this.dialogRef.close();
  }


  save(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close()

  }
 
}


