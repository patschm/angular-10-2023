import { InjectionToken } from '@angular/core';
import { IRestEndpoints } from '../interfaces/rest-endpoints';

export const IENDPOINTS = new InjectionToken<IRestEndpoints>('app.config.endpoints');
export const ENDPOINTS: IRestEndpoints = {
    apiEndpoint: 'https://localhost:5001/'
  };