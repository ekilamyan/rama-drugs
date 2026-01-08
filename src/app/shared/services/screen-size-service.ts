import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidth$ = new BehaviorSubject<number>(1920); // Default fallback for SSR

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth$.next(window.innerWidth);
      fromEvent(window, 'resize').subscribe((event: any) => {
        this.screenWidth$.next(event.target.innerWidth);
      });
    }
  }

  public getScreenWidth() {
    return this.screenWidth$.asObservable();
  }

  public getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    // Guard against SSR
    if (!isPlatformBrowser(this.platformId)) {
      return 'desktop'; // Default for SSR
    }

    const userAgent = navigator.userAgent;

    // Regex patterns for different device types
    const isTablet = /iPad|Tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(userAgent);
    const isMobile = /iPhone|iPod|Android.*Mobile|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isTablet) {
      return 'tablet';
    } else if (isMobile) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }

  public getHtmlToImageScaleFactor(): number {
    if (this.screenWidth$.value <= 400) {
      return 3;
    } else if (this.screenWidth$.value <= 800) {
      return 2;
    } else {
      return 1;
    }
  }
}