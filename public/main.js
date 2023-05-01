// GLOBALS

var thumbUp = document.getElementsByClassName("fa-thumbs-up")
var thumbDown = document.getElementsByClassName("fa-thumbs-down")
var trash = document.getElementsByClassName("fa-trash")
let randomStorage1 = document.querySelector('#word-of-the-day')
let randomStorage2 = document.querySelector("#word-definition")
let revealButton = document.querySelector("#definition-reveal")
let newWord = document.querySelector("#refresh")
const form = document.querySelector('form')

// OBJECTS

const words = [
  {
    word: 'Benevolent',
    definition: 'Well-meaning and kindly'
  },
  {
    word: 'Capricious',
    definition: 'Given to sudden and unaccountable changes of mood or behavior'
  },
  {
    word: 'Didactic',
    definition: 'Intended to teach, particularly in having moral instruction as an ulterior motive'
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for a very short time'
  },
  {
    word: 'Fortuitous',
    definition: 'Happening by chance or luck'
  },
  {
    word: 'Gregarious',
    definition: 'Fond of company; sociable'
  },
  {
    word: 'Hackneyed',
    definition: 'Lacking in originality; overused'
  },
  {
    word: 'Ineffable',
    definition: 'Too great or extreme to be expressed or described in words'
  },
  {
    word: 'Jubilant',
    definition: 'Feeling or expressing great happiness and triumph'
  },
  {
    word: 'Kinetic',
    definition: 'Relating to or resulting from motion'
  },
  {
    word: 'Languid',
    definition: 'Displaying or having a disinclination for physical exertion or effort; slow and relaxed'
  },
  {
    word: 'Malleable',
    definition: 'Able to be hammered or pressed into shape without breaking or cracking; easily influenced'
  },
  {
    word: 'Nefarious',
    definition: 'Wicked, evil, or villainous'
  },
  {
    word: 'Ostentatious',
    definition: 'Characterized by pretentious or showy display; designed to impress'
  },
  {
    word: 'Pernicious',
    definition: 'Having a harmful effect, especially in a gradual or subtle way'
  },
  {
    word: 'Quixotic',
    definition: 'Exceedingly idealistic; unrealistic and impractical'
  },
  {
    word: 'Rancorous',
    definition: 'Full of bitterness or resentment; deeply malevolent'
  },
  {
    word: 'Serendipitous',
    definition: 'Occurring or discovered by chance in a happy or beneficial way'
  },
  {
    word: 'Trepidatious',
    definition: 'Feeling fear or apprehension about something that may happen'
  },
  {
    word: 'Ubiquitous',
    definition: 'Existing or being everywhere, especially at the same time'
  },
  {
    word: 'Voracious',
    definition: 'Having a very eager approach to an activity, particularly eating or reading'
  },
  {
    word: 'Whimsical',
    definition: 'Playfully quaint or fanciful, especially in an appealing and amusing way'
  },
  {
    word: 'Xenophobic',
    definition: 'Having or showing a dislike of or prejudice against people from other countries'
  },
  {
    word: 'Yearning',
    definition: 'A strong feeling of wanting or desiring something, especially something that is unattainable or distant'
  },
  {
    word: 'Zealous',
    definition: 'Showing great enthusiasm or devotion to a particular cause, ideal, or goal'
  },
  {
    word: 'Apathetic',
    definition: 'Showing or feeling no interest, enthusiasm, or concern'
  },
  {
    word: 'Belligerent',
    definition: 'Hostile and aggressive; ready to start a fight'
  },
  {
    word: 'Candid',
    definition: 'Truthful and straightforward; frank'
  },
  {
    word: 'Diligent',
    definition: 'Showing care and conscientiousness in one’s work or duties'
  },
  {
    word: 'Eccentric',
    definition: 'Unconventional and slightly strange; quirky'
  },
  {
    word: 'Fastidious',
    definition: 'Very attentive to detail; meticulous'
  },
  {
    word: 'Garrulous',
    definition: 'Excessively or pointlessly talkative; loquacious'
  },
  {
    word: 'Hapless',
    definition: 'Unfortunate and deserving of pity; unlucky'
  },
  {
    word: 'Inscrutable',
    definition: 'Difficult to understand; mysterious'
  },
  {
    word: 'Jocular',
    definition: 'Characterized by joking or good humor'
  },
  {
    word: 'Keen',
    definition: 'Sharp or penetrating; highly developed or intense'
  },
  {
    word: 'Lackadaisical',
    definition: 'Lacking enthusiasm or determination; carelessly lazy'
  },
  {
    word: 'Mendacious',
    definition: 'Dishonest or untruthful; deceitful'
  },
  {
    word: 'Nostalgic',
    definition: 'Feeling a sentimental longing for a past time or event'
  },
  {
    word: 'Obtuse',
    definition: 'Slow to understand; dull-witted; insensitive'
  },
  {
    word: 'Pensive',
    definition: 'Engaged in deep or serious thought; contemplative'
  },
  {
    word: 'Querulous',
    definition: 'Complaining in a petulant or whining manner'
  },
  {
    word: 'Risible',
    definition: 'Causing laughter; laughable; amusing'
  },
  {
    word: 'Sardonic',
    definition: 'Sarcastic, cynical, and mocking in a bitter or scornful way'
  },
  {
    word: 'Taciturn',
    definition: 'Reserved or uncommunicative in speech; saying little'
  },
  {
    word: 'Unctuous',
    definition: 'Excessively flattering or ingratiating; oily or greasy in texture or appearance'
  },
  {
    word: 'Vapid',
    definition: 'Lacking flavor, zest, or interest; dull or boring'
  },
  {
    word: 'Winsome',
    definition: 'Charming, attractive, or appealing in appearance or character'
  },
  {
    word: 'Xeric',
    definition: 'Of, relating to, or adapted to a dry environment; arid'
  },
  {
    word: 'Yearlong',
    definition: 'Lasting or continuing for a whole year'
  },
  {
    word: 'Zeitgeist',
    definition: 'The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time'
  }
];

// FUNCTIONS

form.addEventListener('submit', (event) => {
  const nameInput = document.querySelector('input[name="name"]');
  const wordInput = document.querySelector('input[name="word"]');
  const definitionInput = document.querySelector('input[name="definition"]');
  
  if (!nameInput.value || !wordInput.value || !definitionInput.value) {
    event.preventDefault(); // prevent the form from submitting
    alert('Please fill in all the fields.'); // display an error message to the user
  }
});

function randomizer() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  let randomDefinitionIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomWordIndex].word;
  let randomDefinition = words[randomDefinitionIndex].definition;
  randomStorage1.innerText = randomWord;
  randomStorage2.innerText = randomDefinition;
}

randomizer()

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(e){ // we pass in 'e' because it grants us access to the data attribute of the tags in the HTML; we are targetting the data set
        // const name = this.parentNode.parentNode.childNodes[1].innerText
        // const word = this.parentNode.parentNode.childNodes[3].innerText;
        // const definition = this.parentNode.parentNode.childNodes[5].innerText; 
        // using parentNodes in this way can result is overcomplication, as you would need to add more nodes if you began to style or add elements into the HTML
        
        const _id = e.target.dataset.id // _id is a property created by MongoDB whenver a post request successfully insert in object.
        console.log(_id)
        fetch('like', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            // 'name': name, 
            // 'word': word,
            // 'definition': definition,
            // if the value of the property is the same name as the 'key,' then the object will know that the pairing is the same.

            _id // now we only need to stringify the id instead of all the properties of the object line by line
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(e){
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('unlike', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        _id
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(e){
    const _id = e.target.dataset.id
    fetch('delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id
      })
    }).then(function (response) {
      window.location.reload();
    });
  });
});

// BUTTONS

revealButton.addEventListener('click', () => {
  randomStorage2.className = '';
});

newWord.addEventListener('click', () => {
  location.reload();
});