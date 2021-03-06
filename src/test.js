const string=`
.skin* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin*::before,
  .skin*::after {
    box-sizing: border-box;
  }
  .skin {
    background: #ffe600;
    min-height: 100vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 140px;
    margin-left: -10px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    75% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 0.3s infinite;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    border: 1px solid black;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin: -32px;
    background: rgb(25, 25, 25);
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    left: 6px;
    top: 1px;
  }
  .eye.left {
    transform: translate(-100px);
  }
  .eye.right {
    transform: translate(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
    overflow: hidden;
  }
  .mouth .up {
    position: relative;
    top: -12px;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    position: absolute;
    left: 50%;
    background: #ffe600;
    z-index: 2;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-color: #ffe600 #ffe600 #ffe600 black;
    transform: rotate(-20deg);
    margin-left: -48%;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-color: #ffe600 transparent black #ffe600;
    transform: rotate(20deg);
    margin-left: -2%;
  }
  .mouth .down {
    border: 3px solid black;
    height: 360px;
    position: absolute;
    top: -180px;
    width: 150px;
    left: 50%;
    background: rgb(168, 16, 7);
    margin-left: -75px;
    border-radius: 124px/300px;
    overflow: hidden;
  }
  .mouth .down .tongue {
    border: 1px solid #ff485f;
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    margin-bottom: -30px;
    background: rgb(255, 91, 93);
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    border-radius: 50%;
    background: red;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }
`;

const player={
    time:100,
    id:undefined,
    n:1,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    init:()=>{
        player.ui.demo.innerText=string.substr(0,player.n);
        player.ui.demo2.innerHTML=string.substr(0,player.n);
        player.bindEvent();
        player.play();
    },

    bindEvent:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                document.querySelector(key).onclick=player[player.events[key]];
            }
        }
        // document.querySelector('#btnPause').onclick=player.pause;
        // document.querySelector('#btnPlay').onclick=player.play;
        // document.querySelector('#btnSlow').onclick=player.slow;
        // document.querySelector('#btnNormal').onclick=player.normal;
        // document.querySelector('#btnFast').onclick=player.fast;
    },
    run:()=>{
        player.n+=1;
        if(player.n>string.length){
            window.clearInterval(player.id);
            return
        }
        player.ui.demo.innerText=string.substr(0,player.n);
        player.ui.demo2.innerHTML=string.substr(0,player.n);
        player.ui.demo.scrollTop=player.ui.demo.scrollHeight;
    },
    play:()=>{
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id);
    },
    slow:()=>{
        player.pause();
        player.time=300;
        player.play();
    },
    normal:()=>{
        player.pause();
        player.time=100;
        player.play();
    },
    fast:()=>{
        player.pause();
        player.time=0;
        player.play();
    }
}

player.init();