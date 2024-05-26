import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Usuario, UsuariosService } from '../usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [CommonModule, ButtonModule, HttpClientModule, FormsModule],
  templateUrl: './novo.component.html',
  styleUrl: './novo.component.scss'
})
export class NovoComponent {
  currentComponent = 'Novo';

  @Output() usuarioAdicionado = new EventEmitter<Usuario>();
  @Output() fecharForm = new EventEmitter<void>();
  usuario: Usuario = { nome: '', email: '' };

  constructor(private usuariosService: UsuariosService) {}

  adicionarUsuario() {
    if (this.usuario.nome && this.usuario.email) {
      this.usuariosService.addUsuario(this.usuario).subscribe(
        (novoUsuario: Usuario) => {
          this.usuarioAdicionado.emit(novoUsuario);
          this.fecharForm.emit();
          this.usuario = { nome: '', email: '' };
        },
        error => console.error('Erro ao adicionar usuário:', error)
      );
    } else {
      console.error('Nome e Email são obrigatórios');
    }
  }

}
