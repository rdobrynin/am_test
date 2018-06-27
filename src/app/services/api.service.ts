import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { Configuration } from '../constants';

@Injectable()
export class ApiService {
  private actionUrl: string;
  private propertyUrl: string;

  public constructor(private httpClient: HttpClient, private _configuration: Configuration) {
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
    limit: string ,
    type: string,
    priceFrom: string,
    priceTo: string,
    query: string) {
    let params = new HttpParams().set('limit', limit);
    if(type.length > 0) {
      params = params.set('type', type);
    }
    if(priceFrom.length > 0) {
      params = params.set('price_from', priceFrom);
    }
    if(priceTo.length > 0) {
      params = params.set('price_to', priceTo);
    }
    if(query.length > 0) {
      params = params.set('query', query);
    }
    return this.httpClient.get(this.propertyUrl + `property/search`, {params: params});
  }

  /**
   * Get Property by id
   * http://kv.setor.net:5000/property/12
   * @param {string} id
   * @returns {Observable<Object>}
   */

  public getProperty(id: string) {
    return this.httpClient.get(this.propertyUrl + `property/${id}`);
  }

}
