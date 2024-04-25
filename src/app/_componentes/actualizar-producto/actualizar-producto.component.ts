import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../_servicio/productos.service';
import { Producto } from '../../_modelo/Producto';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {
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

  actualizar(): void {
    if (
      this.idProducto === 0 ||
      this.nombreProducto === "" ||
      this.precioUnitario === 0 ||
      this.unidadesStock === 0 ||
      this.idCategoria === 0
    ) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    this.producto.idProducto = this.idProducto;
    this.producto.nombreProducto = this.nombreProducto;
    this.producto.precioUnitario = this.precioUnitario;
    this.producto.unidadesStock = this.unidadesStock;
    this.producto.idCategoria = this.idCategoria; 
    
    console.log("Producto a actualizar:", this.producto);
  
    this.productoServicio.actualizarProducto(this.producto).subscribe(
      () => {
        console.log("Producto actualizado");
        window.location.reload();
      },
      error => {
        console.error("Error al actualizar producto: " + error);
      }
    );
  }
}
