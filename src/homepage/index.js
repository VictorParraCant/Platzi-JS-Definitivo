const page = require('page');
const empty = require('empty-element');
const template = require('./template');
const title = require('title');

page('/', function(ctx, next) {
    title('Plaztigram');
    const main = document.getElementById('main-container');
    const pictures = [
      {
        user: {
          username: 'VictorParraCant',
          avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/14233089_1014710551960683_2548533742114062778_n.jpg?oh=d1c11042323abf7d3b120abc4d7904c8&oe=58EE62EC'
        },
        url: 'office.jpg',
        likes: 0,
        liked: false,
        createdAt: new Date()
      },
      {
        user: {
          username: 'VictorParraCant',
          avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/14233089_1014710551960683_2548533742114062778_n.jpg?oh=d1c11042323abf7d3b120abc4d7904c8&oe=58EE62EC'
        },
        url: 'office.jpg',
        likes: 1,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() -10)
      },
    ];

    empty(main).appendChild(template(pictures));
});
