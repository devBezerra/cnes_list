import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiFindAllResponse } from './interfaces/find-all-response.interface';


@Injectable({
  providedIn: 'root',
})
export class CnesService {
  private apiUrl = 'https://apidadosabertos.saude.gov.br/cnes/estabelecimentos';

  constructor(private http: HttpClient) {}

  findAll(page?: number, rows?: number): Observable<ApiFindAllResponse> {
    const offset = page || 1;
    const limit = rows || 13;
    return this.http.get<ApiFindAllResponse>(
      `${this.apiUrl}?limit=${limit}&offset=${offset}`
    );
  }
}
