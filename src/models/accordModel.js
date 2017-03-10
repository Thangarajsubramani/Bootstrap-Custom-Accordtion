var accordModel = Backbone.Model.extend({

    url: '/information',

	validate: function (attrs) {
	
	 console.log(attrs);
	}

});
