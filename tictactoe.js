let boxes=document.querySelectorAll(".box"); // access boxes
let reset_button=document.querySelector("#reset-button")  // access the button


let newgame_button=document.querySelector("#newgame-button");  // access the newgame button
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");



let turnO=true; // playerX,playerO..

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


               // reset Button function....

const resetGame=() =>
{
    turnO=true;

    enabledBoxes();
    msg_container.classList.add("hide");
};



boxes.forEach ( (box) =>  {
    box.addEventListener("click" , () => {   
       console.log("box was clicked");
      
       if(turnO)
       {
        box.innerText="O";
        turnO=false;

       }else{
        box.innerText="X";
        turnO=true;
       }

       box.disabled=true;

       check_winner();
    });
});

 

                    //   disabled winner if finished the game once

 const disabledBoxes=() =>
 {
    for(let box of boxes)
    {
        box.disabled=true;
    }
 };

                       //   enabled if game is restart...
 
 const enabledBoxes=() =>
 {
    for(let box of boxes)
    {
        box.enabled=false;
        box.innerText="";
    }
 };

             
                       // Winner function..

const showWinner = (Winner) =>
{
     msg.innerText= `Congratulation, Winner is ${Winner}`;
     msg_container.classList.remove("hide");

     disabledBoxes();
};


const check_winner= () =>
{
    for(let pattern of winPattern)
    {
 
        let pos1_val=boxes[pattern[0]].innerText;
        let pos2_val=boxes[pattern[1]].innerText;
        let pos3_val=boxes[pattern[2]].innerText;

        
        // Winning Condition...

    if(pos1_val!="" && pos2_val!="" && pos3_val!="")
    {
        if(pos1_val===pos2_val && pos2_val===pos3_val)
        {
            console.log("Winner" ,pos1_val);

            showWinner(pos1_val);
        }
    }

    //     console.log(pattern[0],pattern[1],pattern[2]);

    //     console.log(
    //         boxes[pattern[0]].innerText,
    //         boxes[pattern[1]].innerText,
    //         boxes[pattern[2]].innerText
    //     );

    }
};


newgame_button.addEventListener("click",resetGame);
reset_button.addEventListener("click",resetGame);