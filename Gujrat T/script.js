function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Gt.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Jason Roy",
        "from": "GT",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://i.guim.co.uk/img/media/23e5fbe2828f475a5b7854c4ac64803f9c327155/0_5_2768_1662/master/2768.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=181b09e0c2e5206dc4916784360ddd25'></img>"
    },
    {
        "id": 2,
        "playerName": "Shreyas Iyer",
        "from": "GT",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://images.thequint.com/thequint%2F2023-02%2Fed41f983-492a-40c4-861a-cf2864a80298%2F__LI_0082.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Jos Buttler",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png'></img>"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/2885.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://static-files.cricket-australia.pulselive.com/headshots/440/10911-camedia.png'></img>"
    },
    {
        "id": 6,
        "playerName": "Trent Boult",
        "from": "GT",
        "price": "7.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/969.png'></img>"
    },
    {
        "id": 7,
        "playerName": "Sunil Narine",
        "from": "GT",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://www.kkr.in/static-assets/images/players/2020/11229.png?v=5.23&w=200'></img>"
    },
    {
        "id": 8,
        "playerName": "Yuzvendra Chahal",
        "from": "GT",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/111.png'></img>"
    },
    {
        "id": 9,
        "playerName": "Ben Stokes",
        "from": "GT",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/319700/319748.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Eoin Morgan",
        "from": "GT",
        "price": "7.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/197.png'></img>"
    },
    {
        "id": 11,
        "playerName": "Kagiso Rabada",
        "from": "GT",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/116.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Krunal Pandya",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://www.lucknowsupergiants.in/static-assets/images/players/63788.png?v=6.5'></img>"
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
            <p> ${player.description}</p>
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
