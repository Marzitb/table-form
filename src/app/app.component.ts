import { Component, OnInit, ViewChild,Output,EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { Formpage } from './form/form.page';
// import { MatDatepicker } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsComponent } from './details/details.component';

// export interface PeriodicElement {
//   name: string;
//   username:string;
//   gender:string;
//   password:number;
//   birthday:any;
//   email: string;
//   city: string;
//   cityCity: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  @Output() dataId = new EventEmitter<any>();
  // ngOnInit() {          
  //   this.http.post<any>('https://reqres.in/api/posts').subscribe(data => {
  //       this.postId = data.id;
  //   })
  // }


  displayedColumns: string[] = [
    'companyName',
    'id',
    'title',
    'productTypeTitle',
    'sellPrice',
    'sellerRate',
    'detailEmployee'
  ];
  
  isloading = false;
  Count = 0;
  dataSource: any;
  data = new MatTableDataSource<any>();
  reload: boolean = true;
  searchText = '';
  pageSize: any = [5];
  pageNumber: any;
  body: any = {
    Code: "Products2",
    Columns: [],
    Filters: [
    ],
    Take: this.pageSize[0],
    Skip: 0,
    Params: [],
  };
  // constructor(public dialog: MatDialog,
  constructor(private http: HttpClient,public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator

  // goToPage() {
  //   this.paginator.pageIndex =this.pageNumber, // number of the page you want to jump.
  //     this.paginator.page.next({
  //       pageIndex:this.pageNumber,
  //       pageSize: this.paginator.pageSize,
  //       length: this.paginator.length
  //     });
  // }

  getData() {
    // true
    this.isloading = true;
    // debugger
    if (this.paginator && this.body.Skip == 0) {
      // debugger
      this.paginator.pageIndex = 0;

    }
    this.http.post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', this.body).subscribe(res => {
      this.isloading = false;
      // false
      // debugger
      this.data = res.result.items;
      this.Count = res.result.totalCount;
      console.log(typeof this.Count)
      // debugger
      // this.body.Take=this.pageChange(res);
      // this.body.Skip=this.pageChange(res);

    })
  }




  ngOnInit(): void {

    this.data.paginator = this.paginator;


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }

 
  title = 'testService';
// detail(){
//   this.body.Filters.push({
//     FIELDNAME: "Id",
//     OPERATOR: "Equal",
//     VALUE: this.dataId
//   })
// }


  filterSearch() {

    if (this.searchText != '' && this.searchText != null && this.searchText != undefined) {

      this.body.Filters.push({
        FIELDNAME: "sellPrice",
        OPERATOR: "Equal",
        VALUE: this.searchText
      })

    } else {
      this.body.Filters = []
    }
    this.body.Take = this.pageSize[0];

    this.body.Skip = 0;
    this.getData();

  }


  pageChange(e: any) {
    // debugger
    this.body.Take = e.pageSize;

    this.body.Skip = e.pageIndex * e.pageSize;


    this.getData();

  }

  detailResult(e:any,ele:any){
    debugger
    const dialogRef = this.dialog.open(DetailsComponent);
  
    
  this.dataId.emit(ele.id);
  
    // this.detail()
  }
  // this.dialog._overlayContainer._containerElement.style.overflowY = "hidden";
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(Formpage);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.data.push(result);

  //     this.reload = false;
  //     setInterval(() => {
  //       this.reload = true;
  //     }, 20);
  //   });
  // }
}
