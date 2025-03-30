import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provincia} from "../../models/Auxiliares/provincia";
import {Ciudad} from "../../models/Auxiliares/ciudad";
import {TipoDNI} from "../../models/Auxiliares/tipo-dni";
import {Categoria} from "../../models/Auxiliares/categoria";
import {Profesion} from "../../models/Auxiliares/profesion";

@Injectable({
  providedIn: 'root'
})
export class AuxiliaresService {

  constructor(private client:HttpClient) { }

  getProvincias(): Observable<Provincia[]> {
    return this.client.get<Provincia[]>("http://localhost:8080/api/auxiliares/provincias");
  }

  getCiudadesByProvincia(idProvincia:number): Observable<Ciudad[]> {
    return this.client.get<Ciudad[]>("http://localhost:8080/api/auxiliares/ciudades/"+idProvincia);
  }
  getCiudades(): Observable<Ciudad[]> {
    return this.client.get<Ciudad[]>("http://localhost:8080/api/auxiliares/ciudades");
  }

  getTiposDNI(): Observable<TipoDNI[]> {
    return this.client.get<TipoDNI[]>("http://localhost:8080/api/auxiliares/tiposDNI");
  }

  getCategorias(): Observable<Categoria[]> {
    return this.client.get<Ciudad[]>("http://localhost:8080/api/auxiliares/categoriasUso");
  }

  getProfesionesByCategoria(idCategoria:number): Observable<Profesion[]> {
    return this.client.get<Profesion[]>("http://localhost:8080/api/auxiliares/profesionesUso/"+idCategoria);
  }
  getProfesiones(): Observable<Profesion[]> {
    return this.client.get<Profesion[]>("http://localhost:8080/api/auxiliares/profesiones");
  }

  createPreference(article: any): Observable<any> {
    return this.client.post("http://localhost:8080/api/mp", article, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      responseType: 'text' // Esto es importante para obtener el texto de respuesta como es.
    });
  }
}
