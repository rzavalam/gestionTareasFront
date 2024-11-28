import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../core/models/product/product';
 
 
@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css'
})
export class TareaCreateComponent {
  product: Product = {id: '', name: '', price: 0 };
 
  constructor(private productService: ProductService) {}
 
  onSubmit() {
    this.productService.createProduct(this.product).subscribe({
      next: (data) => {
        console.log('Producto agregado:', data);
        // Aquí puedes agregar lógica para redirigir o mostrar un mensaje
      },
      error: (err) => {
        console.error('Error al agregar producto:', err);
      }
    });
  }
}