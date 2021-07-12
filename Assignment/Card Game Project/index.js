let cards=[
{
    image:"https://th.bing.com/th/id/OIP.-jYYaHpPYLt3M-HNZzmu5gHaHa?pid=ImgDet&rs=1",
    value:1,
    status:"closed"
},
{
    image:"https://th.bing.com/th/id/OIP.-jYYaHpPYLt3M-HNZzmu5gHaHa?pid=ImgDet&rs=1",
    value:1,
    status:"closed"
},
{
    image:"https://www.barbie-collectible.com/wp-content/uploads/2017/07/Barbie-Endless-Hair-Kingdom-Princess-Doll-Purple-5.jpg",
    value:2,
    status:"closed"
},
{
    image:"https://www.barbie-collectible.com/wp-content/uploads/2017/07/Barbie-Endless-Hair-Kingdom-Princess-Doll-Purple-5.jpg",
    value:2,
    status:"closed"
},
{
    image:"https://th.bing.com/th/id/OIP.gPYoPpDyS3jIg8L7YoRNpgHaHa?pid=ImgDet&w=900&h=900&rs=1",
    value:3,
    status:"closed"
},
{
    image:"https://th.bing.com/th/id/OIP.gPYoPpDyS3jIg8L7YoRNpgHaHa?pid=ImgDet&w=900&h=900&rs=1",
    value:3,
    status:"closed"
},
{
    image:"https://th.bing.com/th/id/OIP.BaQ7RPDZHUooj4aWsD811QHaFj?pid=ImgDet&rs=1",
    value:4,
    status:"closed"
},
{
    image:"https://th.bing.com/th/id/OIP.BaQ7RPDZHUooj4aWsD811QHaFj?pid=ImgDet&rs=1",
    value:4,
    status:"closed"
},
{
    image:"https://www.osmpic.com/wp-content/uploads/2019/05/PicsArt_05-03-07.07.42-691x1024.jpg",
    value:5,
    status:"closed"
},
{
    image:"https://www.osmpic.com/wp-content/uploads/2019/05/PicsArt_05-03-07.07.42-691x1024.jpg",
    value:5,
    status:"closed"
},

]
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let cardsCopy=cards;
function displayCards(data)
{
    let cardsString="";
    data.forEach(function(card,index) {
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
        </div>
        `;   
    });
    document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    console.log(cards);
cards[index].status="opened";
if(cardCount===1){
    val1=cards[index].value;
    cardCount++;

}
else if(cardCount===2){
    val2=cards[index].value;
    if(val1===val2){
        score++;
        document.getElementById('score').innerText=score;
        val1=null;
        val2=null;
        cardCount=1;
    }
    else{
        alert("Game Over");
        location.reload();
    }
}
displayCards(cards);
}
