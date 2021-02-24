-
-
/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawGradeChart);

function drawGenderChart() {
    var data = google.visualization.arrayToDataTable([
    ['Gender', 'Count', { role: 'style' }, { role: 'annotation' }],
    ['Female', 7, 'color: #E93F33', '7'],
    ['Male', 15, 'color: #E93F33', '15']
    ]);

    var options = {
    chartArea: {width: '65%'},
    legend: { position: "none" }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_gender'));
    chart.draw(data, options);
}

function drawGradeChart() {
    var data = google.visualization.arrayToDataTable([
    ['Grade', 'Count', { role: 'style' }, { role: 'annotation' }],
    ['Freshman', 9, 'color: #E93F33', '9'],
    ['Sophomore', 8, 'color: #E93F33', '8'],
    ['Junior', 3, 'color: #E93F33', '3'],
    ['Senior', 2, 'color: #E93F33', '2']
    ]);

    var options = {
    chartArea: {width: '65%'},
    legend: { position: "none" }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_grades'));
    chart.draw(data, options);
}