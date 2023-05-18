import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

export interface DialogData {
  idToBeDeleted: number | undefined | null;
  nameOfTheItem: string | undefined | null;
}

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit{

  errorText?: string;
  form!: FormGroup;
  subscriptionList: Subscription[] = [];

  constructor(public dialogRef: MatDialogRef<DeleteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, public itemService: ItemService) { }

    ngOnInit(): void {
      this.createForm();
      
    }
    private createForm(): void {
      this.form = this.formBuilder.group({
        delete: [null]
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    deletItem(): void {
      const delName = this.form.getRawValue().delete;
      if (delName === this.data.nameOfTheItem) {
          this.itemService.deleteItem(this.data.idToBeDeleted!).subscribe(() => {
          window.location.reload()
        }, (err) => {
            this.errorText = err.message;
        })
      }
      else {
        window.alert("The name of the item is incorrect!");
      }
    }
  

}
