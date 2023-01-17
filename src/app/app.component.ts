import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDailogComponent } from 'src/app/user-dialog/user-dialog.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'HCL';
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'email', 'phone', 'image', 'company', 'address', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private appService: AppService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getuserdetails();
  }

  getuserdetails() {
    this.appService.getUser().then(res => res.json())
      .then((value: any) => {
        this.dataSource = new MatTableDataSource<any>(value.users);
        this.dataSource.paginator = this.paginator;
      }
      );
  }

  openDialog(element: any, actiontype: any): void {
    const dialogRef = this.dialog.open(UserDailogComponent, {
      data: { array: element, type: actiontype },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.appService.getFilteruser(filterValue)
      .then(res => res.json())
      .then((value: any) => {
        if (value.total) {
          this.dataSource = value.users
        } else {
          this.getuserdetails();
        }
      }
      );
  }

}
