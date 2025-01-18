import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Quicksilver Workshop';

  sections = [
    { title: 'About', link: 'about' },
    { title: 'Tools & Resources', link: 'tools-and-resources' },
  ];
}
