function patch(){
  $('.video .item').each(function(index, element) {
	var title = $('.itemTitle a', element).text();
    if (title.indexOf("マリオメーカー") > -1) {
      $(element).remove();
    }
  });
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);