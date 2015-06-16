var theProblems;
var theKeys;


$(document).ready(function() {
	

    while (outputProblem(Math.floor(Math.random() * (theKeys.length + 1))) === false) {
    	;
    }
		
	theKeys = Object.keys(theProblems);
	
	
});


function outputProblem(theChosenOne) {
    var gotProblem = false;
    var gotSolution = false;


    if (theProblems[theKeys[theChosenOne]].indexOf("__EMPTY__") < 0) {

        $('#solution').text(theProblems[theKeys[theChosenOne]]);
        gotSolution = true;

    } else {
        $('#intro_solution,#solution').hide();
    }

    if (theKeys[theChosenOne].indexOf("__EMPTY__") < 0) {

        $('#problem').text(theKeys[theChosenOne]);
        gotProblem = true;

    } else {

        $('#intro_problem,#problem').hide();
    }

    if (gotProblem === true && gotSolution === true) {
        if (Math.random() >= 0.5) {
            $('#intro_problem,#problem').hide();
        } else {
            $('#intro_solution,#solution').hide();
        }
    }

    if (gotProblem === false && gotSolution === false) {

        return false;

    }

    return true;

}

