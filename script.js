$(document).ready(function(){

	var url="https://api.covid19india.org/data.json"
	
	/*var url="https://api.covid19india.org/state_district_wise.json"*/

	$.getJSON(url,function(data)
	{
		console.log(data)

		var total_active,total_recovered,total_deaths,total_confirmed
		total_active=data.statewise[1].active
		total_confirmed=data.statewise[1].confirmed
		total_recovered=data.statewise[1].recovered
		total_deaths=data.statewise[1].deaths

		$("#Active").append(total_active)
		$("#Confirmed").append(total_confirmed)
		$("#Recovered").append(total_recovered)
		$("#Deaths").append(total_deaths)

	})
})
