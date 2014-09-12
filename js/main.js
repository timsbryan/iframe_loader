var pages=[
];

$(function () {
	$.each(pages, function(index,value){
		$('iframe').attr('src', value);
	})

});

