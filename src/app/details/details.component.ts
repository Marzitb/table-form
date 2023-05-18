import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<DetailsComponent>) { }
@Input() dataId: any;

  data:any[];
  body:any={
    Code: "Product2Details",
    Columns: [
        "companyName",
        "id",
        "productTypeId",
        "productTypeTitle",
        "sellDiscount",
        "sellPrice",
        "sellerId",
        "sellerRate",
        "sellerType",
        "simRank",
        "stock",
        "title",
        "titleDirection"
    ],
    Filters: [
        // {
        //     FieldName: "id",
        //     Operator: "equal",
        //     Value: "233056"
        // }
    ],
    Take: 0,
    Skip: 0,
    Params: []
}
getId(){
  this.body.Filters.push({
    FIELDNAME: "id",
    OPERATOR: "Equal",
    VALUE: this.dataId
  })
}
getData() {
  // true
  this.getId();
  this.http.post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', this.body).subscribe(res => {
  
    // false
    debugger
    this.data = res.result.items;

   
    // debugger
    // this.body.Take=this.pageChange(res);
    // this.body.Skip=this.pageChange(res);

  })
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getData();
 
}

  // body: any = {
  //   Code: "Products2",
  //   Columns: [],
  //   Filters: [
  //   ],
  //   Take: 0,
  //   Skip: 0,
  //   Params: [],
  // };
}
