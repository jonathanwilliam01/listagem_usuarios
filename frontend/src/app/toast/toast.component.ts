import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit{
  @Input() duration: number = 3000; // Duração padrão de 3000ms (3 segundos)
  isVisible: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  }

}
