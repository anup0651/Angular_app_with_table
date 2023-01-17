import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDailogComponent implements OnInit {

  memberEdit = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserDailogComponent>, public appservice: AppService) {

    this.memberEdit.patchValue({
      id: this.data.array.id,
      name: this.data.array.firstName,
      email: this.data.array.email
    })

  }

  ngOnInit(): void {
  }

  editMember() {
    this.appservice.updateUser(this.memberEdit.value)
      .then(res => res.json())
      .then(console.log);
    this.dialogRef.close();
    console.log('Updated Successfully');
  }

  delete() {
    this.appservice.deleteuser(this.data.array.id)
      .then(res => res.json())
      .then(console.log);
       this.dialogRef.close();
       console.log('Deleted Successfully');
       
  }
}
