Meteor.startup(function(){
	Meteor.subscribe("reports");
	Meteor.subscribe("sprints");
	Meteor.subscribe("tasks");
	Meteor.subscribe("allUserData");
	
	
	// 
	// 
	// ReportsForm.hooks({

	// });
	ReportsForm.hooks ({
		before: {
	      remove: function(id) {
			console.log("Removing", id);
	        var name = Reports.findOne(id).who;
	        return confirm("Remove " + name + "?");
	      }
	    },
		after: {
			insert: function(error, result) {
				console.log("Returning to root");
				Meteor.Router.to("/");
			},
			remove: function(error, result) {
				Meteor.Router.to("/");
			},
			update: function(error, result) {
					console.log("Returning to root");
				Meteor.Router.to("/");
			}
		}
		
	});
	
	TasksForm.hooks({
		before: {
			insert: function(doc) {
				doc.sprint_id = Session.get("currentSprintId");
				return doc;
			}
		}
	});
	
});



ReportsForm = new AutoForm(Reports);
UsersForm = new AutoForm(UserSchema);
SprintsForm = new AutoForm(Sprints);
TasksForm = new AutoForm(Tasks);


UsersForm.hooks ({

	onSubmit: function(result, set, record) {
		console.log("US: ", result, set, record);
		// Meteor.users.update({_id: record._id}, {$set: {profile: new Object() }})
		Meteor.users.update({_id: record._id},  {$set: {"profile.team": result.profile.team, "profile.authorised": result.profile.authorised, username: result.username, "emails.0.address": result.email }});
		Meteor.Router.to("/");
	}
});

Accounts.ui.config({

  passwordSignupFields: 'USERNAME_AND_EMAIL'
});