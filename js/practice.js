(function() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var button = document.getElementById("button");
    var changer = document.getElementById("changer");

    runMe = function () {
        div1.style.backgroundColor="red";
        div1.style.marginTop="10px";
        };


    runMeAgain = function () {
        div2.style.backgroundColor="green";
        div2.style.marginTop="10px";
    };

    change = function () {
      button.addEventListener("click", colorChange)
    };

    colorChange = function () {
      div1.style.backgroundColor="purple";
    };

    fruitChanger = function () {
        changer.addEventListener("click", selectedFruit)
    };

    selectedFruit = function () {
        var item = document.getElementById("selector").selectedIndex;
        var current = document.getElementsByTagName("option")[item].value;

        if (current == "banana") {
            div2.style.backgroundColor="yellow";
        } else if (current == "pear") {
            div2.style.backgroundColor="orange";
        } else if (current == "apple") {
            div2.style.backgroundColor="brown";
        }
        console.log(current);
    };


    runMe();
    runMeAgain();
    change();
    fruitChanger()
})();