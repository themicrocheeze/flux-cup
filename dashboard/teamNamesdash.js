const team1nameRep = nodecg.Replicant('team1name', {defaultValue: "Overwatch"});
const team2nameRep = nodecg.Replicant('team2name', {defaultValue: "Talon"});

const team1styleRep = nodecg.Replicant('team1style', {defaultValue: "FFFFFF"});
const team2styleRep = nodecg.Replicant('team2style', {defaultValue: "FFFFFF"});



function setTeamNames(){
    team1nameRep.value = document.getElementById('team1nameinput').value;
    team2nameRep.value = document.getElementById('team2nameinput').value;
}

function setTeamStyles(){
    team1styleRep.value = document.getElementById('team1styleinput').value;
    team2styleRep.value = document.getElementById('team2styleinput').value;
}