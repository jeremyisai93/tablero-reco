var home_points = 0;
var visit_points = 0;

var home_faults = 0;
var visit_faults = 0;

var periodo = 1;

var tiempo = 10;



$(document).ready(
    function() {
        $("#home-point").text(home_points);
        $("#visit-point").text(visit_points);
        ActiveClocks();
        $("#minutos-clock1").numeric()
    }
);

function HomeAdd(param){
	home_points += param;
	if (home_points < 0) {
		home_points = 0;
	}
	$("#home-point").text(home_points);
}

function VisitAdd(param){
	visit_points += param;
	if (visit_points < 0) {
		visit_points = 0;
	}
	$("#visit-point").text(visit_points);
}

function HomeAddFault(param){
	home_faults += param;
	if (home_faults < 0) {
		home_faults = 0;
	}
	$("#home-fault").text(home_faults);
}

function VisitAddFault(param){
	visit_faults += param;
	if (visit_faults < 0) {
		visit_faults = 0;
	}
	$("#visit-fault").text(visit_faults);
}

function AddPeriodo(param){
	periodo += param;
	if (periodo < 1) {
		periodo = 1;
	}
	$("#periodo").text(periodo);
}

function SetLado(lado){
	if (lado == '0') {
		$("#lado-izq").addClass('btn-danger');
		$("#lado-der").removeClass('btn-danger');
	}
	if (lado == '1') {
		$("#lado-der").addClass('btn-danger');
		$("#lado-izq").removeClass('btn-danger');
	}
}
function SetTime(){
	new_time= $("#minutos-clock1").val();
	if (new_time != ""){
		tiempo= parseFloat(new_time);
		ActiveClocks()
	}
}


//funcion para relojes

function get10min() {
   return new Date(new Date().valueOf() + tiempo * 60 * 1000);
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

	$clock1.countdown('pause');
	$clock2.countdown('pause');

	$('#btn-reset1').click(function() {
		$clock1.countdown(get10min());
		$clock1.countdown('pause');
		$clock2.countdown(get24seg());
		$clock2.countdown('pause');
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
		$clock1.countdown('resume');
	});
	$('#btn-reset14').click(function() {
		$clock2.countdown(get14seg());
		$clock1.countdown('resume');
	});

}

