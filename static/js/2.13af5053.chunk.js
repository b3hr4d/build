(this["webpackJsonpmelodition-typescript"]=this["webpackJsonpmelodition-typescript"]||[]).push([[2],{296:function(t,e,i){"use strict";i.d(e,"m",(function(){return x})),i.d(e,"i",(function(){return N})),i.d(e,"l",(function(){return S})),i.d(e,"e",(function(){return T})),i.d(e,"h",(function(){return A})),i.d(e,"f",(function(){return I})),i.d(e,"g",(function(){return M})),i.d(e,"o",(function(){return B})),i.d(e,"n",(function(){return O})),i.d(e,"d",(function(){return V})),i.d(e,"c",(function(){return P})),i.d(e,"p",(function(){return z})),i.d(e,"q",(function(){return j})),i.d(e,"k",(function(){return E})),i.d(e,"j",(function(){return C})),i.d(e,"b",(function(){return D})),i.d(e,"a",(function(){return L}));var n,o=i(41),a=i(21),s=i(26),r=i(56),h=new function t(){Object(r.a)(this,t),this.touchedKeys=[],this.score=[],this.trackLen=void 0},l=i(112),c=i(38),u=i(2),d=i(57),f=function(){function t(e){var i=e.note,n=e.len,o=e.hand,a=e.beat,s=e.num,h=e.pitch;Object(r.a)(this,t),this.len=void 0,this.note=void 0,this.finger=void 0,this.hand=void 0,this.color=void 0,this.bColor=void 0,this.fColor=void 0,this.cColor=void 0,this.end=void 0,this.num=void 0,this.pitch=void 0,this.showing=void 0,this.len=n,this.note=i,this.num=s,this.pitch=h,this.end=this.len-1+a,this.end<=a&&(this.end=a+1),this.hand=o.hand,this.finger=o.finger,this.fColor="rgba(210, 210, 210, 0.5)",this.cColor=i.children.front.getAttribute("fill"),this.bColor=i.id,"right"===this.hand?this.color="yellow":this.color="skyblue",this.showing=!0}return Object(d.a)(t,[{key:"show",value:function(t){var e=this.color;t&&(e=t),this.note.children.back.setAttribute("fill",e),this.note.children.front.setAttribute("fill","black"),this.finger.setAttribute("fill",e)}},{key:"hide",value:function(){this.note.children.back.setAttribute("fill",this.bColor),this.note.children.front.setAttribute("fill",this.cColor),this.note.children.back.style.fill="",this.note.children.front.style.fill="",this.finger.setAttribute("fill",this.fColor),this.showing=!1}}]),t}(),v=function t(e,i,n){var o=this;Object(r.a)(this,t),this.y=void 0,this.end=void 0,this.yPos=void 0,this.margin=void 0,this.update=function(t,e){t.drawImage(e,0,Math.floor(o.y-o.yPos-o.margin))},this.y=0,this.margin=n,this.yPos=e*i,this.end=this.yPos+i+n},g=function t(e){var i=this,n=e.width,o=e.color,a=e.x,s=e.y,h=e.lw;Object(r.a)(this,t),this.x=void 0,this.y=void 0,this.lw=void 0,this.color=void 0,this.width=void 0,this.draw=function(t){t.beginPath(),t.moveTo(0,i.y),t.lineTo(i.width,i.y),t.lineWidth=i.lw,t.strokeStyle=i.color,t.stroke(),t.fill()},this.x=a,this.y=s,this.width=n,this.color=o,this.lw=h},m=function t(e){var i=this,n=e.width,o=e.height,a=e.color,s=e.x,h=e.y,l=e.end,c=e.note,u=e.text,d=e.gap;Object(r.a)(this,t),this.y=void 0,this.x=void 0,this.r=void 0,this.gap=void 0,this.beg=void 0,this.end=void 0,this.start=void 0,this.height=void 0,this.width=void 0,this.mover=void 0,this.note=void 0,this.text=void 0,this.color=void 0,this.lineColor=void 0,this.crash=void 0,this.hit=void 0,this.move=function(){i.crash=!0,i.mover=i.y-i.gap,i.mover>-i.height&&(i.mover=-i.height)},this.update=function(t){t.beginPath(),t.moveTo(i.x,i.y+i.start),t.lineTo(i.x,i.y+i.height),t.lineWidth=.85*i.width,t.strokeStyle="black",t.lineCap="round",t.stroke(),t.beginPath(),t.moveTo(i.x,i.y+i.start),t.lineTo(i.x,i.y+i.height),t.lineWidth=.2*i.width,t.strokeStyle="white",t.stroke(),i.crash&&(t.beginPath(),t.moveTo(i.x,i.y+i.start),t.lineTo(i.x,i.y-i.mover),t.lineWidth=.2*i.width,t.strokeStyle="red",t.stroke()),i.hit&&(t.beginPath(),t.moveTo(i.x,i.y+i.start),t.lineTo(i.x,i.y-i.hit),t.lineWidth=.25*i.width,t.strokeStyle=i.color,t.stroke()),i.crash&&!i.hit&&(i.color="red"),t.beginPath(),t.arc(i.x,i.y+i.start,1.4*i.r,0,2*Math.PI),t.fillStyle="black",t.fill(),t.beginPath(),t.arc(i.x,i.y+i.start,i.r,0,2*Math.PI),t.fillStyle=i.color,t.fill(),t.font="bold "+1.3*i.r+"px arial",t.textAlign="center",t.textBaseline="middle",t.fillStyle="black",t.fillText(i.text,i.x,i.y+i.start+1)},this.y=h,this.start=-h,this.gap=d,this.beg=h+d,this.end=l,this.note=c,this.height=-o,this.x=s,this.text=u,this.width=n,this.r=n/2,this.color=a,this.lineColor="black",this.mover=o,this.crash=!1},p=function t(e){var i=this;Object(r.a)(this,t),this.x=void 0,this.y=void 0,this.r=void 0,this.note=void 0,this.text=void 0,this.pitch=void 0,this.color=void 0,this.outline=void 0,this.update=function(t){t.beginPath(),t.arc(i.x,i.y,i.r,0,2*Math.PI),t.fillStyle="rgba(0, 0, 0, 0.2)",t.fill(),t.beginPath(),t.arc(i.x,i.y,.6*i.r,0,2*Math.PI),t.fillStyle=i.color,t.fill(),i.text&&(t.font=2*i.r+"px arial",t.textAlign="center",t.textBaseline="middle",t.fillStyle="black",t.fillText(i.text,i.x-1.2*i.r,i.y)),i.outline&&(t.globalCompositeOperation="destination-over",new y(t,i.outline),t.globalCompositeOperation="source-over")},Object.assign(this,e),this.color="white"},y=function t(e,i){var n=i.r,o=i.x,a=i.y;Object(r.a)(this,t),e.beginPath(),e.moveTo(o-n,a),e.lineTo(o+n,a),e.lineWidth=.5,e.strokeStyle="black",e.stroke()},b=function(){function t(e){var i=this;Object(r.a)(this,t),this.counter=0,this.tapSize=void 0,this.spaceSize=void 0,this.width=void 0,this.height=void 0,this.notePos={},this.fullNotes={},this.context=void 0,this.assigner=function(t){Object.assign(i,t)},this.playGame=function(t,e){i.clear(),i.updateFullSong(t,e)},this.clear=function(){i.context.clearRect(0,0,i.width,i.height)},this.drawNote=function(t){var e=1.6*i.spaceSize,n=.46*i.tapSize;n=i.spaceSize<20?.42*i.spaceSize:n;var o,a="K",s=[{note:"K",text:"!"}];Object.values(t).forEach((function(t,r){t.length>0&&t.forEach((function(t){var h,l=t.pitch+36,c=i.notePos[l].pos,u=i.notePos[l].note,d=e+r*i.spaceSize,f=i.notePos[l-1];if(2===u.length){var v=s.find((function(t){return t.note===u}));v?(h=v.text,u=v.note):f.note.includes(a)||0===r?h="\u266d":(h="\u266f",u=f.note,c=f.pos),s.push({note:u,text:h})}81!==l&&60!==l&&61!==l&&40!==l||(o={r:1.5*n,x:d,y:c}),59!==l&&58!==l||(o={r:1.2*n,x:d,y:i.notePos[60].pos}),a=u;var g=new p({x:d,y:c,r:n,pitch:l,text:h,note:u,outline:o});g.update(i.context),i.fullNotes[r]||(i.fullNotes[r]=[]),i.fullNotes[r].push(g)}))}))},this.updateFullSong=function(t,e){Object.values(i.fullNotes).forEach((function(n,o){n.forEach((function(n){o===t&&(n.color=e),o===t-1&&(n.color="green"),n.update(i.context)}))}))},this.width=e.width,this.height=e.height,this.context=e.getContext("2d")}return Object(d.a)(t,[{key:"resetGame",value:function(){var t=this;this.clear(),Object.values(this.fullNotes).forEach((function(e){e.forEach((function(e){e.color="white",e.update(t.context)}))}))}}]),t}(),k=function t(e){var i=this;Object(r.a)(this,t),this.counter=0,this.tapSize=32,this.songLength=17,this.gap=void 0,this.bpm=void 0,this.rythm=void 0,this.margin=128,this.width=void 0,this.height=void 0,this.notes=[],this.image=void 0,this.backMover=[],this.barNotes=[],this.fullNotes=[],this.context=void 0,this.assigner=function(t){Object.assign(i,t)},this.playGame=function(t){i.clear(),i.updateBacks(t),i.updateNotes(t)},this.clear=function(){i.context.clearRect(0,0,i.width,i.height)},this.pitchName=function(t){var e=t%12,i="C";return 1===e&&(i="Db"),2===e&&(i="D"),3===e&&(i="Eb"),4===e&&(i="E"),5===e&&(i="F"),6===e&&(i="Gb"),7===e&&(i="G"),8===e&&(i="Ab"),9===e&&(i="A"),10===e&&(i="Bb"),11===e&&(i="B"),""+i},this.drawImage=function(){var t,e,n,o=document.createElement("canvas").getContext("2d");o.canvas.width=i.width,o.canvas.height=i.height,o.save(),Array.from(Array(i.rythm+1),(function(t,e){return e})).forEach((function(n,a){if(a===i.rythm)t=4,e="black";else{if(a%i.rythm===0)return;a%(i.rythm/2)===0?(t=1.5,e="rgba(0,0,0,0.8)"):a%(i.rythm/i.bpm)===0?(t=1,e="rgba(0,0,0,0.7)"):(t=.5,e="rgba(0,0,0,0.2)")}var s=a*i.tapSize;new g({width:i.width,x:0,y:s,color:e,lw:t}).draw(o)})),i.image.src=o.canvas.toDataURL("image/png"),i.image.onload=function(){n||(n=new v(0,i.height,i.margin)).update(i.context,i.image)}},this.drawNote=function(t,e){var n=i.tapSize;Array.from(Array(i.songLength),(function(t,e){return e})).forEach((function(o){var a=e[1].width,s=n*(i.rythm*o);i.barNotes[o]=[],t.forEach((function(t){if(t.beat>=o*i.rythm&&t.beat<(o+1)*i.rythm){var r=s+n*(t.beat%i.rythm),h=e[t.pitch].center,l=r+n*t.length,c=new m({width:a,height:l,color:"yellow",x:h,y:r,end:l+3*i.height,text:i.pitchName(t.pitch),note:t.pitch+36,gap:i.gap});i.barNotes[o].push(c),i.fullNotes.push(c)}}))}))},this.drawBack=function(){i.backMover=[];for(var t=0;t<3;t++)i.backMover.push(new v(t,i.height,i.margin))},this.pushNote=function(t){t&&(i.counter=t),i.barNotes[i.counter]&&i.barNotes[i.counter].length>0&&i.barNotes[i.counter].forEach((function(t){i.notes.push(t)})),i.counter++},this.updateNotes=function(t){i.notes.forEach((function(e,n){var o;(e.y=t,e.update(i.context),e.end<t&&i.notes.splice(n,1),i.gap-e.y<=e.start)&&(h.touchedKeys.forEach((function(n){e.note===n.note&&n.y>e.beg-i.tapSize&&n.y<e.beg+i.tapSize&&(e.hit=t-i.gap+.1*i.tapSize,n.y-.3*i.tapSize<=e.beg&&n.y+.3*i.tapSize>=e.beg?(o="p",e.color="green"):n.y>e.beg?(o="l",e.color="purple"):n.y<e.beg&&(o="e",e.color="orange"),n.hit||(n.hit=o,h.score.push([e.note,n.hit])))})),e.move())}))},this.updateBacks=function(t){Array.from(Array(i.songLength),(function(t,e){return e})).forEach((function(e,n){i.context.drawImage(i.image,0,Math.floor(t-n*i.image.height-i.margin))}))},this.updateFullSong=function(t){i.clear(),Array.from(Array(i.songLength),(function(t,e){return e})).forEach((function(e,n){i.context.drawImage(i.image,0,Math.floor(t-n*i.image.height-i.margin))})),i.fullNotes.forEach((function(e){e.y=t,e.update(i.context)}))},this.image=new Image,this.width=e.width,this.height=e.height,this.context=e.getContext("2d")},w=function(){function t(e){var i=this;Object(r.a)(this,t),this.game=void 0,this.notes=void 0,this.master=void 0,this.player=void 0,this.song=void 0,this.songDetails=void 0,this.loaded=!1,this.onAir=!1,this.score=[],this.handRefs=[],this.seekBar=void 0,this.keyRefs=[],this.canvasSize=void 0,this.pianoSize=void 0,this.seekValue=0,this.metVol=.75,this.metTrack=0,this.metOn=!0,this.songLength=272,this.tapSize=32,this.loading=!0,this.playMode=!1,this.noteMode=!1,this.TrackID=0,this.bpm=4,this.rythm=16,this.tempo=120,this.playVolume=.75,this.musicVolume=.75,this.pianoVolume=.5,this.drumInfo=[],this.trackInfo=[],this.metronomeInfo=[],this.storeDrums=[],this.storeTracks=[],this.storeFingers=[],this.equalizer=[0,0,0,0,0,0,0,0,0,0],this.drumVolumes=[70,70,70,70,70,70,70,70],this.noteInfo=void 0,this.neededTracks=void 0,this.fingerNotes=void 0,this.firstDelay=void 0,this.tickID=void 0,this.currentBeat=0,this.tickerDelay=1,this.tickerStep=0,this.animeFrame=0,this.nextWhen=0,this.nextBeat=0,this.sentWhen=0,this.beatCounter=0,this.yPos=0,this.anime=[],this.finger=[],this.midiKeys=[],this.trainNotes=[],this.drawNote=function(t){i.noteMode=!0,i.notes=new b(t),i.notes.assigner(Object(u.a)({},i.noteInfo)),i.notes.drawNote(i.fingerNotes),i.stopReset()},this.drawGame=function(t){i.game=new k(t);var e=i.tapSize,n=i.bpm<=4?4:i.bpm;i.game.assigner({tapSize:e,bpm:i.bpm,rythm:i.rythm,songLength:Math.round(i.songLength/i.rythm),gap:e*(i.rythm-n),margin:e*n}),i.game.clear(),i.game.drawImage(),i.pianoSize&&i.game.drawNote(i.neededTracks,i.pianoSize)},this.startPlay=function(){var t,e;if(!i.onAir&&i.loaded){var n,o,a;if(i.score=[],i.yPos=0,i.resetNodeValues(),i.nextBeat=0,i.nextWhen=0,i.beatCounter=0,null===(t=i.game)||void 0===t||t.assigner({counter:0}),"suspended"===(null===(e=i.player)||void 0===e?void 0:e.audioContext.state))console.log("audioContext.resume"),null===(n=i.player)||void 0===n||n.audioContext.resume();if(i.onAir=!0,i.noteMode&&(i.nextBeat=i.rythm-2),i.song&&i.song.setMasterVolume(i.musicVolume),i.queueNextBeats(),i.onAir=!0,i.playMode)null===(o=i.game)||void 0===o||o.drawBack(),null===(a=i.game)||void 0===a||a.pushNote(),i.animeFrame=requestAnimationFrame(i.moveSVG);else i.stopReset(),i.animeFrame=requestAnimationFrame(i.moveFingers)}else console.log("on air already")},this.stopPlay=function(){var t,e;i.onAir&&i.loaded?(i.onAir=!1,i.playMode||i.stopReset(),null===(t=document.getElementById("play-button"))||void 0===t||t.click(),clearTimeout(i.firstDelay),i.stopAllTracks(),cancelAnimationFrame(i.animeFrame),clearTimeout(i.tickID),null===(e=i.player)||void 0===e||e.cancelQueue()):console.log("Not On Air")},this.stopReset=function(){i.notes&&i.notes.resetGame(),i.finger.forEach((function(t){t.hide()})),i.seekValue=i.currentBeat-1,i.yPos=0,i.anime=[],i.finger=[],i.onAir||i.training()},this.training=function(){if(i.finger.forEach((function(t){(null===t||void 0===t?void 0:t.showing)&&t.hide()})),i.yPos>=i.fingerNotes.length)i.stopReset();else{i.noteMode&&i.seekMove(5.3333*i.yPos);var t=Number(Object.keys(i.fingerNotes)[i.yPos]);i.anime.push(t),i.pushFinger(),i.trainNotes=[],i.finger.forEach((function(t){t.num===i.yPos-1&&i.trainNotes.push(t)})),i.trainNotes.forEach((function(t){var e;t.show(),null===(e=i.notes)||void 0===e||e.playGame(t.num,t.color)}))}},this.stopAllTracks=function(){i.song&&(i.song.stop(),i.song.elapsedTimeSinceStart=0)},this.playAllTracks=function(t,e){if(i.song){i.song.play(t,e);for(var n=0;n<i.song.getNbTracks();n++);}},this.rakeMouseWheel=function(t){if(!i.onAir&&i.playMode){i.seekValue="number"!==typeof t?i.seekValue+(t.deltaY>0?-1:1):t,i.seekValue=i.seekValue<0?0:i.seekValue>i.songLength-1?i.songLength-1:i.seekValue;var e=i.seekValue*i.tapSize;i.seekMove(i.seekValue),i.seekSVG(e)}},this.seekMove=function(t){i.seekBar&&t<i.songLength&&i.seekBar.changeSeeker(t)},this.seekSVG=function(t){var e;i.onAir||(null===(e=i.game)||void 0===e||e.updateFullSong(t))},this.resetNodeValues=function(){for(var t,e,n,o,a,s,r,h,l,c,u=0;u<i.trackInfo.length;u++)i.trackInfo[u].audioNode.gain.setValueAtTime(i.trackInfo[u].volume/100,0);for(var d=0;d<i.drumInfo.length;d++)i.drumInfo[d].audioNode.gain.setValueAtTime(i.drumVolumes[d]/100,0);null===(t=i.master)||void 0===t||t.band32.gain.setValueAtTime(i.equalizer[0],0),null===(e=i.master)||void 0===e||e.band64.gain.setValueAtTime(i.equalizer[1],0),null===(n=i.master)||void 0===n||n.band128.gain.setValueAtTime(i.equalizer[2],0),null===(o=i.master)||void 0===o||o.band256.gain.setValueAtTime(i.equalizer[3],0),null===(a=i.master)||void 0===a||a.band512.gain.setValueAtTime(i.equalizer[4],0),null===(s=i.master)||void 0===s||s.band1k.gain.setValueAtTime(i.equalizer[5],0),null===(r=i.master)||void 0===r||r.band2k.gain.setValueAtTime(i.equalizer[6],0),null===(h=i.master)||void 0===h||h.band4k.gain.setValueAtTime(i.equalizer[7],0),null===(l=i.master)||void 0===l||l.band8k.gain.setValueAtTime(i.equalizer[8],0),null===(c=i.master)||void 0===c||c.band16k.gain.setValueAtTime(i.equalizer[9],0)},this.queueNextBeats=function(){if(i.onAir&&i.player){var t=240/i.tempo/i.rythm,e=i.player.audioContext.currentTime;for(e&&i.nextWhen<e&&(i.nextWhen=e);i.sentWhen<e+t;){var n;if(i.nextBeat>=i.rythm&&i.nextBeat%i.rythm===0&&i.playAllTracks(t*(i.nextBeat-i.rythm),t*i.rythm),i.playMode&&i.nextBeat%4===0&&i.playMetronome(i.nextWhen,i.nextBeat),i.sendNextBeats(i.nextWhen,i.nextBeat,i.nextBeat),i.nextWhen=i.sentWhen+t,i.nextBeat>i.songLength&&i.stopPlay(),i.nextBeat=i.nextBeat+1,i.playMode&&i.nextBeat/i.rythm%1===0)null===(n=i.game)||void 0===n||n.pushNote();i.seekMove(i.nextBeat),i.playMode||i.pushFinger()}var o=750*(i.nextWhen-e);i.tickerStep++,i.tickerStep>=i.tickerDelay&&(i.tickerStep=0),i.tickID=setTimeout((function(){i.queueNextBeats()}),o)}},this.sendNextBeats=function(t,e,n){i.sentWhen=t;var o=240/i.tempo,a=1/i.rythm*o;i.currentBeat=e,i.storeDrums.forEach((function(o){if(o.beat>=e&&o.beat<=n){var s,r=i.findDrumInfoHand(o.drum),h=r.sound;r.info&&window[r.info.variable]&&(h=window[r.info.variable]);var l=1-.2*Math.random();null===(s=i.player)||void 0===s||s.queueWaveTable({target:r.audioNode,preset:h,when:t+a*(o.beat-e),pitches:r.pitch,duration:r.length,volume:l*r.volumeRatio*i.musicVolume})}}));var s=[];i.storeTracks.forEach((function(t){t.beat>=e&&t.beat<=n&&s.push(t)})),s.sort((function(t,e){var i=1e3*(t.beat-e.beat)+1e5*(t.track-e.track);return t.beat===e.beat&&(i+=t.pitch-e.pitch),i}));var r=-1,h=-1,l=0,c=.75;s.forEach((function(n){var o;c=i.playMode&&n.track===i.TrackID?i.pianoVolume:i.musicVolume;var s=i.trackInfo.find((function(t){return t.nn===n.track}));n.beat===r&&n.track===h||(r=n.beat,h=n.track,l=0,n.track===i.TrackID&&i.anime.push(n.beat));var u=s.sound;s.info&&window[s.info.variable]&&(u=window[s.info.variable]);var d=[{when:n.length*a,pitch:n.shift+12*s.octave+n.pitch}],f=.6-.2*Math.random();null===(o=i.player)||void 0===o||o.queueWaveTable({target:s.audioNode,preset:u,when:t+a*(n.beat-e)+l*s.inChordDelay,pitches:12*s.octave+n.pitch,duration:.075+n.length*a,volume:f*s.volumeRatio*c,slides:d}),l++}))},this.pushFinger=function(){var t=i.storeFingers[i.TrackID];0!==i.anime.length&&i.anime.forEach((function(e){var n=i.fingerNotes[e];if(n){var o={};for(var a in t)if(t[a][e]){var s=i.handRefs[a],r=t[a][e];s&&(o[r]={finger:s,hand:s.getAttribute("class")})}n.forEach((function(t){var e=t.length,n=t.pitch+36,a=i.keyRefs[n];o[n]&&i.finger.push(new f({note:a,len:e,hand:o[n],beat:i.currentBeat,num:i.yPos,pitch:n}))})),i.yPos++}i.anime=i.anime.filter((function(t){return t!==e}))}))},this.moveFingers=function(){i.onAir&&(i.finger.forEach((function(t){t.showing&&i.currentBeat>t.end?t.hide():t.showing&&(i.noteMode&&i.notes&&i.notes.playGame(t.num,"green"),t.show())})),requestAnimationFrame(i.moveFingers))},this.moveSVG=function(){if(i.player&&i.game&&i.onAir){for(var t=240/i.tempo,e=1/i.rythm*t,n=i.nextBeat+(i.player.audioContext.currentTime-i.nextWhen)/e;n<0;)n+=i.songLength;n>i.songLength-1&&(n=i.songLength-1),i.game.counter<4&&n>100&&(n=0);var o=Math.round(n*i.tapSize);i.yPos=o,i.game.playGame(o),requestAnimationFrame(i.moveSVG)}},this.findTrackInfoHand=function(){var t=null;return i.trackInfo.forEach((function(e){e.nn===i.TrackID&&(t=e)})),t},this.findDrumInfoHand=function(t){var e=null;return i.drumInfo.forEach((function(i){i.id===t&&(e=i)})),e},this.playMetronome=function(t,e){0===e&&(t=0);var n=e/4%(6===i.bpm?3:i.bpm)===0?38:36;if(i.metOn&&i.player){var o=i.metronomeInfo[i.metTrack],a=o.sound;i.player.queueWaveTable({target:o.audioNode,preset:a,when:t,pitches:n,duration:1,volume:i.metVol})}},this.midiNoteOn=function(t,e){if(0===e)i.midiNoteOff(t);else{i.midiNoteOff(t),h.touchedKeys.push({note:t,y:i.yPos});var n=i.findTrackInfoHand();if(n){var o,a=n.sound;n.info&&window[n.info.variable]&&(a=window[n.info.variable]),i.midiKeys[t]=null===(o=i.player)||void 0===o?void 0:o.queueWaveTable({target:n.audioNode,preset:a,when:0,pitches:t,duration:10,volume:e*i.playVolume});var s=i.keyRefs[t];if(s){var r="red";if(!i.onAir){var l=s.children.back.getAttribute("fill");"white"!==l&&"black"!==l&&(r="green",i.trainNotes.every((function(t){return h.touchedKeys.some((function(e){return e.note===t.pitch}))}))&&i.training())}s.children.back.style.fill=r}}}},this.midiNoteOff=function(t){if(i.midiKeys[t]&&(i.midiKeys[t].cancel(),h.touchedKeys.forEach((function(e,i){var n=h.touchedKeys[i].note;t===n&&h.touchedKeys.splice(i,1)}))),i.keyRefs[t]){var e=i.keyRefs[t];e&&(e.children.back.style.fill="")}},Object.assign(this,e),console.log(this)}return Object(d.a)(t,[{key:"assigner",value:function(t){Object.assign(this,t),console.log(t)}}]),t}(),x=function(t){return function(e){function a(t,i){t.songLength=Object(c.b)(t.rythm,t.storeDrums,t.storeTracks,i),t.loaded=!0,n=new w(t);var a=t.songLength,s=t.neededLines,r=t.neededTracks,h=t.bpm;e({type:o.j,payload:{songLength:a,neededLines:s,neededTracks:r,bpm:h}})}i.e(29).then(i.bind(null,488)).then((function(e){(0,e.lessonCompiler)(t).then((function(t){t&&(t.songs.length>0?t.songs.forEach((function(e,i){return s.a.get("/song/v2/".concat(e.id)).then((function(n){var o=n.data;return Object(s.b)(o).then((function(n){var o;null===(o=t.song)||void 0===o||o.loadBuffer({buffer:n.data,vol:e.vol}).then((function(){var e;if(null===(e=t.song)||void 0===e||e.setTrackVolumes(),t.songs.length===i+1){var n,o=t.tempo/60,s=(null===(n=t.song)||void 0===n?void 0:n.getDuration())/o;a(t,s)}}))})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))})):a(t))})).catch((function(t){return console.log(t)}))}))}},N=function(t,e,i){return function(a){if(e&&i){var s,r=function(t,e){var i=t[50].getBoundingClientRect().x-(t[48].getBoundingClientRect().x+t[48].getBoundingClientRect().width),n=e.pianoLeft,o=n||100,a=[];for(var s in t){var r=t[s],h=r.getBoundingClientRect(),l=h.x-o,c=h.width,u=l+c/2;r.classList.contains("C")||r.classList.contains("F")?a.push({left:l,center:u-3.5*i,width:c,key:"CF"}):r.classList.contains("last")?a.push({left:l,center:u,width:c,key:"last"}):"black"===r.id?a.push({left:l,center:u,width:c,key:"black"}):r.classList.contains("E")||r.classList.contains("B")?a.push({left:l,center:u+3.5*i,width:c,key:"EB"}):r.classList.contains("A")?a.push({left:l,center:u+1.8*i,width:c,key:"A"}):r.classList.contains("G")?a.push({left:l,center:u+1.4*i,width:c,key:"G"}):a.push({left:l,center:u,width:c,key:"white"})}return a.push({left:-100,center:0,width:i,key:"lineWidth"}),a}(t,e);null===(s=n)||void 0===s||s.assigner({pianoSize:r,keyRefs:t,canvasSize:e,tapSize:i}),a({type:o.c,payload:{pianoSize:r,canvasSize:e,tapSize:i}})}else{var h;null===(h=n)||void 0===h||h.assigner({keyRefs:t}),a({type:o.c})}}},S=function(t,e){return function(i){var a;null===(a=n)||void 0===a||a.assigner({noteInfo:e,keyRefs:t}),i({type:o.e,payload:{noteInfo:e}})}},T=function(t){return function(e){var i,a,s;null===(i=n)||void 0===i||i.assigner(t),(null===(a=n)||void 0===a?void 0:a.playMode)||null===(s=n)||void 0===s||s.stopReset(),e({type:o.a})}},A=function(t){return function(e){var i;null===(i=n)||void 0===i||i.assigner(t),e({type:o.f})}},I=function(t){return function(e){var i;null===(i=n)||void 0===i||i.drawGame(t),setTimeout((function(){e({type:o.b})}),500)}},M=function(t){return function(e){var i;null===(i=n)||void 0===i||i.drawNote(t),e({type:o.d})}},B=function(){return function(t){var e;null===(e=n)||void 0===e||e.stopPlay(),t({type:o.l})}},O=function(){return function(t){var e;null===(e=n)||void 0===e||e.stopPlay(),t({type:o.k})}},V=function(t){return function(e){var i,a;null===(i=n)||void 0===i||i.assigner({playMode:t}),null===(a=n)||void 0===a||a.stopPlay(),e(t?{type:o.h}:{type:o.i})}},P=function(t){var e;null===(e=n)||void 0===e||e.rakeMouseWheel(t)},z=function(){var t;null===(t=n)||void 0===t||t.startPlay()},j=function(){var t;null===(t=n)||void 0===t||t.stopPlay();var e=h.score;if(n&&e.length>0){var i=n.songDetails,o=n.neededTracks.length,s=Math.round(e.length/o*100)+"%",r={song:{name:i.title,id:i.id,notes:o},time:(new Date).toLocaleTimeString(),score:JSON.stringify(e),date:(new Date).toLocaleDateString(),progress:s};h.score=[],a.b.dispatch(Object(l.b)(r))}},E=function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.7;null===(e=n)||void 0===e||e.midiNoteOn(t,i)},C=function(t){var e;null===(e=n)||void 0===e||e.midiNoteOff(t)},D=function(t){var e,i,o;null===(e=n)||void 0===e||e.assigner({musicVolume:t}),null===(i=n)||void 0===i||null===(o=i.song)||void 0===o||o.setMasterVolume(t)},L=function(t){var e;null===(e=n)||void 0===e||e.assigner(t)}},354:function(t,e,i){"use strict";i.r(e),i.d(e,"requsetMidi",(function(){return r})),i.d(e,"changeMidi",(function(){return h}));var n,o=i(355),a=i(296),s=i(23),r=function(){navigator.requestMIDIAccess?navigator.requestMIDIAccess().then((function(t){console.log("MIDI Ready!");var e,i=Object(o.a)(t.inputs);try{for(i.s();!(e=i.n()).done;){var a=e.value;n=a[1],Object(s.c)("MIDI input device: "+n.name),console.log(n),n.onmidimessage=d,n.onstatechange=l}}catch(r){i.e(r)}finally{i.f()}})).catch((function(t){Object(s.a)("Error accessing MIDI devices: "+t)})):Object(s.a)("\u0644\u0637\u0641\u0627\u064b \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0627\u0645\u0644 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0633\u0627\u06cc\u062a \u0627\u0632 \u06af\u0648\u06af\u0644 \u06a9\u0631\u0648\u0645 \u06cc\u0627 \u0645\u0627\u06cc\u06a9\u0631\u0648\u0633\u0627\u0641\u062a \u0627\u062c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.")},h=function(t){n&&(n.onmidimessage=t?d:function(){})},l=function(t){console.log(t)},c=[],u=!1,d=function(t){var e=t.data;if(3===e.length){var i=e[0]>>>4;if(11===i){var n=e[2];127!==n&&0!==n||(u=f(n))}if(9===i||8===i){var o=e[1],s=e[2];9===i&&s?(Object(a.k)(o,s/100),c.push(o)):u||(Object(a.j)(o),c=[])}}},f=function(t){return 0!==t||(c.forEach((function(t){Object(a.j)(t)})),c=[],!1)}}}]);
//# sourceMappingURL=2.13af5053.chunk.js.map