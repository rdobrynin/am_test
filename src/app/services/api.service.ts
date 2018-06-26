import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../constants';

@Injectable()
export class ApiService {
  private actionUrl: string;
  private propertyUrl: string;

  public constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;
    this.propertyUrl = _configuration.Server;
  }


  /**
   * Get Properties by Filter
   * http://kv.setor.net:5000/property/search?type=HOUSE&price_from=12&price_to=100&query=test&limit=12
   * @param {string} limit
   * @param {string} type
   * @param {string} priceFrom
   * @param {string} priceTo
   * @param {string} query
   * @returns {Observable<Object>}
   */

  public getProperties(
    limit: string,
    type: string,
    priceFrom: string,
    priceTo: string,
    query: string) {
    return this.http.get(this.actionUrl + `property/search?
    limit=${limit}&price_from=${priceFrom}&price_to=${priceTo}&query=${query}`);
  }

  /**
   * Get Property by id
   * http://kv.setor.net:5000/property/12
   * @param {string} id
   * @returns {Observable<Object>}
   */

  public getProperty(id: string) {
    return this.http.get(this.propertyUrl + `property/${id}`);
  }

}
