function gameObject(){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors: [
                "Black",
                "White"
            ],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },

                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName:"Charlotte Hornets",
            colors: [
                "Turquoise",
                "Purple"
            ],
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },

                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },

                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },

                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

function getAllPlayers(){
    let homePlayers = gameObject()["home"]["players"];
    let awayPlayers = gameObject()["away"]["players"];
    return {...homePlayers, ...awayPlayers};
}

function numPointsScored(playerName){
    const allPlayers = getAllPlayers();

    return allPlayers[playerName]["points"];
}

function shoeSize(playerName){
    const allPlayers = getAllPlayers();

    return allPlayers[playerName]["shoe"];
}

function teamColors(teamName){
    if(gameObject()["home"]["teamName"] === teamName){
        return gameObject()["home"]["colors"];
    }

    else if(gameObject()["away"]["teamName"] === teamName){
        return gameObject()["away"]["colors"];
    }
}

function teamNames (){
    return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]];
}

function playerNumbers(teamName){
    let playerNumbers = [];
    
    if(gameObject()["home"]["teamName"] === teamName){
        let homePlayers = gameObject()["home"]["players"];

        Object.keys(homePlayers).forEach(function(key) {
            playerNumbers.push(homePlayers[key]["number"]);
        });
    }

    else if(gameObject()["away"]["teamName"] === teamName){
        let awayPlayers = gameObject()["away"]["players"];

        Object.keys(awayPlayers).forEach(function(key) {
            playerNumbers.push(awayPlayers[key]["number"]);
        });
    }

    return playerNumbers;
}

function playerStats(playerName){
    return getAllPlayers()[playerName];
}

function bigShoeRebounds(){
    let shoeSize = 0;
    let name = "";

    let allPlayers = getAllPlayers();

    Object.keys(allPlayers).forEach(function(key) {
        if(allPlayers[key]["shoe"] > shoeSize){
            shoeSize = allPlayers[key]["shoe"];
            name = key;
        }
    });

    return allPlayers[name]["rebounds"];
}
