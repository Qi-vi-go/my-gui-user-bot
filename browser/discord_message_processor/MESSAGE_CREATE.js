import {config} from "./../config.js";

//import {get_random_anime_3_G} from './../functions/send_apn.js';



export async function MESSAGE_CREATE (message){
    console.log(message);
    //


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


    //1129419171235643483 ref 1129387991857643590 author id 406563203514892294 MsDarkxum avatar a7fa631f396c0e57a9b51924f6e43db9 ref avatar c27490a9bd7619c381e7d7980fc45fe8
    let form_message_reply =
    `
    <div id="message-reply-context-${message.id}" class="repliedMessage-3Z6XBG" aria-label="${message.author.username} отвечает пользователю mufassaden" bis_skin_checked="1">
      <img alt="" src="./• Discord _ #┃помощь-билды-гайды _ (GG) Gordon_files/c27490a9bd7619c381e7d7980fc45fe8(1).webp" class="replyAvatar-sHd2sU clickable-31pE3P"><span class="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-expanded="false" role="button" tabindex="0">@mufassaden</span><div class="repliedTextPreview-1bvxun clickable-31pE3P" role="button" tabindex="0" bis_skin_checked="1"><div id="message-content-1129387991857643590" class="repliedTextContent-2hOYMB markup-eYLPri messageContent-2t3eCI" bis_skin_checked="1"><span>алё</span><span>, планирую выбить своему с2 скаре оружку и мб созвездие какое</span><span>-то</span><span>, накопил 280 круток</span><span>, но бля</span><span>, этот ебучий пончик в оружейном банере пугает очень</span><span>, как думаете</span><span>, мб пока забить на сигну до следующего раза и пойти чисто звёзды покрутить</span><span>?</span> <span class="timestamp-p1Df1m"><time aria-label="Изменено: Сегодня, в 15:25" datetime="2023-07-14T12:25:36.708Z"><span class="edited-1v5nT8">(изменено)</span></time></span></div></div>
    </div>
    `;
    let form_message_contents =
    `
    <div class="contents-2MsGLg" bis_skin_checked="1">
        <img src="https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=80" aria-hidden="true" class="avatar-2e8lTP clickable-31pE3P" alt=" ">
        <h3 class="header-2jRmjb" aria-describedby="message-reply-context-${message.id}" aria-labelledby="message-username-${message.id} message-timestamp-${message.id}"><span id="message-username-${message.id}" class="headerText-2z4IhQ hasRoleIcon-1Usc6e"><span class="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-expanded="false" role="button" tabindex="0" style="color: rgb(5, 1, 1);">${message.author.username}</span><span class="" role="button" tabindex="0"><img alt="" aria-label="Значок роли, Dungeon-Master" class="roleIcon-3-WL_I roleIcon-zWuatl clickable-3VeFBy" height="20" src="https://cdn.discordapp.com/role-icons/922956597817389066/43b77a70c53da1537c500b23d4c9ea1f.webp?size=20&quality=lossless" width="20"></span></span><span class="timestamp-p1Df1m timestampInline-_lS3aK"><time aria-label="Сегодня, в 17:28" id="message-timestamp-${message.id}" datetime="2023-07-14T14:28:34.016Z"><i class="separator-AebOhG" aria-hidden="true"> — </i>Сегодня, в 17:28</time></span></h3>
        <div id="message-content-${message.id}" class="markup-eYLPri messageContent-2t3eCI" bis_skin_checked="1"><span>${message.content}</span></div>
    </div>
    `;
    //let form_message_accessories = `<div id="message-accessories-${message.id}" class="container-2sjPya" bis_skin_checked="1"></div>`;
    let form_li_message =
    `
    <li id="chat-messages-${message.channel_id}-${message.id}" class="messageListItem-ZZ7v6g" aria-setsize="-1">
        <div class="message-2CShn3 cozyMessage-1DWF9U groupStart-3Mlgv1 wrapper-30-Nkg cozy-VmLDNB zalgo-26OfGz hasReply-2Cr4KE" role="article" data-list-item-id="chat-messages___chat-messages-${message.channel_id}-${message.id}" tabindex="-1" aria-setsize="-1" aria-roledescription="Сообщение" aria-labelledby="message-reply-context-${message.id} uid_1 message-content-${message.id} uid_2 message-timestamp-${message.id}" bis_skin_checked="1">
        ${form_message_contents}
        </div>
    </li>
    `;
    document.getElementsByClassName("scrollerSpacer-3AqkT9")[0].insertAdjacentHTML('beforebegin', form_li_message);

}