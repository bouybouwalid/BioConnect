import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { NgxMapboxGLModule, MAPBOX_API_KEY } from 'ngx-mapbox-gl';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    { provide: MAPBOX_API_KEY, useValue: 'pk.eyJ1Ijoid2JvdXlib3UiLCJhIjoiY203MHRhYTltMDQ3YjJyczVwd2EyNnlieSJ9.qmOoK00udoyWe3CP9Ek03g' } // Ajoute ta clé Mapbox ici

  ],
}).catch(err => console.error(err));
