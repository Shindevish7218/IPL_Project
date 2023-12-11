function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'panjab.html';
}

const players = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "PK",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://img.redbull.com/images/c_crop,w_1600,h_800,x_0,y_14,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/4/18/dzzrqdgdjp8xmidszpz5/kl-rahul-india-cricket-team-opening-batsman'></img>"
    },
    {
        "id": 2,
        "playerName": "Chris Gayle",
        "from": "PK",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://www.punjabkingsipl.in/static-assets/images/players/1201.png?v=5.6'></img>"
    },
    {
        "id": 3,
        "playerName": "Mayank Agarwal",
        "from": "PK",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://league11-media-bucket.s3.amazonaws.com/media/players/photos/mayank-agarwal.png'></img>"
    },
    {
        "id": 4,
        "playerName": "Nicholas Pooran",
        "from": "PK",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320109.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Mohammed Shami",
        "from": "PK",
        "price": "4.8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://static-files.cricket-australia.pulselive.com/headshots/288/10913-camedia.png'></img>"
    },
    {
        "id": 6,
        "playerName": "Khaleel Ahmed",
        "from": "PK",
        "price": "5.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322200/322268.png'></img>"
    },
    {
        "id": 7,
        "playerName": "Jhye Richardson",
        "from": "PK",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://league11-media-bucket.s3.amazonaws.com/media/players/photos/jhye-richardson.png'></img>"
    },
    {
        "id": 8,
        "playerName": "Riley Meredith",
        "from": "PK",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://league11-media-bucket.s3.amazonaws.com/media/players/photos/riley-meredith.png'></img>"
    },
    {
        "id": 9,
        "playerName": "Mandeep Singh",
        "from": "PK",
        "price": "1.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://cricclubs.com/documentsRep/profilePics/f49d6e35-84cf-4324-815f-0d464b27e46a.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Murugan Ashwin",
        "from": "PK",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://pbs.twimg.com/media/CfnFxMwUsAAHdXx.png'></img>"
    },
    {
        "id": 11,
        "playerName": "Fabian Allen",
        "from": "PK",
        "price": "75 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321900/321999.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Arshdeep Singh",
        "from": "PK",
        "price": "1.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/100364/284/4698.png'></img>"
    }
]


let currentPlayerIndex = 0;

function showPlayerInfo() {
    const player = players[currentPlayerIndex];
    const playerInfoElement = document.getElementById('playerInfo');

    if (player) {
        playerInfoElement.innerHTML = `
            <h2>${player.playerName}</h2>
            <p>Team: ${player.from}</p>
            <p>Price: ${player.price}</p>
            <p>Playing: ${player.isPlaying ? 'Yes' : 'No'}</p>
            <p>${player.description}</p>
            <p> ${player.Image}</p>
        `;
    } else {
        playerInfoElement.innerHTML = '<h2>No more players in this team<br>Please Click Back To Page</h2>';
    }

    currentPlayerIndex++;
}

function showNextPlayer() {
    const playerInfoElement = document.getElementById('playerInfo');
    playerInfoElement.innerHTML = '';
    showPlayerInfo();
}
