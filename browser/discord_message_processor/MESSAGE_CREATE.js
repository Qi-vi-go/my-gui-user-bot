import {config} from "./../config.js";

//import {get_random_anime_3_G} from './../functions/send_apn.js';

import {push_html_message} from "./form_html_message.js"


export function MESSAGE_CREATE (message){
    console.log(message);
    push_html_message(message);


    if (message.content.match(/^!бот аниме\s?$/)!=null){
        //get_random_anime_3_G (message.channel_id)
    }
    if (message.content.match(/^!хай\s?$/)!=null){
        console.log(document.body);
        
        fetch(`https://discord.com/api/v9/channels/${message.channel_id}/messages`, {
        "headers": {
            "authorization": config.my_token,
            "content-type": "application/json"
        },
        "body": JSON.stringify({content: "хай"}),
        "method": "POST"
        });
    }
    
}
