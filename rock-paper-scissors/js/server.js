Players = new Mongo.Collection("players");

if (Meteor.isServer) {

	Meteor.methods({

		save_rps_selection: function (player, rps_selection){
			Players.remove({ player_num : player });
			Players.insert({
		      player_num: player,
		      selection: rps_selection,
		      viewed_result: false
		    });
      		return true;
		},

		check_result: function(player, opponent){
			var player_ready = Players.findOne({"player_num":opponent});

			if (player_ready == undefined){
				return 'waiting';
			}
			else{

				var opponent_selection = Players.findOne({"player_num":opponent}).selection;
				var player_selection = Players.findOne({"player_num":player}).selection;

				//update viewed_result field
				var player_id = Players.findOne({"player_num":player})._id;
				Players.update(
				   { _id: player_id },
				   {$set: {viewed_result: true}}
				);

				// if returning 0, it means there is a tie!

				if(player_selection == 'Rock'){
					if(opponent_selection == 'Rock'){
						return "0";
					}
					else if(opponent_selection == 'Paper'){
						return opponent;
					}
					else if(opponent_selection == 'Scissors'){
						return player;
					}
				}
				else if(player_selection == 'Paper'){
					if(opponent_selection == 'Rock'){
						return player;
					}
					else if(opponent_selection == 'Paper'){
						return "0";
					}
					else if(opponent_selection == 'Scissors'){
						return opponent;
					}
				}
				else if(player_selection == 'Scissors'){
					if(opponent_selection == 'Rock'){
						return opponent;
					}
					else if(opponent_selection == 'Paper'){
						return player;
					}
					else if(opponent_selection == 'Scissors'){
						return "0";
					}
				}

			}
		},

		clear_player_data: function(){

			var player_one_viewed = Players.findOne({"player_num":'1'});
			var player_two_viewed = Players.findOne({"player_num":'2'});

			// check if data already cleared
			if(player_one_viewed == undefined && player_two_viewed == undefined){
				return true;
			}

			if(player_one_viewed.viewed_result == player_two_viewed.viewed_result){
				Players.remove({});
				return true;
			}
			else{
				return false;
			}

		}

	});

}