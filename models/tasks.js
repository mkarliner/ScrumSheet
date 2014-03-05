Tasks = new Meteor.Collection2("tasks", {
	schema: {
		name: {
			type: "String",
		},
		sprint_id: {
			type: "String",
			// autoValue: function() {
			// 	return Session.get("currentSprintId");
			// },
			optional: true,
		},
		priority: {
			type: "Integer"
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


// Tasks.beforeInsert = function(obj) {
// 
// 	obj.sprint_id = Session.get("currentSprintId");
// 	console.log("Before task inserts: ", obj);
// 	return obj;
// };