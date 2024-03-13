import React, { createContext, useContext } from 'react';
import { RestService } from '../Services/RestService';

export const RestServiceContext = createContext<RestService<any> | undefined>(undefined);

export const useRestService = <T>() => {
  const service = useContext(RestServiceContext) as RestService<T>;
  if (!service) {
    throw new Error('useRestService must be used within a RestServiceProvider');
  }
  return service;
};
