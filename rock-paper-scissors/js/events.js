if (Meteor.isClient) {

  // This code only runs on the client
  Template.player1.events({
    "click .ctn_button": function (event) {
      var rps = document.getElementById("rps_selection");
      var rps_selected = rps.options[rps.selectedIndex].value;  
      var player = document.getElementById("player_num").innerHTML;
      Meteor.call('save_rps_selection', player, rps_selected);
      Meteor.call('check_result', '1', '2', function (error, res) {
        if(res == '0'){
          window.location.href = "/result_tie";
        }
        else if(res == '1'){
          window.location.href = "/result_one_won";
        }
        else if(res == '2'){
          window.location.href = "/result_two_won";
        }
        else if(res == 'waiting'){
          window.location.href = "/waiting_player_one";
        }
      });
    }
  });

  Template.player2.events({
    "click .ctn_button": function (event) {
      var rps = document.getElementById("rps_selection");
      var rps_selected = rps.options[rps.selectedIndex].value;  
      var player = document.getElementById("player_num").innerHTML;
      Meteor.call('save_rps_selection', player, rps_selected);
      Meteor.call('check_result', '2', '1', function (error, res) {
        if(res == '0'){
          window.location.href = "/result_tie";
        }
        else if(res == '1'){
          window.location.href = "/result_one_won";
        }
        else if(res == '2'){
          window.location.href = "/result_two_won";
        }
        else if(res == 'waiting'){
          window.location.href = "/waiting_player_two";
        }
      });
    }
  });

  Template.result_tie.events({
    "click .new_game": function (event) {
      Meteor.call('clear_player_data', function (error, res) {
        if(res){
          window.location.href = "/";
        }
        else{
          alert('Hold your horses! The other player has not viewed the results yet! Click the New Game button in a few seconds!');
        }
      });
    }
  });

  Template.result_one_won.events({
    "click .new_game": function (event) {
      Meteor.call('clear_player_data', function (error, res) {
        if(res){
          window.location.href = "/";
        }
        else{
          alert('Hold your horses! The other player has not viewed the results yet! Click the New Game button in a few seconds!');
        }
      });
    }
  });

  Template.result_two_won.events({
    "click .new_game": function (event) {
      Meteor.call('clear_player_data', function (error, res) {
        if(res){
          window.location.href = "/";
        }
        else{
          alert('Hold your horses! The other player has not viewed the results yet! Click the New Game button in a few seconds!');
        }
      });
    }
  });

  Template.waiting_player_one.events({
    "click .refresh": function (event) {
       Meteor.call('check_result', '1', '2', function (error, res) {
        if(res == '0'){
          window.location.href = "/result_tie";
        }
        else if(res == '1'){
          window.location.href = "/result_one_won";
        }
        else if(res == '2'){
          window.location.href = "/result_two_won";
        }
        else if(res == 'waiting'){
          window.location.href = "/waiting_player_one";
        }
      });
    }
  });

  Template.waiting_player_two.events({
    "click .refresh": function (event) {
       Meteor.call('check_result', '2', '1', function (error, res) {
        if(res == '0'){
          window.location.href = "/result_tie";
        }
        else if(res == '1'){
          window.location.href = "/result_one_won";
        }
        else if(res == '2'){
          window.location.href = "/result_two_won";
        }
        else if(res == 'waiting'){
          window.location.href = "/waiting_player_two";
        }
      });
    }
  });

}
