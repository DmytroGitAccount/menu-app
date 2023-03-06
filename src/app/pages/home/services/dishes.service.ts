// Libraries Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Project Imports
import { DishModel } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

// Local Imports

// TEMP
import { of } from 'rxjs';
import { dishesMock } from 'src/app/core/mocks';

@Injectable({
	providedIn: 'root',
})
export class DishesService {
	private readonly API_URL = `${environment.apiUrl}/dishes`;

	constructor(private http: HttpClient) {}

	public getDish(id: string): Observable<DishModel> {
		// return this.http.get<DishModel>(`${this.API_URL}/${id}`);
		return of(dishesMock.find((dish) => dish.id === id)!);
	}

	public getDishes(): Observable<DishModel[]> {
		// return this.http.get<DishModel[]>(this.API_URL);
		return of(dishesMock);
	}
}
