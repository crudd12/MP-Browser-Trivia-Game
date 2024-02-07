# Lakers Trivia Game

## Game Inspiration
#### I recently moved to Los Angeles. As someone who loves sports and basketball especially, I was always a fan of select NBA players but never officially a team. When you move to LA, there's no conversation. Be a Lakers fan or bust. As much as I tried to fight it, here I am...LAKERS VS. EVERYBODY ELSE!   

## How to play
#### Help the Lakers win the championship! As the Lakers, the player must answer 5 trivia questions correctly before their opponent. The opponent will receive points for every trivia question the Lakers answer wrong. 

##

### What is needed to build game:
    Landing view:
        - Modal displaying 'How to play' (background dimmed)
        - 'Play' button (addEventListener) - when selected the modal will be hidden

    Game view: 
        - 'Lakers Trivia' banner (header/CSS)
        - Add background image of Lakers court
        - Add Kobe Bryant image on top of Lakers court
        - Create object with trivia questions, 1 correct answer, 3 wrong answers
        - Create/display elements with trivia questions and answers (document.createElement("div")) 
        - Create scoreboard for Lakers and Opponent (HTML)
        - If the user selects, the correct answer:
            - Move to the next set of questions and answers
            - Add 1 point to Lakers if correct answer was selected (store points)
            - Add 1 point to the Opponent if the wrong answer was selected (store points)
        - Display Win/Loss modal when either the Lakers or Opponent reaches 5 points 
            - Add "Lakers Win!" or "Lakers Lose" string to the modal based on results
            - Add Kobe Bryant image to modal
