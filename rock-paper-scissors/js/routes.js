Router.route('/', function () {
  this.render('home');
});

Router.route('/player1', function () {
  this.render('player1');
});

Router.route('/player2', function () {
  this.render('player2');
});

Router.route('/result_tie', function () {
  this.render('result_tie');
});

Router.route('/result_one_won', function () {
  this.render('result_one_won');
});

Router.route('/result_two_won', function () {
  this.render('result_two_won');
});

Router.route('/waiting_player_one', function () {
  this.render('waiting_player_one');
});

Router.route('/waiting_player_two', function () {
  this.render('waiting_player_two');
});
