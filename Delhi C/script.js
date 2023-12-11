function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Delhi.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Shikhar Dhawan",
        "from": "DC",
        "price": "10.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Prithvi Shaw",
        "from": "DC",
        "price": "5.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://www.gobest.in/7/gobest/Rishabh%20Pant%201.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Kagiso Rabada",
        "from": "DC",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320300/320376.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Amit Mishra",
        "from": "DC",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/107.png'></img>"
    },
    {
        "id": 6,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/331100/331164.png'></img>"
    },
    {
        "id": 7,
        "playerName": "Ishant Sharma",
        "from": "DC",
        "price": "1.1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/359900/359960.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Steve Smith",
        "from": "DC",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://static-files.cricket-australia.pulselive.com/headshots/440/1075-camedia.png'></img>"
    },
    {
        "id": 9,
        "playerName": "Marcus Stoinis",
        "from": "DC",
        "price": "4.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321500/321596.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Shimron Hetmyer",
        "from": "DC",
        "price": "1.7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/210.png'></img>"
    },
    {
        "id": 11,
        "playerName": "Kane Williamson",
        "from": "DC",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://i.pinimg.com/originals/f1/9e/10/f19e106242fe49bab7e40183af11063a.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Ripal Patel",
        "from": "DC",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://crictoday.com/wp-content/uploads/2023/03/Ripal-Patel.jpg'></img>"
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
