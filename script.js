//Get Data
let users = [
    {
        profilePic: "https://i.pinimg.com/564x/4e/be/6a/4ebe6a508ee0df712264eb459cf53694.jpg", 
        pendingMsg: 2, 
        location: "Tokyo, Japan", 
        name:"Aiko", 
        age: 21,
        displayPic:"https://i.pinimg.com/564x/c4/d0/51/c4d05189a2d92903fb0186d2ab841cef.jpg",
        interests:["Modeling", "Acting"],
        bio:"Konnichiwa! It is with great pleasure and excitement that I stand before you today as Aiko, a proud daughter of Tokyo, with stars in her eyes and a world of possibilities at her fingertips.",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/8b/07/88/8b07889c38ae32c9dc27583502e63609.jpg", 
        pendingMsg: 0, 
        location: "Punjab, India", 
        name:"Harleen", 
        age: 22,
        displayPic:"https://i.pinimg.com/564x/a2/75/31/a2753135a2f27f0a4baeca490bc80fa5.jpg",
        interests:["Singing", "Make-up"],
        bio:"I'm Harleen, a soulful artist hailing from the majestic land of Punjab, India. With a passion for two enchanting worlds, makeup and singing, I find my true expression through the harmonious blend of beauty and melody.",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/d3/98/6d/d3986dc4a2d04ea2774f9d463484426d.jpg", 
        pendingMsg: 1, 
        location: "Beijing, China", 
        name:"Dilireba", 
        age: 28,
        displayPic:"https://i.pinimg.com/564x/bc/e0/c7/bce0c7db59ca7e6b77c7f901f3748905.jpg",
        interests:["Singing", "Acting"],
        bio:"I found solace and joy in expressing myself through melodies and exploring different characters on stage and screen. Join me on this journey as we delve into the magical world of music and storytelling together. Let's make some unforgettable memories!",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/1e/8e/61/1e8e618a058dfa82a780872b3fd0bf0b.jpg", 
        pendingMsg: 5, 
        location: "New York, USA", 
        name:"Cassandra", 
        age: 23,
        displayPic:"https://i.pinimg.com/564x/62/bb/53/62bb5391f628cb506e7ab38b77b0f129.jpg",
        interests:["Travel"],
        bio:"I'm Cassandra, and I'm thrilled to share a bit about myself with you. Hailing from the enchanting landscapes of New York, USA, I've always had a passion for Traveling.",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/f3/77/97/f3779711d0b6844a27f60f6e679050c8.jpg", 
        pendingMsg: 7, 
        location: "Uttar Pradesh, India", 
        name:"Rida", 
        age: 19,
        displayPic:"https://i.pinimg.com/564x/51/d0/83/51d083fb0b8b414b2a2b1617ccffad33.jpg",
        interests:["Reels", "Photoshoot"],
        bio:"Namaste! I'm Rida, a spirited creator from the heartland of Uttar Pradesh, India. With a passion for visual storytelling, I immerse myself in the art of making reels and capturing the essence of life through the lens of my camera.",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/55/54/01/5554013b216224b647624e7b6cc6d72a.jpg", 
        pendingMsg: 0, 
        location: "Sylhet, Bangaldesh", 
        name:"Dilruba", 
        age: 18,
        displayPic:"https://i.pinimg.com/564x/c4/b1/c8/c4b1c82d681cf67f0f6d80b475f85ff3.jpg",
        interests:["Singing"],
        bio:"I'm Dilruba, a radiant soul hailing from the picturesque town of Sylhet in Bangladesh. Nestled amidst the lush greenery and tea gardens of this enchanting region, I find inspiration in the beauty that surrounds me.",
        isFriend: null
    },
    {
        profilePic: "https://i.pinimg.com/564x/03/9a/f1/039af1cd1f127483cee25745b816d484.jpg", 
        pendingMsg: 0, 
        location: "West Bengal, India", 
        name:"Rani", 
        age: 18,
        displayPic:"https://i.pinimg.com/564x/7e/b0/c9/7eb0c9ce3256883cdb26cf4fc311d9c7.jpg",
        interests:["Dance"],
        bio:"I'm Rani, a spirited dancer from the bustling city of Kolkata, where every step echoes with the rhythm of life. With a heart that beats to the melody of music and feet that dance to the pulse of the streets, I find my truest expression on the dance floor.",
        isFriend: null
    } 

]

let curr = 0;
let isAnimating = false;

function select(elem){
    return document.querySelector(elem);
}

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;
    select(".badge h5").textContent = users[index].pendingMsg;
    select(".prflimg img").src = users[index].profilePic;
    select(".bio p").textContent = users[index].bio;

    var clutter ="";
    users[index].interests.forEach(function(interests){
        clutter += `<div class="tag flex items-center justify-center bg-white/30 px-3 py-2 rounded-full gap-0">
        <b><h3 class="text-xs tracking-tighter">${interests}</h3></b>
    </div>`
    })

    select(".tags").innerHTML = clutter;
}



(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;
    
    setData(curr);
    curr = 2;
})();



function imageChange(){
    if(!isAnimating){
    isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function() {
                isAnimating = false;
               let main = select(".maincard");
               let incoming = select(".incomingcard");
    
               incoming.classList.remove("z-[2]");
               incoming.classList.add("z-[3]");
               incoming.classList.remove("incomingcard");
    
               main.classList.remove("z-[3]");
               main.classList.remove("z-[2]");
               gsap.set(main, {
                scale: 1,
                opacity: 1
               })
               if(curr === users.length)  curr=0;
               select(".maincard img").src = users[curr].displayPic;
               curr++;
               main.classList.remove("maincard");
               incoming.classList.add("maincard");
               main.classList.add("incomingcard");
            }
        });
        
    
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0, // Corrected typo
            ease: "circ", // Corrected typo and added quotes
            duration: 0.9 // Corrected typo
        }, "a")
        .from(".incomingcard", {
            scale: 0.9, // Corrected typo
            opacity: 0, // Corrected typo
            ease: "circ", // Corrected typo and added quotes
            duration: 1.1 // Corrected typo
        }, "a");
    }
    
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function() {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
      })
  });

  accept.addEventListener("click", function() {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
      })
  });



(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div)
    })
  })();

  