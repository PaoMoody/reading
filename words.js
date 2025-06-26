<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Word Building Game</title>
  <style>
    body {
      font-family: 'Avenir', sans-serif;
      background-color: #ffffff;
      margin: 0;
      padding: 40px;
      text-align: center;
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }
    .card {
      width: 80px;
      height: 100px;
      margin: 10px;
      background-color: #fffbe9;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #5e98ab;
      border-radius: 12px;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
    }
    .card img {
      max-width: 90%;
      max-height: 90%;
    }
    .word-image {
      margin-top: 30px;
      max-width: 200px;
      display: none;
    }
    .controls {
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background-color: #ffc764;
      color: #000;
      cursor: pointer;
      font-family: 'Avenir', sans-serif;
    }
    button:hover {
      background-color: #e47e00;
      color: white;
    }
  </style>
</head>
<body>
  <h1>Build the Word</h1>
  <div class="card-container" id="cards"></div>
  <div class="controls">
    <button id="soundOutBtn">Sound It Out</button>
    <button id="revealBtn">Reveal Word</button>
    <button id="nextWordBtn">Next Word</button>
  </div>
  <img id="wordImage" class="word-image" alt="Word Visual" />

  <script>
    const wordData = [
      {
        word: "cat",
        parts: [
          { img: "C.png", audio: "C.mp3" },
          { img: "short-a.png", audio: "short-a.mp3" },
          { img: "T.png", audio: "T.mp3" }
        ],
        image: "cat.png"
      },
      {
        word: "bat",
        parts: [
          { img: "B.png", audio: "B.mp3" },
          { img: "short-a.png", audio: "short-a.mp3" },
          { img: "T.png", audio: "T.mp3" }
        ],
        image: "bat.png"
      }
      // Add more words here in the same format
    ];

    let currentIndex = 0;
    const cardContainer = document.getElementById('cards');
    const wordImage = document.getElementById('wordImage');
    const soundOutBtn = document.getElementById('soundOutBtn');
    const revealBtn = document.getElementById('revealBtn');
    const nextWordBtn = document.getElementById('nextWordBtn');

    function showWord(index) {
      const currentWord = wordData[index];
      cardContainer.innerHTML = '';
      wordImage.style.display = 'none';
      currentWord.parts.forEach(part => {
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.src = part.img;
        img.alt = part.img;
        card.appendChild(img);
        cardContainer.appendChild(card);
      });
    }

    revealBtn.addEventListener('click', () => {
      const currentWord = wordData[currentIndex];
      wordImage.src = currentWord.image;
      wordImage.alt = currentWord.word;
      wordImage.style.display = 'block';
    });

    soundOutBtn.addEventListener('click', () => {
      const currentWord = wordData[currentIndex];
      currentWord.parts.forEach((part, i) => {
        const audio = new Audio(part.audio);
        setTimeout(() => {
          audio.play();
        }, i * 800);
      });
    });

    nextWordBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % wordData.length;
      showWord(currentIndex);
    });

    // Load the first word
    showWord(currentIndex);
  </script>
</body>
</html>
