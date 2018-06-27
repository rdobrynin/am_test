import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  // Server constants
  public Server = 'http://kv.setor.net:5000/';
  public ApiUrl = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  // JSON constants
  public defaultLimitValue: string = '10';
}