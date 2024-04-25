import { Injectable } from '@angular/core';
import {entorno} from '../_entorno/entorno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../_modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url:string = `${entorno.HOST}/productos`;
  
  constructor(private http:HttpClient) { }

  obtenerTodos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  insertarProducto(p:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url,p);
  }
  borrarProducto(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url,producto);
  }
  
}
