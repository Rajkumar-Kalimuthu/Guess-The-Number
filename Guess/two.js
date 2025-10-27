var print = document.getElementById("one");
    var para = document.getElementById("chick");
    var rannum = Math.floor(Math.random() * 10) + 1;
    var score = document.getElementById("two");
    var winner = 10

    function verson() {
        var batta = print.value

        if (rannum == batta) {
            // console.log("Right"
            alert("You Win");
            para.textContent = "Right guess!"
            score.textContent = "Score:10"

        }
        else {
            winner = winner - 1
            score.textContent = "Score:" + winner
            para.textContent = "wrong ";

        }
        if (winner == 0) {
            alert("TRY AGAIN" + rannum);
        }
    }