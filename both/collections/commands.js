
Commands  = new Mongo.Collection("commands");

Commands.allow({
		insert:function(){
			return true;
		}

});