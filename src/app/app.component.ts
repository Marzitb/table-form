import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formpage } from './form/form.page';
import { MatDatepicker } from '@angular/material/datepicker';

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
  
  displayedColumns: string[] = [
    'name',
    'username',
    'gender',
    'email',
    'state',
    'city'
  ];

  data: any[] = [];
  reload: boolean = true;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Formpage);

    dialogRef.afterClosed().subscribe((result) => {
      this.data.push(result);

      this.reload = false;
      setInterval(() => {
        this.reload = true;
      }, 20);
    });
  }
}
