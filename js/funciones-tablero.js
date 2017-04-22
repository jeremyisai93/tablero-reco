var home_points = 0;
var visit_points = 0;

var home_faults = 0;
var visit_faults = 0;

var period = 1;



$(document).ready(
    function() {
        $("#home-point").text(home_points);
        $("#visit-point").text(visit_points);
        ActiveClocks();
    }
);

function HomeAdd(param){
	home_points += param;
	$("#home-point").text(home_points);
}

function VisitAdd(param){
	visit_points += param;
	$("#visit-point").text(visit_points);
}

function HomeAddFault(param){
	home_faults += param;
	$("#home-fault").text(home_faults);
}

function VisitAddFault(param){
	visit_faults += param;
	$("#visit-fault").text(visit_faults);
}


//funcion para relojes

function get10min() {
   return new Date(new Date().valueOf() + 10 * 60 * 1000);
}
function get24seg() {
   return new Date(new Date().valueOf() + 24 * 1000);
}
function get14seg() {
   return new Date(new Date().valueOf() + 14 * 1000);
}

function ActiveClocks(){

	var $clock1 = $('#clock1');
	var $clock2 = $('#clock2');

	$clock1.countdown(get10min(), function(event) {
		$(this).html(event.strftime('%M:%S'));
	});
	$clock2.countdown(
		get24seg(),
		function(event) {
			$(this).html(event.strftime('%S'));
		}
	);
	$('#btn-reset1').click(function() {
		$clock1.countdown(get10min());
		$clock2.countdown(get24seg());
	});

	$('#btn-pause1').click(function() {
		$clock1.countdown('pause');
		$clock2.countdown('pause');
	});

	$('#btn-resume1').click(function() {
		$clock1.countdown('resume');
		$clock2.countdown('resume');
	});
	$('#btn-reset24').click(function() {
		$clock2.countdown(get24seg());
	});
	$('#btn-reset14').click(function() {
		$clock2.countdown(get14seg());
	});

}

