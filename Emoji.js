
import React,{useState} from 'react'
const storeEmoji=[
    {
       id:1,
       symbol:"😂",
       name:"laughing"
    },
    {
        id:2,
        symbol:"😃",
        name:"happy"   
    },
    {
        id:3,
        symbol:"😱",
        name:"shocked"   
    },
    {
        id:4,
        symbol:"😡",
        name:"angry"   
    },
    {
        id:5,
        symbol:"🥶",
        name:"freeze"   
    },
    {
        id:6,
        symbol:"✌️",
        name:"victory"   
    },
    {
        id:7,
        symbol:"🤞",
        name:"good luck"   
    },
    {
        id:8,
        symbol:"😈",
        name:"devil"   
    },
    {
        id:9,
        symbol:"🤡",
        name:"jocker"   
    },
    {
        id:10,
        symbol:"❤️",
        name:"love"   
    },
    {
        id:11,
        symbol:"🥹",
        name:"crying"   
    },
    {
        id:12,
        symbol:"😝",
        name:"crazy"   
    },
    {
        id:13,
        symbol:"😎",
        name:"attitude"   
    },
    {
        id:14,
        symbol:"🫂",
        name:"hug"   
    },
    {
        id:15,
        symbol:"🧐",
        name:"searching"   
    },
    {
        id:16,
        symbol:"🐖",
        name:"pig"   
    },
];
function Emoji() {
    const [searchEmoji,setSearchEmoji]=useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji=storeEmoji.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return(emojiName.includes(searchEmoji.toLowerCase())); 
    });
  return (
    <div>
        <h1>React Emoji App!!!</h1>
<input type="text" placeholder='Search for the emoji...' value={searchEmoji} onChange={(handleChange)}></input>
<h2>
    {
    showEmoji.map((emoji)=>emoji.symbol)
    }
</h2>
    </div>
  )
}
export default Emoji