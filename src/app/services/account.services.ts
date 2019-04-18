import {Subject} from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {urlApi} from './const.service';
import {Compte} from '../interfaces/compte.interface';
import {Router, RouterModule} from '@angular/router';

@Injectable()
export class AccountServices {


  compteSubject = new Subject<Compte>();

  private compte: Compte ;

  constructor(private httpClient: HttpClient, private router: Router) { }
  emitcompteSubject() {
    this.compteSubject.next(this.compte);
  }

  getAccount(id: number) {
    this.httpClient
      .get<any>(`${urlApi}compte/${id}`)
      .subscribe(
        (response) => {
          this.compte = response;
          this.emitcompteSubject();
        },
        (erreur) => {
          console.log('Erreur ! : ' , erreur);
        }
      );
  }

  login(identifiant: string, motDePasse: string) {
    console.log(identifiant, motDePasse);
    this.httpClient.post<any>('http://localhost:8080/compte/login', { identifiant, motDePasse} ).subscribe(
      (response) => {
        this.compte = response;
        this.emitcompteSubject();
        this.router.navigate(['compte']);
      },
       (erreur) => {
         console.log('Erreur ! : ' , erreur);
       }
    );

  }

}
