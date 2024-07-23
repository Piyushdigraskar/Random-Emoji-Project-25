 const btnEl = document.getElementById('btn');

 const emojinameEl = document.getElementById('emoji-name')

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=8a170e9d1010f5e249393a7cda7e64490fb4e10b");

    data = await response.json();
    console.log(data);
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    }
}

getEmoji();

btnEl.addEventListener('click', ()=>{
    const randomNum = Math.floor(Math.random()* emoji.length)

    btnEl.innerText = emoji[randomNum].emojiName;
    emojinameEl.innerText = emoji[randomNum].emojiCode;
   
 })