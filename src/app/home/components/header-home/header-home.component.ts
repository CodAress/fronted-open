import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {
  mostrarInfo: boolean = false;
  
  mostrarOcultarInfo() {
    this.mostrarInfo = !this.mostrarInfo;
  }
}
