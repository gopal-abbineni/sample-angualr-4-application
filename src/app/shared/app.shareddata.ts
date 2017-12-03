import { Injectable } from '@angular/core';
import { Messages } from './app.messages';

/** to use the app data as a singleton set and available throughout the app through sharedData */
@Injectable()
export class sharedData {

      httpPengindRequest: number = 0;
      isNavigationEnded: boolean = true;

      activeTab: string = 'home';

      getactiveTab(): string {
            return this.activeTab;
      }

      setactiveTab(data: string) {
            this.activeTab = data;
      }

      getisNavigationEnded(): boolean {
            return this.isNavigationEnded;
      }

      setisNavigationEnded(data: boolean) {
            this.isNavigationEnded = data;
      }

      gethttpPengindRequest() {
            return this.httpPengindRequest;
      }

      sethttpPengindRequest(data: number) {
            this.httpPengindRequest = data;
      }
} 