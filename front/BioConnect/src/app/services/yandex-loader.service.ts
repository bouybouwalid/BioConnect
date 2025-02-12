// services/yandex-loader.service.ts
import { Injectable } from '@angular/core';

declare var ymaps: any;

@Injectable({ providedIn: 'root' })
export class YandexLoaderService {
  private apiKey = 'VOTRE_CLE_API_YANDEX';
  private isLoaded = false;

  async load(): Promise<void> {
    if (!this.isLoaded) {
      await this.injectScript();
      this.isLoaded = true;
    }
    return new Promise(resolve => ymaps.ready(resolve));
  }

  private injectScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${this.apiKey}&lang=fr_FR`;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }
}