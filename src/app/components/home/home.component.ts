
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mesanjeError: string = '';

  constructor(private spotity: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotity.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;

      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mesanjeError = errorServicio.error.error.message;
      });

  }



}
