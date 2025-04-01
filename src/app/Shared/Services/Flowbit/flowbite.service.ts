import {inject, Inject, Injectable, InjectionToken, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class FlowbiteService {

  private _platformId :  any = inject(PLATFORM_ID);

  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this._platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }

}
