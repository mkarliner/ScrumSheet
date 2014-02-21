Sprints = new Meteor.Collection2("sprints", {
	schema: {
		name: {
			type: "String",
		}
	}
});


Sprints.allow({
	insert: function() {
		return true;
	},
	remove: function(userId, docs) {
		// console.log("Remove ch",  docs[0].owner_id, Meteor.userId);
		return true;
	},
	update: function(){
		return true;
	},
	fetch: ['name']
});
