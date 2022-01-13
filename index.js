const soundClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      class: 'buttonleft drum-pad'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      class: 'button drum-pad'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      class: 'button4 drum-pad'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      class: 'buttonbottomleft drum-pad'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      class: 'buttonbottomright drum-pad'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      class: 'button3 drum-pad'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      class: 'button2 drum-pad'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      class: 'button1 drum-pad'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      class: 'buttonright drum-pad'
    }
  ];  

function App(){

    const [displayText, setDisplayText] = React.useState('Welcome to the show');

    return (
        <div className='all'>
        <div className='container' id='drum-machine'>
            <div className="display" id='display'>{displayText}</div>
            <div className="leftside">
                <Pad key={soundClips[0].id} clip={soundClips[0]} setDisplayText={setDisplayText}/>
            </div>
            <Pad key={soundClips[1].id} clip={soundClips[1]} setDisplayText={setDisplayText}/>
            <Pad key={soundClips[2].id} clip={soundClips[2]} setDisplayText={setDisplayText}/>
            <div className="bottom">
            <Pad key={soundClips[3].id} clip={soundClips[3]} setDisplayText={setDisplayText}/>
            <Pad key={soundClips[4].id} clip={soundClips[4]} setDisplayText={setDisplayText}/>
            </div>
            <Pad key={soundClips[5].id} clip={soundClips[5]} setDisplayText={setDisplayText}/>
            <Pad key={soundClips[6].id} clip={soundClips[6]} setDisplayText={setDisplayText}/>
            <Pad key={soundClips[7].id} clip={soundClips[7]} setDisplayText={setDisplayText}/>
            <div className="rightside">
            <Pad key={soundClips[8].id} clip={soundClips[8]} setDisplayText={setDisplayText}/>
            </div>
        </div>
        </div>
    )
}

function Pad({ clip , setDisplayText}) {
    React.useEffect(() => {
        document.addEventListener('keydown',handleKeyPress);
        return () => {
            document.addEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if(e.keyCode === clip.keyCode) {
          playSound();
        }
    };

    const playSound = () => {
        setDisplayText(clip.id);
        const audioTag = document.getElementById(clip.keyTrigger);
        audioTag.currentTime = 0;
        audioTag.play();
    }
    return (
        <button onClick={playSound} className={clip.class} id={clip.id}>
            <audio className='clip' id={clip.keyTrigger} src={clip.url} name={clip.keyTrigger}/>
            {clip.keyTrigger}
        </button>
    );

}
ReactDOM.render(<App/>,document.getElementById('app'))