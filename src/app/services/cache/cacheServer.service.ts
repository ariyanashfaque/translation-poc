import { Injectable } from '@angular/core';
import { CacheService } from 'ionic-cache';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CacheServerService {
  constructor(private http: HttpClient, private cache: CacheService) {}

  loadList() {
    let url = 'http://ip.jsontest.com';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }
}
