import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio-angular';

  //função scrollTop ao navegar pelas page components
  onAtive(){
    window.scroll(0,0);
  }






}
