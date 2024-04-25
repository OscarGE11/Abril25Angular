import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../_servicio/productos.service';
import { Producto } from '../../_modelo/Producto';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-insertar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertar-producto.component.html',
  styleUrl: './insertar-producto.component.css'
})
export class InsertarProductoComponent {

  constructor(private productoServicio: ProductosService) {}

  idProducto: number = 0;
  nombreProducto: string = "";
  precioUnitario: number = 0;
  unidadesStock: number = 0;
  idCategoria: number = 0;

  producto: Producto = {
    idProducto: 0,
    nombreProducto: "",
    precioUnitario: 0,
    unidadesStock: 0,
    idCategoria: 0
  };

  insertar(): void {

    if (this.idProducto === 0 || 
      this.nombreProducto === "" ||
      this.precioUnitario === 0 ||
      this.unidadesStock === 0 || 
      this.idCategoria === 0) {
        console.error("Todos los campos son obligatorios");
        return;

    }
    this.producto.idProducto = this.idProducto;
    this.producto.nombreProducto = this.nombreProducto;
    this.producto.precioUnitario = this.precioUnitario;
    this.producto.unidadesStock = this.unidadesStock;
    this.producto.idCategoria = this.idCategoria; 
  
    
    console.log("Producto a insertar:", this.producto);
  
    this.productoServicio.insertarProducto(this.producto).subscribe(
      () => {
        console.log("Producto insertado");
        
      },
      error => {
        console.error("Error al insertar producto: " + error);
      }
    );
    window.location.reload();
  }
  
  
}
