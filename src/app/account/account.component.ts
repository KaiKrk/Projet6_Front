import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';

import {Subject, Subscription} from 'rxjs';
import {AccountServices} from '../services/account.services';
import {Compte} from '../interfaces/compte.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {



  constructor(private httpClient: HttpClient, private accountService: AccountServices ) { }

  compte: Compte;
  compteSubscription: Subscription;
  ngOnInit() {
    this.compteSubscription = this.accountService.compteSubject.subscribe(
      (compte: Compte) => {
        this.compte = compte;
      }
    );
    this.accountService.emitcompteSubject();
  }

  onFetch() {
    this.accountService.getAccount(1);
  }
}
