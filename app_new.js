//let name = prompt("What is your name?");
//let gender = prompt("What is your gender");
//alert("hii " +  name);
let questions = [];
let bank = [0,1000,5000,10000,50000,75000,125000,250000,500000];
let user_bank = 0;
let bank_count = 0;
let random_key = '';

let round_2_question={
    0:{
        "question":"How do you relate to your maternal grandfather?",
        "options": {
            0: 'Uncle',
            1: 'Mother’s uncle',
            2: 'Mother’s Brother',
            3: 'Mother’s father',
        },
        "correct_answer" :3
    },
    1:{
        "question":"what Is the temperature of the moon higher or lower during the day?",
        "options": {
            0: 'lower',
            1: 'higher',
            2: 'None of above',
            3: 'mix',
        },
        "correct_answer" : 1
    },
    2:{
        "question":" What is another word for a lexicon?",
        "options": {
            0: 'TV',
            1: 'computer',
            2: 'Dictionary',
            3: 'science',
        },
        "correct_answer" :2
    },
    3:{
        "question":" In football (soccer), who was nicknamed ‘The Divine Ponytail?",
        "options": {
            0: 'Ronaldo',
            1: 'Messi',
            2: 'Non of above',
            3: 'Roberto Baggio',
        },
        "correct_answer" : 3
    },
};
let round_1_question = {
    0:{
        "question":"capital of india",
        "options": {
            0: 'Delhi',
            1: 'Ahmedabad',
            2: 'Hydrabad',
            3: 'pune',
        },
        "correct_answer" :0
    },
    1:{
        "question":"capital of usa?",
        "options": {
            0: 'Washington DC',
            1: 'San Franciso',
            2: 'newyork',
            3: 'Los Angles',
        },
        "correct_answer" : 0
    },
    2:{
        "question":"Who has the most run in cricket history?",
        "options": {
            0: 'Virat',
            1: 'Sachin',
            2: 'Brain lara',
            3: 'Ricky ponting',
        },
        "correct_answer" : 1
    },
    3:{
        "question":"Which is the worlds most populous country?",
        "options": {
            0: 'India',
            1: 'USA',
            2: 'Canada',
            3: 'China',
        },
        "correct_answer" : 3
    },
    4:{
        "question":"About what percentage of the earth surface is water?",
        "options": {
            0: '70%',
            1: '58%',
            2: '68%',
            3: '50%',
        },
        "correct_answer" : 0
    },
    5:{
        "question":"Is Washington, D.C. a state?",
        "options": {
            0: 'True',
            1: 'False',
            2: 'Not Decided ',
            3: 'Non of Above',
        },
        "correct_answer" : 1
    },
    6:{
        "question":"How many moons does the earth have?",
        "options": {
            0: '0',
            1: '3',
            2: '2',
            3: '1',
        },
        "correct_answer" : 3
    },
    7:{
        "question":"What is the official language of the U.S.?",
        "options": {
            0: 'english',
            1: 'french',
            2: 'latin',
            3: 'there is no official language of US',
        },
        "correct_answer" : 3
    },
    8:{
        "question":"How many planets are there in the solar system?",
        "options": {
            0: '9',
            1: '4',
            2: '8',
            3: '10',
        },
        "correct_answer" : 2
    },
    9:{
        "question":"How many letters are there in the English alphabet?",
        "options": {
            0: '25',
            1: '26',
            2: '20',
            3: '22',
        },
        "correct_answer" : 1
    },
    10:{
        "question":"How many consonants are there in the English alphabet?",
        "options": {
            0: '21',
            1: '25',
            2: '8',
            3: '10',
        },
        "correct_answer" : 0
    },
    11:{
        "question":"What is the next number in the following sequence 7, 14, 21, 28",
        "options": {
            0: '0',
            1: '34',
            2: '35',
            3: '22',
        },
        "correct_answer" : 2
    },
    12:{
        "question":"How many players are there in a cricket team?",
        "options": {
            0: '15',
            1: '10',
            2: '13',
            3: '11',
        },
        "correct_answer" : 3
    },
    13:{
        "question":"Which is the tallest mountain in the world?",
        "options": {
            0: 'Himalaya',
            1: 'Mount Everest',
            2: 'Non of above',
            3: 'K2',
        },
        "correct_answer" : 1
    },
    14:{
        "question":"Which planet is known as the Red Planet?",
        "options": {
            0: 'moon',
            1: 'earth',
            2: 'sun',
            3: 'Mars',
        },
        "correct_answer" : 3
    },
    15:{
        "question":"Diwali is the festival of which country?",
        "options": {
            0: 'India',
            1: 'China',
            2: 'USA',
            3: 'Gujrat',
        },
        "correct_answer" : 0
    },
    16:{
        "question":"The world smallest country is",
        "options": {
            0: 'India',
            1: 'Canada',
            2: 'Vatican City',
            3: 'Russia  ',
        },
        "correct_answer" : 2
    },
    17:{
        "question":"Ronaldo is a famous player associated with the game of",
        "options": {
            0: 'Chees',
            1: 'Football',
            2: 'Lawn Tennis',
            3: 'Non of above',
        },
        "correct_answer" : 1
    },
    18:{
        "question":"Which two countries share the longest border in the world?",
        "options": {
            0: 'India and pakistan',
            1: 'US and Canada',
            2: 'Vatican City and china',
            3: 'Russia and China ',
        },
        "correct_answer" : 1
    },
    19:{
        "question":"viswanathan anand is a famous player associated with the game of",
        "options": {
            0: 'Chees',
            1: 'Football',
            2: 'Lawn Tennis',
            3: 'Non of above',
        },
        "correct_answer" : 0
    },
    20:{
        "question":"What does the Internet prefix WWW stand for?",
        "options": {
            0: 'world wide website',
            1: 'world wide web',
            2: 'world wide net',
            3: 'non of above',
        },
        "correct_answer" : 1
    },
    21:{
        "question":"Which of the following is not a metal: gold, resin, glass?",
        "options": {
            0: 'resin',
            1: 'gold',
            2: 'glass',
            3: 'all of above',
        },
        "correct_answer" : 0
    },
    22:{
        "question":"Which first electrical item did Thomas Edison invent?",
        "options": {
            0: 'lightbulb',
            1: 'fan',
            2: 'computer',
            3: 'tv',
        },
        "correct_answer" : 0
    },
    23:{
        "question":" Which was the occupation or job of the following famous people: Leonardo da Vinci, Pablo Picasso, Vincent Van Gogh?",
        "options": {
            0: 'Musician',
            1: 'Carpenter',
            2: 'Dancers',
            3: 'Painter',
        },
        "correct_answer" : 3
    },
    24:{
        "question":"How many cards are there in a complete pack of cards?",
        "options": {
            0: '51',
            1: '40',
            2: '52',
            3: '26',
        },
        "correct_answer" : 2
    },
    25:{
        "question":" What is the hottest continent on Earth?",
        "options": {
            0: 'africa',
            1: 'india',
            2: 'Asia',
            3: 'South america',
        },
        "correct_answer" : 0
    },
    26:{
        "question":"Which company was found by Jeff Bezos in Bellevue, Washington, in July 1994?",
        "options": {
            0: 'google',
            1: 'facebook',
            2: 'Amazon',
            3: 'gmail',
        },
        "correct_answer" : 2
    },
    27:{
        "question":"Red and which other colour is on the flag of Austria?",
        "options": {
            0: 'blue',
            1: 'green',
            2: 'orange',
            3: 'white',
        },
        "correct_answer" : 3
    },
    28:{
        "question":"What year was the very first model of the iPhone released?",
        "options": {
            0: '2010',
            1: '2007',
            2: '2005',
            3: '2011',
        },
        "correct_answer" : 1
    },
    29:{
        "question":"Which animal can be seen on the Porsche logo?",
        "options": {
            0: 'cow',
            1: 'cat',
            2: 'Horse',
            3: 'lion',
        },
        "correct_answer" : 2
    },
    30:{
        "question":"During World War II, when did Germany attack France?",
        "options": {
            0: '1940',
            1: '1955',
            2: '1965',
            3: '1945',
        },
        "correct_answer" : 0
    },

};

//console.log();
let stopwatch;
let round_2_timer;
let currentNumber = 120;
let currentNumber_2 = 60;

const round_2_start = function(){
    if (user_bank != 0) {
        clearInterval(interval_round1);
        alert("Round 1 is over");
        let sound4 = playSound();


        //hide round_1 UI
        document.getElementById("round_1").style.display = "none";
        document.getElementById("round_count").innerHTML = "round 2";

        if(user_bank >= 500000){
            user_bank = 500000;
            //document.getElementById("round_1_win").innerHTML=user_bank;
        }
        //document.getElementById("round_1_win").innerHTML=user_bank;

        document.getElementById("round_2").style.display = "block";
        round_2_timer = setInterval(round_2_timer_display,1000);
        questions = [];
        display_question(round_2_question,'round_question_2','round_2_option','checkAnswerRoundTwo');

        document.getElementById("round_1").remove();


        document.getElementById("user_bank_amount").innerHTML = user_bank;


    }
    else
    {
        let sound3= playSound();
        alert("You are the Weakest Link as You have $0 in your bank");

        location.replace("lost.html");
    }
}
const updateDisplay = function() {
    document.getElementById("timer").innerHTML=currentNumber+' Sec';

    //stop timer when reach 0
    //we do all of the code into this function beacause we have to check every second that round is over not
    if(currentNumber === 0){

        round_2_start()

    }

    currentNumber = currentNumber -1;
}

let interval_round1 = setInterval(updateDisplay,1000);
const round_2_timer_display = function(){

    document.getElementById("timer_round2").innerHTML = currentNumber_2+' Sec';

    if(currentNumber_2 == 0)
    {
        clearInterval(round_2_timer_display);
        alert('You are the weakest Link');
        window.location.href="lost.html";
    }


    currentNumber_2 = currentNumber_2 - 1 ;


}


const playSound = function(){
  var abc = new Audio('C:/Users/harsh/Desktop/game_final/sounds/over.mp3');
  abc.play();
}


const display_question = function(question_array,question_html_element_id,option_html_element_id,answer_function_name)
{




            random_key = "";
            let question_array_length = Object.keys(question_array).length;
            for(let i=0; i<question_array_length;i++)
            {
                random_key = generate_number(question_array);
                if(questions.indexOf(random_key)  == -1)
                {
                    break;
                }

            }
            if(random_key in question_array)
            {
                if(questions.length > 0 && bank_count > 0 && answer_function_name == 'checkAnswer') // IF QUESTION LENGTH GREATER THAN 0 AND SIDEBAR VALUE IS GREATER THAN 0 AND ONLY FOR ROUND 1 QUESTION. Checkanswer is a function for check answer for round 1 question. so if answer_function_name == checkAnswer that means round 1 running. If round 2 start that answer_function_name == checkAnswerRoundTwo which is not true condition false.
                {
                    let add_amount_bank = confirm('Do you want to add money in bank ? ');
                    if(add_amount_bank == true) // IF USER PRESS YES
                    {
                        add_amount();
                        if(user_bank >= 500000){
                            round_2_start()
                        }
                    }
                }

            let question_on_screen = question_array[random_key];
            questions.push(random_key);
            document.getElementById(question_html_element_id).innerHTML = '<p>'+question_on_screen['question']+'</p>';
            let option_html = '';
            let options = question_on_screen['options'];
            console.log('OBJECT KEY',Object.keys(options))
            for (let i = 0; i < Object.keys(options).length; i++)
            {
                    option_html += '<input type="radio" id="option_'+i+'" name = "question_option" onclick="'+answer_function_name+'(this)"  value="'+i+'"/><label for="option_'+i+'">'+options[i]+'</label><br>';
            }
            //document.getElementById().addEventListener('click', checkAnswer);

            document.getElementById(option_html_element_id).innerHTML = option_html;
            console.log(option_html);

            }

}



const generate_number=function(question_object)
{
    let question_object_length = Object.keys(question_object).length;
    let num = Math.floor(Math.random() * question_object_length);
    return num;
}


const checkAnswer=function(element)
{
    console.log('element',element);

        let question_id = random_key;
        let option_id = element.value;
        console.log('OPTION ID',option_id);
        console.log(question_id);
        console.log(round_1_question[question_id]);


            if(option_id != round_1_question[question_id]['correct_answer'])
            {
                //alert('Game Is Over');
                alert("your answer is wrong");
                if(bank_count > 0)
                {
                    document.getElementById("bank_0").innerHTML = '<b>'+bank[0]+'</b>';
                    document.getElementById('bank_'+bank_count).innerHTML = bank[bank_count];
                    bank_count = 0;

                }
                display_question(round_1_question,'question','option','checkAnswer');
            }
            else
            {
                if(bank_count <= 7)
                {
                    bank_count++;
                    document.getElementById('bank_'+bank_count).innerHTML = '<b>'+bank[bank_count]+'</b>';
                    document.getElementById('bank_'+(bank_count-1)).innerHTML = bank[bank_count-1];
                }

                if(user_bank >=500000){
                    round_2_start()

                }else{

                    display_question(round_1_question,'question','option','checkAnswer');

                }
            }

}

const checkAnswerRoundTwo= function(element)
{

        let question_id = random_key;
        let option_id = element.value;
        console.log('OPTION ID',option_id);
        console.log(question_id);
        console.log(round_2_question[question_id]);

            if(option_id == round_2_question[question_id]['correct_answer'])
            {
                if(questions.length == 4)
                {
                    let sound1 = playSound();


                    alert('You Won..!');

                    window.location.href="win.html";

                }

                display_question(round_2_question,'round_question_2','round_2_option','checkAnswerRoundTwo');
            }
            else
            {
                let sound2 = playSound();


                sleep(3000).then(() => {
                  alert('You are the weakest link..');

                  window.location.href="lost.html";
                })

            }

}



// TO ADD AMOUNT IN BANK
const add_amount=function()
{
    if(bank_count <= 8)
    {
        if(user_bank >= 500000)
        {
            alert('Bank Is Full');
            user_bank = 500000;
            document.getElementById("user_bank_amount").innerHTML = 'Your Amount : '+user_bank;
            display_question(round_2_question,'round_question_2','round_2_option','checkAnswerRoundTwo');



        }
        else
        {
            if(bank_count > 0)
            {
                user_bank += bank[bank_count];
                document.getElementById("user_bank_amount").innerHTML = 'Your Amount : '+user_bank;
                document.getElementById("bank_0").innerHTML = '<b>0</b>';
                document.getElementById('bank_'+bank_count).innerHTML = bank[bank_count];

                bank_count = 0;
            }
        }
    }

}

display_question(round_1_question,'question','option','checkAnswer');
