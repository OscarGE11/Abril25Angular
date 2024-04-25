import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListaProductosComponent } from './_componentes/lista-productos/lista-productos.component';
import {InsertarProductoComponent} from'./_componentes/insertar-producto/insertar-producto.component';
import { ActualizarProductoComponent } from './_componentes/actualizar-producto/actualizar-producto.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaProductosComponent,InsertarProductoComponent,ActualizarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril25Angular';
}
