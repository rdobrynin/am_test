import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'http://kv.setor.net:5000/';
  public ApiUrl = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}