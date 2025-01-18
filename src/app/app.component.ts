import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Quicksilver Workshop Productions';

  sections = [
    {title: 'Learn More', link: 'about'},
    /*{title: 'Join a Table', link: 'join'},
    {title: 'Schedule Your Event', link: 'book'},
    {title: 'You See a Door', link: 'blog'},*/
    {title: 'Tools and Resources', link: 'tools-and-resources'},
  ];
}
