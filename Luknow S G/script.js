function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'LSG.html';
}

const players = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "LSG",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://img.redbull.com/images/c_crop,w_1600,h_800,x_0,y_14,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/4/18/dzzrqdgdjp8xmidszpz5/kl-rahul-india-cricket-team-opening-batsman'></img>"
    },
    {
        "id": 2,
        "playerName": "Chris Gayle",
        "from": "LSG",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://w7.pngwing.com/pngs/213/541/png-transparent-chris-gayle-caribbean-premier-league-jamaica-tallawahs-jamaica-national-cricket-team-cricket-tshirt-sport-sports-thumbnail.png'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "LSG",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://www.pngguru.in/storage/uploads/images/Rishabh%20pant%20indian%20cricket%20player%20free%20png_1669451098_1688557580.webp'></img>"
    },
    {
        "id": 4,
        "playerName": "Shardul Thakur",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Jonny Bairstow",
        "from": "LSG",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319700/319794.png'></img>"
    },
    {
        "id": 6,
        "playerName": "Kagiso Rabada",
        "from": "LSG",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/116.png'></img>"
    },
    {
        "id": 7,
        "playerName": "Shakib Al Hasan",
        "from": "LSG",
        "price": "6.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://www.pngguru.in/storage/uploads/images/Shakib%20Al%20Hasan%20Bangladeshi%20cricket%20player%20free%20HD%20PNG_1696592199_95921327.webp'></img>"
    },
    {
        "id": 8,
        "playerName": "Shreyas Iyer",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://i2.wp.com/www.iplleague.com/wp-content/uploads/2018/12/shreyas-iyer2.png?fit=284%2C284'></img>"
    },
    {
        "id": 9,
        "playerName": "Trent Boult",
        "from": "LSG",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/969.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Mayank Agarwal",
        "from": "LSG",
        "price": "6.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://www.punjabkingsipl.in/static-assets/images/players/10115.png?v=5.6'></img>"
    },
    {
        "id": 11,
        "playerName": "Andre Russell",
        "from": "LSG",
        "price": "9.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Mohammed Shami",
        "from": "LSG",
        "price": "5.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://resources.pulse.icc-cricket.com/players/284/94.png'></img>"
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
