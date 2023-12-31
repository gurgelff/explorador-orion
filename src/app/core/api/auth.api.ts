import { IResponseLogin } from '../models/IResponseLogin';
import { Injectable } from '@angular/core';
import { BaseAPI } from './base.api';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAPI extends BaseAPI {
  constructor(
    protected override httpClient: HttpClient,
    protected override storageService: StorageService
  ) {
    super(httpClient, storageService);
    this.apiUrl += '/login';
  }

  /**
   * login
   *
   * Realiza o login
   *
   * @param data - Objeto com os dados para autenticação
   *
   * @returns Resposta da autenticação
   */
  public login(loginForm: FormGroup): Promise<IResponseLogin> {
    return this.post(loginForm);
  }
}
