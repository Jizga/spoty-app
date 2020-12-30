import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root' //Importa automáticamente el servicio
})
export class SpotifyService {

  constructor(private http: HttpClient) { }



  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3Inm17_-38vzv_qOeQ5-lgdRIvL6xq__SQToPvK1hGy2oAukHoVANtOa1uhhT-P5m8E2hbkIbW-7p-1s'
    });

    return this.http.get(url, { headers });

  }



  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }


  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

}
