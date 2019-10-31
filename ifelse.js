function grader (score) {
    var grade

    if (score >= 90) {
        grade = 'A'
    }
    if (score >= 80 && score < 90){
        grade = 'B'
    }
    if (score >= 70 && score < 80){
        grade = 'C'
    }
    if (score >= 60 && score < 70){
        grade = 'D'
    }
    if (score >= 59 && score < 60){
        grade = 'F'
    }

    return grade
}

//test for scores 60 - 100
for(var score = 60; score <= 100; score = score + 10){
    var grade = grader(score)
    console.log("You're score is " + score + " this is equal to the letter grade " + grade)  
}

var count = 60
var grade
while (count <= 100){
    grade = grader(count);
    console.log("You're score is " + count + " this is equal to the letter grade " + grade);  
    count = count + 10;
}



function listMyTopFiveFoods (topFoods){
    var choice = 1
    topFoods.forEach((food) => {
        switch(choice){
            case 1:
                console.log('My 1st choice is ' + food)
                break
            case 2:
                console.log('My 2nd choice is ' + food)
                break
            case 3:
                console.log('My 3rd choice is ' + food)
                break
            case 4:
                console.log('My 4th choice is ' + food)
                break
            case 5:
                console.log('Nothing Beats ' + food + '!!!')
                break
        }
        choice = choice + 1 
    })
}

var topFoods = ['Rice and Beans', 'Curry Goat', 'Chimichanga', 'Tonketsu Ramen', 'Donuts' ]
listMyTopFiveFoods(topFoods)