function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'mi.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/800px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jasprit_Bumrah_%284%29.jpg/220px-Jasprit_Bumrah_%284%29.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320107.png'></img>"
    },
    {
        "id": 4,
        "playerName": "Quinton de Kock",
        "from": "MI",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://i.pinimg.com/736x/f0/d3/e9/f0d3e9ca1aae4e7f6c120e681270eef0.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7OoCYP7j9gRZ-EjRcfoWpsMuPts3OVvKkV__-HVgTQ&s'></img>"
    },
    {
        "id": 6,
        "playerName": "Krunal Pandya",
        "from": "MI",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://static.indiatvnews.com/ins-web/images/gettyimages-1063457878-1550305396.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Trent Boult",
        "from": "MI",
        "price": "6.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://static.indiatvnews.com/ins-web/images/trent-boult-1540886816.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Suryakumar Yadav",
        "from": "MI",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png'></img>"
    },
    {
        "id": 9,
        "playerName": "Rahul Chahar",
        "from": "MI",
        "price": "3.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://www.mumbaiindians.com/static-assets/images/players/small/66823.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "2.6 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png'></img>"
    },
    {
        "id": 11,
        "playerName": "Adam Milne",
        "from": "MI",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/434.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Jaydev Unadkat",
        "from": "MI",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://cricket.upcomingwiki.com/public/images/gallery/16652.png'></img>"
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
            <p>Playing ${player.isPlaying ? 'Yes' : 'No'}</p>
            <p> ${player.description}</p>
            <p>${player.Image}</p>
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
