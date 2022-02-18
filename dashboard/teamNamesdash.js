const team1nameRep = nodecg.Replicant('team1name', {defaultValue: "Overwatch"});
const team2nameRep = nodecg.Replicant('team2name', {defaultValue: "Talon"});



function setTeamNames(){
    team1nameRep.value = document.getElementById('team1nameinput').value;
    team2nameRep.value = document.getElementById('team2nameinput').value;
}