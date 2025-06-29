import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive } from '@angular/router';
=======
import { RouterLinkWithHref } from '@angular/router';
>>>>>>> b682b284d1af8efcc383ad79ce50e6b6346f6d13

@Component({
  selector: 'app-header',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink, RouterLinkActive],
=======
  imports: [RouterLinkWithHref],
>>>>>>> b682b284d1af8efcc383ad79ce50e6b6346f6d13
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
