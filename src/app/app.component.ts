import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-blog-app';
  // date = new Date();

  posts = [
    new Post(
      'Une bonne journée',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspe\
ndisse vel tellus scelerisque neque dictum bibendum ornare nec justo. Aenean p\
ellentesque arcu odio, ac condimentum tellus feugiat et.',
    ),
    new Post(
      'Une bonne soirée',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultric\
es posuere cubilia Curae; Vivamus purus ante, laoreet eget accumsan et, tincid\
unt at elit.'),
    new Post(
      'Un bon café',
      'Suspendisse non odio ut sapien mattis lobortis. Maecenas eget \
accumsan lacus.'),
      new Post(
        'Une bonne bouteille',
        'Class aptent taciti sociosqu ad litora torquent per conubia no\
stra, per inceptos himenaeos. Donec purus augue, pretium non dui id, rutrum in\
terdum ex. Vivamus consequat aliquet felis eu tincidunt. Nullam ultricies sapi\
en nunc, imperdiet malesuada ligula ullamcorper quis.')
  ];

//   posts = [
//     {
//       title: 'Une bonne journée',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspe\
// ndisse vel tellus scelerisque neque dictum bibendum ornare nec justo. Aenean p\
// ellentesque arcu odio, ac condimentum tellus feugiat et.',
//       loveIts: 0, created_at: this.date},
//     {
//       title: 'Une bonne soirée',
//       content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultric\
// es posuere cubilia Curae; Vivamus purus ante, laoreet eget accumsan et, tincid\
// unt at elit.',
//       loveIts: 0, created_at: this.date},
//     {
//       title: 'Un bon café',
//       content: 'Suspendisse non odio ut sapien mattis lobortis. Maecenas eget \
// accumsan lacus.',
//       loveIts: 0, created_at: this.date},
//     {
//       title: 'Une bonne bouteille',
//       content: 'Class aptent taciti sociosqu ad litora torquent per conubia no\
// stra, per inceptos himenaeos. Donec purus augue, pretium non dui id, rutrum in\
// terdum ex. Vivamus consequat aliquet felis eu tincidunt. Nullam ultricies sapi\
// en nunc, imperdiet malesuada ligula ullamcorper quis.',
//       loveIts: 0, created_at: this.date},
//   ];
}
