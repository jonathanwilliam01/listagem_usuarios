import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './app/usuarios.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule),
    provideHttpClient(withFetch()),
    UsuariosService
  ],
}).catch(err => console.error(err));
