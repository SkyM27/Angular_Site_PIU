import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';
import { DeleteFormComponent } from '../delete-form/delete-form.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];
  id: number = 2;

  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe((list:Item[]) => {
      this.itemList = list
    }, (err) => {
        this.error = err.message;
    })
  }

  async openDialog(id?: number) {
    const dialogRef = this.dialog.open( FormComponent , {
      width: '400px',
      height: '400px',
      data: { idToBeEdit: id } 
    });

  dialogRef.afterClosed().subscribe(() => {
    console.log('The dialog was closed.')
  })
  }

  async openDelDialog(id?: number, name?: string) {
    const dialogRef = this.dialog.open( DeleteFormComponent , {
      width: '400px',
      height: '400px',
      data: { idToBeDeleted: id, nameOfTheItem: name }
    });

  dialogRef.afterClosed().subscribe(() => {
    console.log('The dialog was closed.')
  })
  }

  ngOnInit(): void {
      this.getItems();
  }
}
