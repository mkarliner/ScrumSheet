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
	}
});