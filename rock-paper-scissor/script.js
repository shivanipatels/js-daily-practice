 let scoreStr = localStorage.getItem("score");
      let score;
      resetScore(scoreStr);
      function resetScore(scoreStr) {
        score = scoreStr
          ? JSON.parse(scoreStr)
          : {
              win: 0,
              lost: 0,
              tie: 0,
            };

        score.displayScore = function () {
          return `Score = Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
        };
      }

      function genrateComputerchoice() {
        let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
          return "paper";
        } else if (randomNumber > 1 && randomNumber <= 2) {
          return "rock";
        } else {
          return "scissor";
        }
      }

      function resultMsg(computerChoice, yourChoise) {
        if (yourChoise === "paper") {
          if (computerChoice === "paper") {
            score.tie++;
            return "match tie";
          } else if (computerChoice === "rock") {
            score.win++;
            return "user win";
          } else if (computerChoice === "scissor") {
            score.lost++;
            return "computer win";
          }
        } else if (yourChoise === "rock") {
          if (computerChoice === "rock") {
            score.tie++;
            return "match tie";
          } else if (computerChoice === "scissor") {
            score.win++;
            return "you win";
          } else if (computerChoice === "paper") {
            score.lost++;
            return "computer win";
          }
        } else if (yourChoise === "scissor") {
          if (computerChoice === "scissor") {
            score.tie++;
            return "match tie";
          } else if (computerChoice === "rock") {
            score.lost++;
            return "computer win";
          } else if (computerChoice === "paper") {
            score.win++;
            return "you win";
          }
        }
      }

      function showResult(computerChoice, userChoice, result) {
        localStorage.setItem("score", JSON.stringify(score));
        document.querySelector("#user-move").innerText = userChoice
          ? `you have chosen ${userChoice}.`
          : "";
        document.querySelector("#computer-move").innerText = computerChoice
          ? `Computer choice is ${computerChoice}.`
          : "";
        document.querySelector("#result").innerText = result || ` `;
        document.querySelector("#score").innerText = ` ${score.displayScore()}`;
      }