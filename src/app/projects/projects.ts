import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects = [
    {
      title: 'custmize-psd',
      description:
        'A responsive website built with Html and css to showcase awesome stuff.',
      image: 'assets/images/project1.png',
      github: 'https://m-otefy.github.io/custmize-psd/',
      liveDemo: 'https://project1-live-demo.com',
    },
    {
      title: ' Agency-Landing-Page',
      description: 'static site with an HtMl, CSS, Bootstarp',
      image: 'assets/images/project2.png',
      github: 'https://m-otefy.github.io/Agency-Landing-Page/',
      liveDemo: 'https://project2-live-demo.com',
    },
    {
      title: 'FakeApp Store',
      description:
        'A responsive e-commerce product page built with Angular. It fetches products from a fake store API and displays them in styled Bootstrap cards. Each product includes an image, title, price, and an "Add to Cart" button. The design is mobile-friendly, fast-loading, and follows Angular best practices. Deployed using GitHub Pages.',
      image: 'assets/images/project2.png',
      github: 'https://m-otefy.github.io/E-Shop/',
      liveDemo: 'https://project2-live-demo.com',
    },
    {
      title: 'custmize-psd',
      description: 'static site with an HtMl, CSS, Bootstarp, SCSS',
      image: 'assets/images/project2.png',
      github: 'https://m-otefy.github.io/task-scss/',
      liveDemo: 'https://project2-live-demo.com',
    },
  ];
}
