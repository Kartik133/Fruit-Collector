class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    /*getScore() {
        playerScoreRef = database.ref("score");
        playerScoreRef.n("value",(data) =>{
            score = data.val();
        });
    }

    updateScore(count) {
        data.ref("/player/"+playerIndex+"/score").update({
            playerCount:count
        });
    }*/

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
