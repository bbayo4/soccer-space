import { APP_INITIALIZER } from '@angular/core';
import { StartupService } from './services/startup.service';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

export const appInitializerProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];
