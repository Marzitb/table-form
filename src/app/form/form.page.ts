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
  state:any[]=[
  {id:"1",  name:"تهران" },
  {id:"2",  name:"اصفهان" },
  {id:"3",  name:"آذربایجان شرقی" },
  {id:"4",  name:"یزد" }];
  // شهرستان
    city:any[]=[
    {id:"1",name:"فیروزکوه",parentId:"1"},
    {id:"2",name:"اسلامشهر",parentId:"1"},
    {id:"3",name:"پاکدشت",parentId:"1"},
    {id:"4",name:"ورامین",parentId:"1"},
    {id:"5",name:"نجف آباد",parentId:"2"},
    {id:"6",name:"شاهین شهر",parentId:"2"},
    {id:"7",name:"کاشان",parentId:"2"},
    {id:"8",name:"اصفهان",parentId:"2"},
    {id:"9",name:"تبریز",parentId:"3"},
    {id:"10",name:"میانه",parentId:"3"},
    {id:"11",name:"مرند",parentId:"3"},
    {id:"12",name:"هشترود",parentId:"3"},
    {id:"13",name:"میبد",parentId:"4"},
    {id:"14",name:"اردکان",parentId:"4"},
    {id:"15",name:"ابرکوه",parentId:"4"},
    {id:"16",name:"تفت",parentId:"4"},];


  title = 'form';
  hide = true;
  item ={name:'',
   username:''
   ,gender:''
   , password:''
   ,birthday:''
   ,email:''
   ,stateName:'',
   stateId:null
   ,cityId:null,
   cityName:''} ;

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
    this.selectCity = this.getCityState(Number(e))

    
  }

  getCityState(stateId:number){
    

  
  return  this.city.filter((c)=>c.parentId == stateId)
    
     
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
   handleChangeCitySelectBox(e:any){
        
        this.item.cityId=e.id;
        this.item.cityName=e.name;
      } 
     handleChangeStateSelectBox(v:any){
        
          this.item.stateId=v.id;
          this.item.stateName=v.name;
        } 
 
}


