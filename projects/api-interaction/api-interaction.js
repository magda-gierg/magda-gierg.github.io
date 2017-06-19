
function getProverb() {

$(document).ready(function() {
  $.ajax({
      url: "https://eda-te-reo.herokuapp.com/api/proverbs"
  }).then(function(data) {
     $('.proverb-source').text(data.source);
     $('.proverb-translation').text(data.translation);
	 });
});

}
