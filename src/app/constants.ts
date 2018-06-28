import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  // Server constants
  public Server = 'http://kv.setor.net:5000/';
  public ApiUrl = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  // JSON constants
  public defaultLimitValue: string = String(30);
  public defaultGalleryItemsValue: number = 5;

//  Sizes
  public mobileBreakPoint = 766
}