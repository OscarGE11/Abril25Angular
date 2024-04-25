import { Component } from '@angular/core';
import { Producto } from '../../_modelo/Producto';
import { ProductosService } from '../../_servicio/productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[]=[];
constructor(private productoServicio:ProductosService){}

  ngOnInit():void {
    this.productoServicio.obtenerTodos().subscribe(datos=>this.productos=datos);
  }
    
    borrarProducto(id: number): void {
      this.productoServicio.borrarProducto(id).subscribe(() => {
        console.log("Producto borrado");
      
        this.productoServicio.obtenerTodos().subscribe(datos => this.productos = datos);
      },
      error => {
        console.error("Error al borrar producto: " + error);
      });
    }
  
}


