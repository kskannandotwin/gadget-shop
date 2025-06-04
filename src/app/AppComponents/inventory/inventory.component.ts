import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  inventoryData = {
    productId: '',
    productName: '',
    availableQty: 0,
    reorderPoint: 0
  }
  onSubmit() {
    alert('Form submitted successfully! ' + JSON.stringify(this.inventoryData));
  }
}
