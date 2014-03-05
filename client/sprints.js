Template.sprints.helpers({
	sprints: function(){
		console.log("Finding sprints", Sprints.find({}).fetch());
		return Sprints.find({});
	},
});


Template.sprint.helpers({
	sprint: function() {
		var sid = Session.get('currentSprintId');
		return Sprints.findOne({_id: sid});
	},
	tasks: function(sprint) {
		console.log("list for sprint: ", sprint);
		return Tasks.find({sprint_id: sprint._id});
	}
});

Template.create_sprint.helpers({
	testvar: function() {
		console.log("Got here")
	}
});