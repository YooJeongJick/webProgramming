function weatherButtonClickHandler() {
    console.log("NEWS CLIKED!!!!!");
    var subjectH3Selector = document.querySelector("#subject");
    subjectH3Selector.innerHTML = "DOM의 이해";
    subjectH3Selector.style.color = "#fff";
    // window.location.href = "https://www.naver.com"
}

function sportButtonClick() {
    alert("스포츠 경기는 현재 확인 할 수 없습니다.");
}

function loopExample() {
    // 1부터 100가지 더한 결과를 로그에 찍는다.
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        // sum = sum + i;
        console.log(i);
    }

    console.log(sum);
}

function compareExample(age) {
    // number, string, objecct, array
    // Boolean : true / false
    var isAdult = age >= 19;
    var isBaby = age <= 3;

    // if (isAdult) {
    //     console.log("성인 입니다.");
    // } else if (isBaby) {
    //     console.log("아기 입니다.");
    // } else {
    //     console.log("성인이 아닙니다.");
    // }

    if (!isAdult) {
        return console.log("성인이 아닌경우, 접속하실 수 없습니다.");
    }

    console.log("정상적으로 접속하셨습니다.")

}

function switchExample(ageType) {
    switch (ageType) {
        case "adult" :
            console.log("성인");
            break;
        case "baby" :
            console.log("아기");
            break;
        default :
            console.log("청소년");
            break;
    }
}

function arrayExample() {
    // var numbersStr = "1,2,3,4,5,6,7,8,9,0";
    // var alphabetArray = numbersStr.split(',');
    // console.log(numbersStr);
    // console.log(alphabetArray);

    var alphabetArray = [];
    alphabetArray.push("A");
    alphabetArray.push("B");
    alphabetArray.push("C");
    alphabetArray.push("G");
    alphabetArray.push("D");
    alphabetArray.push("E");
    alphabetArray.push("F");

    // for (var i = 0; i < alphabetArray.length; i++) {
    //     console.log(alphabetArray[i]);
    // }

    // var str = alphabetArray.join(" ");
    // console.log(str);

    // var cIndex = alphabetArray.indexOf("C");
    // console.log(cIndex);

    // var alphabet = alphabetArray.pop();
    // console.log(alphabet);

    // var alphabet = alphabetArray(alphabetArray.length - 2);
    // console.log(alphabet);

    alphabetArray.sort();
    console.log(alphabetArray);
}

function sortAge(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if(a. age > b.age) {
        return 1;
    }

    return 0;
}

function arrayExample2() {
    var persons = [];

    var person1 = {
        name : "홍길동",
        age : 100
    };

    var person2 = {
        name : "김두환",
        age : 99
    };

    persons.push(person1);
    persons.push(person2);

    persons = persons.sort();
    console.log(persons);
}

window.addEventListener('load', function() {
    var pelements = document.querySelectorAll("p");
    for (var i = 0; i < pelements.length; i++) {
        pelements[i].innerHTML = "하하하";
    }

    // var div = document.querySelector("#numberList");
    // var listHTML = "";
    // listHTML += "<ul>";
    // for (var i = 1; i < 100; i++) {
    //     listHTML += "<li>" + i + "</li>";
    //     // listHTML += <li>$(i)</li>;
    // }
    // listHTML += "</ul>";
    // div.innerHTML = listHTML;

    // // var weatherbutton = document.getElementById("weather");
    // var weatherbutton = document.querySelector("#weather");
    // weatherbutton.addEventListener("click", weatherButtonClickHandler);

    // var sportbutton = document.querySelector("#sport")
    // sportbutton.addEventListener("click", sportButtonClick);
});
