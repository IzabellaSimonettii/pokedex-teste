import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  exibeLink = false;
  fixHeader = false;
  index = 6;
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 100) {
          this.fixHeader = true;
      } else {
          this.fixHeader = false;
      }
  });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const param = paramMap.get('pokemonId');
      if (param) {
        this.exibeLink = true;
      } else {
        this.exibeLink = false;
      }
    });
  }

  ngOnChanges() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const param = paramMap.get('pokemonId');
      if (param) {
        this.exibeLink = true;
      } else {
        this.exibeLink = false;
      }
    });
  }

  redirect() {
    this.router.navigate(['/']);
  }

}
