Tasks = new Meteor.Collection2("tasks", {
	schema: {
		name: {
			type: "String",
		}
	}
});


Tasks.allow({
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
