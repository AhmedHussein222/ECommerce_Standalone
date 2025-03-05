import {Component} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ]
  ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',


})
export class HomeComponent {
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: 'Are you sure you want to delete this item?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('تمت الموافقة على الحذف');
      } else {
        console.log('تم الإلغاء');
      }
    });
  }

  showSuccess() {
    this.snackBar.open('تمت العملية بنجاح ✅', 'إغلاق', {
      duration: 3000, // الإشعار سيختفي بعد 3 ثوانٍ
      panelClass: ['success-snackbar'] // لتنسيق خاص بـ CSS
    });
  }
}


