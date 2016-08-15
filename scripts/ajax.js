var JSONURL ='https://spreadsheets.google.com/feeds/list/1yUkYl1H2imvxxyDTPTAz5bkauHQC-Ch5BaWUuYw2vV8/1/public/basic?alt=json';

$.ajax({
	url:JSONURL,
	success: function(data){
		readDataAndAppend(data);
	}
})



function readDataAndAppend(data){
	var rows={};
	var cells = data.feed.entry;

	for (var i=0; i < cells.length; i++){
		var rowObj ={};
		rowObj.timestamp= cells[i].title.$t;
		var rowCols= cells[i].content.$t.split(',');
		for (var j=0; j < rowCols.length; j++){
			var keyVal = rowCols[j].split(':');
			rowObj[keyVal[0].trim()]= keyVal[1].trim();

		}
		rows.push(rowObj);

	}
	console.log(rows)
}

