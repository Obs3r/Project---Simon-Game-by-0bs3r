import * as Tone from 'tone'




hautgauche.addEventListener('click', function(){
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("A4", "8n");
  });

  hautdroit.addEventListener('click', function(){
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("E4", "8n");
  });

  basgauche.addEventListener('click', function(){
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("G4", "8n");
  });

  hautdroit.addEventListener('click', function(){
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("C4", "8n");
  });