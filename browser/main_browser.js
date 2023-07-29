import './render.js';

import {config} from "./config.js";

import {MESSAGE_CREATE} from "./discord_message_processor/MESSAGE_CREATE.js"



let web_socket;
function startMyDisWebSock(){
  
  let discord_heartbeat_ms = 41250;
  web_socket = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=9&compress=zlib-stream/');
  web_socket.onopen = ()=>{
    console.log('%c ВЕБ СОКЕТ ПОДКЛЮЧЕН', 'color: green;');
    web_socket.send(JSON.stringify({
        "op":2,
        "d":{
          "token": config.my_token,
          "capabilities":125,
          "properties":{"os":"Windows","browser":"Chrome","device":"","system_locale":"ru-RU","browser_user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4350.0 Iron Safari/537.36","browser_version":"","os_version":"7","referrer":"","referring_domain":"","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":100054,"client_event_source":null},
          "presence":{
            "status":"online",
            "since":0,
            "activities":[{"name":"Custom Status","type":4,"state":"The oak tree where I met you","emoji":null}],
            "afk":false},
            "compress":false,"client_state":{"guild_hashes":{},"highest_last_message_id":"0","read_state_version":0,
            "user_guild_settings_version":-1}
          }
        }
    ));
  }

 
  web_socket.onmessage = function (message) 
  {  
    message = JSON.parse( message.data );
    //console.log(message);

    switch (message.t){
      case "MESSAGE_CREATE": MESSAGE_CREATE (message.d); 
      break;
    }  




    if(message.op === 10) {
        console.log(message.d.heartbeat_interval);
        discord_heartbeat_ms = message.d.heartbeat_interval;
        web_socket.send(JSON.stringify({"op":1,"d": 251}));
    }
    if(message.op === 11){
        setTimeout (()=>{
            
            web_socket.send(JSON.stringify({"op":1,"d": 251}));
        }, discord_heartbeat_ms)
    }

  }
  web_socket.onclose = function() {
    console.warn(`ВЕБ СОКЕТ ВЫРУБИЛО, дата: [${new Date()}]\nПЕРЕПОДКЛЮЧАЮСЬ....`);
    setTimeout(()=> {
      startMyDisWebSock()
    }, 2000);
    
  };

  

}
startMyDisWebSock() 

