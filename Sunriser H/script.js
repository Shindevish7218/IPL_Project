function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Sunriser.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Kane Williamson",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://d1af7m13b2f34i.cloudfront.net/media/kane-williamson-new-zealand-sportstiger-1691758846112-original.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Jonny Bairstow",
        "from": "SRH",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://league11-media-bucket.s3.amazonaws.com/media/players/photos/Jonny-Bairstow-CWC19.png'></img>"
    },
    {
        "id": 3,
        "playerName": "Rashid Khan",
        "from": "SRH",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://www.pngguru.in/storage/uploads/images/Rashid%20Khan%20Afghan%20cricketer%20free%20transparent%20PNG%20Photo_1695979412_465309417.webp'></img>"
    },
    {
        "id": 4,
        "playerName": "T Natarajan",
        "from": "SRH",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Manish Pandey",
        "from": "SRH",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323000/323052.png'></img>"
    },
    {
        "id": 6,
        "playerName": "Wriddhiman Saha",
        "from": "SRH",
        "price": "1.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/375.png'></img>"
    },
    {
        "id": 7,
        "playerName": "Jason Holder",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://www.hindustantimes.com/static-content/1y/cricket-logos/players/jason-holder.png'></img>"
    },
    {
        "id": 8,
        "playerName": "Bhuvneshwar Kumar",
        "from": "SRH",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/116.png'></img>"
    },
    {
        "id": 9,
        "playerName": "Abdul Samad",
        "from": "SRH",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://league11-media-bucket.s3.amazonaws.com/media/players/photos/abdulsamad.png'></img>"
    },
    {
        "id": 10,
        "playerName": "Khaleel Ahmed",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322200/322268.png'></img>"
    },
    {
        "id": 11,
        "playerName": "Siddarth Kaul",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/64.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Priyam Garg",
        "from": "SRH",
        "price": "1.9 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://cricclubs.com/documentsRep/profilePics/5349522c-555e-46f1-ba98-c61baba665ad.png'></img>"
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
