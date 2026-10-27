// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1328',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no babee!',
      'no try 1328',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      'Bhbk ya Hana♥️',
      'Forever will be together ♾️',
      'Rabena ykhleky lya ya habibty',
      'Rabena yhmeky lena♥️',
      'I will always choose you',
      'I will always love you',
      'One day we’ll be in the same home',
      'Ana maaky fe kol haga fl denya ya habibty eghlty wna asl7 kol haga♥️',
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `Bosy baa de message ashan t3rfe goz’ soghyr awy awy mn hobby leky w ashan lw hsly haga fe ay w’t afdl maaky b any good memory ya habibty. Ayzk t3rfe eny etwldt mn youm ma dkhlte hyaty aayzk t3rfe enty ahla haga hslt fe hyaty mn youm ma etwldt enty msh bs habibty aw keda la enty my future wife w benty w best mum for my children in the future ana maarftsh yaany eh hob gher maaky w einy msh htshof gherk wla alby wla 3’ly
Ana bhbk awy ya habibty w nfsy a3esh kol hyaty maaky wallahy
Lesa mkhlstsh fe second edition keep reading ya habibty😂♥️
This is for my everything, my Hana.♥️
To the girl who means more to me than words could ever explain, the one who makes my heart feel things I never knew it could feel. You’re not just someone I love,,,,you’re the person I want to share my happiness with and being my wife is my target, the one I want beside me through every little moment in life, and the one I want to keep choosing, over and over again.

If I could give you one thing in this world, it would be the ability to see yourself through my eyes, even for a second, so you could understand just how special you are to me and how much love my heart holds for you. You’ve become such a beautiful part of my life no no you’re the only beautiful part of my life btw you took my all heart, and somehow, even the smallest things remind me of you.

No matter how many times I tell you I love you, I’ll always feel like those words are too small for what I carry in my heart. You’re my favorite thought, my comfort, my happiness, and the person I wish to make a thousand beautiful memories with till being at the same home with our children sharing memories traveling and having good time 

You’ll always be my Hana, my favorite person, and a piece of my heart that I could never replace. And if life gave me a thousand chances to choose who I want by my side, I’d still find my way to you, every single time. I love you more than I could ever put into words ya Noureiny♥️`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
