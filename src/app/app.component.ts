import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'Controller Pay';
  public menuQueryParam: string = '';
  public menuSelecionado: string = '';
  public menuSpotify: string = 'spotify';
  public menuNetflix: string = 'netflix';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.menuQueryParam = params['menu'];

      if(this.menuQueryParam && this.menuQueryParam == this.menuNetflix || this.menuSelecionado == this.menuSpotify)
        this.menuSelecionado = this.menuQueryParam;
    });
  }

  public escolherMenu(menuEscolhido: string):void {
    this.menuSelecionado = menuEscolhido;
  }
}
