import { Component} from '@angular/core';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { ToastComponent } from './toast/toast.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IndexComponent, NovoComponent, CommonModule, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UsuariosService]
})
export class AppComponent {
  title = 'processo_seletivo';
}
