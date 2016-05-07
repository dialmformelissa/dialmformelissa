$(document).ready(function(){

	$('input').change(function(){
        var Roku = $('.Roku:checked').length
        var Apple = $('.Apple:checked').length 
        $('.Roku_results').text(Roku)
        $('.Apple_results').text(Apple)                        
    })

});