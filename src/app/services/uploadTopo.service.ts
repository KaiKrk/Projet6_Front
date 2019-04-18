import { HttpClient } from '@angular/common/http';
import {urlApi} from './const.service';
import {Router} from '@angular/router';
import {Secteur, Topo, Voie} from '../interfaces/uploadTopo.interface';

export class UploadTopoService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  private topo: Topo
  private secteur: Secteur
  private voie: Voie
  upload(topo: object, secteur: object[], voie: object[]) {
    console.log(topo, secteur, voie);
    this.httpClient.post<any>('http://localhost:8080/topo/addTopo', { topo, secteur, voie } );
  }
}
