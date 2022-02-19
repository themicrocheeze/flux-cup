const team1nameRep = nodecg.Replicant('team1name');
const team2nameRep = nodecg.Replicant('team2name');

const team1nameEl = document.getElementById('overwatch_team_name');
const team2nameEl = document.getElementById('talon_team_name');

const team1styleRep = nodecg.Replicant('team1style');
const team2styleRep = nodecg.Replicant('team2style');


team1nameRep.on('change', (newVal) => {
	team1nameEl.innerHTML = newVal;
})

team2nameRep.on('change', (newVal) => {
	team2nameEl.innerHTML = newVal;
})

team1styleRep.on('change', (newVal) =>{
    team1nameEl.style.backgroundColor = newVal;
})

team2styleRep.on('change', (newVal) =>{
    team2nameEl.style.backgroundColor = newVal;
})