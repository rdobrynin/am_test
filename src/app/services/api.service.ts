import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Configuration } from '../constants';

@Injectable()
export class ApiService {
  private actionUrl: string;
  private propertyUrl: string;

  private data = [];

  public constructor(private httpClient: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;
    this.propertyUrl = _configuration.Server;
  }

  getProperties(
    limit: string,
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
