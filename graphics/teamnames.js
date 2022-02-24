const team1nameRep = nodecg.Replicant('team1name');
const team2nameRep = nodecg.Replicant('team2name');

const team1nameEl = document.getElementById('overwatch_team_name');
const team2nameEl = document.getElementById('talon_team_name');

const team1scoreboxEl = document.getElementById('overwatchScore');
const team2scoreboxEl = document.getElementById('talonScore');

const team1styleRep = nodecg.Replicant('team1style');
const team2styleRep = nodecg.Replicant('team2style');

const team1text = nodecg.Replicant('team1textcolor');
const team2text = nodecg.Replicant('team2textcolor');



team1nameRep.on('change', (newVal) => {
	team1nameEl.innerHTML = newVal;
})

team2nameRep.on('change', (newVal) => {
	team2nameEl.innerHTML = newVal;
})

team1styleRep.on('change', (newVal) =>{
    team1nameEl.style.backgroundColor = newVal;
    team1scoreboxEl.style.backgroundColor = newVal;
})

team2styleRep.on('change', (newVal) =>{
    team2nameEl.style.backgroundColor = newVal;
    team2scoreboxEl.style.backgroundColor = newVal;
})

team1text.on('change', (newVal) =>{
    team1nameEl.style.color = newVal;
    team1scoreboxEl.style.color = newVal;
    team1nameEl.style.boxShadow = "5px 5px 5px 5px " + newVal;
    team1scoreboxEl.style.boxShadow = "5px 5px 5px 5px " + newVal;
})

team2text.on('change', (newVal) =>{
    team2nameEl.style.color = newVal;
    team2scoreboxEl.style.color = newVal;
    team2nameEl.style.boxShadow = "5px 5px 5px 5px " + newVal;
    team2scoreboxEl.style.boxShadow = "5px 5px 5px 5px " + newVal;
})