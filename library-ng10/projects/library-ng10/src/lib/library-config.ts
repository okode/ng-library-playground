import { InjectionToken } from '@angular/core';

export const LIBRARY_CONFIG = new InjectionToken<LibraryConfig>('Library configuration');

export interface LibraryConfig {
  logo?: string;
  backPage?: string;
  routesPrefix?: string;
}
