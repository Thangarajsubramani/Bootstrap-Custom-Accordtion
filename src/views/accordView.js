var accordView = Backbone.View.extend({
   className: 'accordion',
   el: $('.accordion'),
   
    initialize: function() {
	
	//_.bindAll(this, 'render','render_error');
	this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'error', this.render_error);
	console.log(this.model);
	allPanels = $('.' + this.className +' > div').hide();
	$(allPanels[0]).show();
	block=1;
	},

    render: function () {
        return this;
    },
	
	events: {
    'click button[data-continue]': 'continueClicked'
    },
	
	continueClicked: function (e) {
    e.preventDefault();

	
	var thats = $(e.currentTarget)
	var labels=[];
	var values=[];
	console.log(e);
	var that=$(thats).parent()
	
	$(that).children("[data-value]").each(function (){
	
	values.push(this.value);
	}) ;
	$(that).children("[data-label]").each(function (){
	
	labels.push($(this).text());
	}) ;
	data=[];
	$(that).children("select, :selected").each(function (){
	
	if(this.value)
	data.push(this.value);
	else data.push(" ");
	
	}) ;
	
	$(that).children("input[type=text],textarea").each(function (){
	
	data.push(this.value);
	
	}) ;

	console.log(data);
	
	if (false === $('form').parsley().validate('block'+block)) {
        return;
		}
	
	block=block +1;
    allPanels.slideUp();
	//this.model.save({data:data});
	
	$(that).prev().html(function() {
	
	for(var index in labels) {
	var labeltag="<span>" + labels[index] +"</span>: "
	console.log(labeltag);
	}

	var valuetag="<span>" + values.join(" | ") +"</span>"
	
	var modify  ='<span style="position:relative;left:650px;"><a href="">Modify</a></span'
    
	if(typeof labeltag !== "undefined" && typeof valuetag !== "undefined") {
  return '<div><svg width="950" height="10"><line x1="0" y1="0" x2="950" y2="0" style="stroke: green;"/></svg></br>' + labeltag + valuetag + modify +'</div>';
   }
	
	
	});
	
	$(thats).parent().next().next().slideDown();
    return false;
	
    
     }
   	
});
