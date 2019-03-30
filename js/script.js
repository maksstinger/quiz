var userName = ''
var startPage = document.querySelector('.comics-content-start-page');
var helloUser = document.querySelector('.hello-user');
var helloUserText = helloUser.querySelector('.hello-user-text');
var firstLevel = document.querySelector('.first-level');
var cinema = document.querySelector('.cinema');
var coinBlock = document.querySelector('.coin-block')
var beautifulGirlHistory = document.querySelector('.beautiful-girl-history');
var coinButton = document.getElementById('coinBlockBtn');
var cartman = document.querySelector('.cartman');
var rip = document.querySelector('.rip');
var ripFromGirl = document.querySelector('.rip-from-girl');
var fatGitlBlock = document.querySelector('.fatGirl');
var farGirlText = document.querySelector('.fat-girl-text');
var beautifulGirlHistoryText = beautifulGirlHistory.querySelector('.beautiful-girl-history-text');
var nameInRip = document.querySelector('.nameInRip');
var concert = document.querySelector('.concert');
var langChoose = document.querySelector('.langChoose');
var js = document.querySelector('.js');
var jsStarted = document.querySelector('.jsStarted');
var java = document.querySelector('.java');
var javaStarted = document.querySelector('.javaStarted');
var python = document.querySelector('.python');
var pythonStarted = document.querySelector('.pythonStarted');
var php = document.querySelector('.php');
var phpStarted = document.querySelector('.phpStarted');



function userHello () {
    var errorName = document.querySelector('.errorName');
    userName = document.getElementById('userName').value;
    if (userName) {
    startPage.classList.add('notShow');
    helloUser.classList.add('show');
    helloUserText.textContent = userName + ' вместе с семьёй переехали в пусть и не новый, но уютный домик в штате Мэн. Он не жалеет что переехал. ' + userName + ' никогда не был душой компании. За почти 16 лет жизни он даже ни разу не целовался с девушкой, что в его возрасте считалось зазорным. Он мечтает, чтобы на новом месте всё изменилось!'
    } else {
        errorName.classList.add('show');
    }
    return userName
}

function firstOption() {
    helloUser.classList.remove('show');
    firstLevel.classList.add('show');
}

function goCinema() {
    firstLevel.classList.remove('show');
    cinema.classList.add('show');
}

function coin(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}



function getCoin(number) {
    var coinResult = coin(0, 1);
    var coinText = coinBlock.querySelector('.coin-text');
    if (coinResult === 1) {
        coinBlock.style.backgroundImage = "url(images/reshka.png)";
    }

    if (coinResult === number) {
        cinema.classList.remove('show');
        coinBlock.classList.add('show');
        coinText.textContent = "Дуракам везёт...";
        coinButton.addEventListener('click', function girlHistory() {
            fatGitlBlock.classList.remove('show');
            beautifulGirlHistoryText.textContent = 'Ребята провели очень крутой вечер. Кино, девчонки, всё было круто. Кроме девушки Джона... Ха-ха-ха-ха. Вот же неудачник. Вечером ребята проводили дам по домам, и ' + userName + ' впервые поцеловался.'
            coinBlock.classList.remove('show')
            beautifulGirlHistory.classList.add('show');
        })
    } else {
        cinema.classList.remove('show');
        coinBlock.classList.add('show');
        coinText.textContent = "Джон: Сочуствую брат, но такова твоя судьба! Ха-ха-ха-ха";
        coinButton.addEventListener('click', function girlHistory() {
            beautifulGirlHistory.classList.remove('show');
            coinBlock.classList.remove('show');
            fatGitlBlock.classList.add('show');
            farGirlText.textContent = "Завязавшиеся отношения пошли на пользу обоим. Девушка сбросила пару центнеров и стала моделью, а сам " + userName + " стал успешным адвокатом. Можно сказать, что это была очень БОЛЬШАЯ удача в его жизни. Но были и другие варианты..."
        });
    }
}

function cartmanFunction () {
    beautifulGirlHistory.classList.remove('show');
    cartman.classList.add('show');
}
function ripFunction() {
    cartman.classList.remove('show');
    rip.classList.add('show');
    nameInRip.textContent = userName;
    ripFromGirl.textContent = userName + " умер от неизвестной человечеству болезни, которую он подхватил, поцеловав девочку. Есть шанс начать всё завново и избежать печальной участи."
}
function newGame() {
    jsStarted.classList.remove('show');//правка 
    fatGitlBlock.classList.remove('show');
    rip.classList.remove('show');
    firstLevel.classList.add('show');
}
function goConcert() {
    firstLevel.classList.remove('show');
    concert.classList.add('show');
}

// Кара
function goCoding() {
    php.classList.remove('show');
    phpStarted.classList.remove('show');
    python.classList.remove('show');
    pythonStarted.classList.remove('show');
    java.classList.remove('show');
    javaStarted.classList.remove('show');
    js.classList.remove('show');
    jsStarted.classList.remove('show');
    firstLevel.classList.remove('show');
    langChoose.classList.add('show');
}

function goJS() {
    langChoose.classList.remove('show');
    js.classList.add('show');
}
function startJSTest() {
    js.classList.remove('show');
    jsStarted.classList.add('show');
}
function goJava(){
    langChoose.classList.remove('show');
    java.classList.add('show');
}
function startJavaTest() {
    java.classList.remove('show');
    javaStarted.classList.add('show');
}
function goPython(){
    langChoose.classList.remove('show');
    python.classList.add('show');
}
function startPythonTest() {
    python.classList.remove('show');
    pythonStarted.classList.add('show');
}
function goPHP(){
    langChoose.classList.remove('show');
    php.classList.add('show');
}
function startPHPTest() {
    php.classList.remove('show');
    phpStarted.classList.add('show');

}


//Quiz
document.getElementById('start').style.display='none';

var quizArray = [
      ["<img src='images/goCoding/JSq1.jpg'><br>Ну, что же он выведет?","null","2","3","4",3],
      ["<img src='images/goCoding/JSq2.jpg'><br>Не спешите!","Вася, Привет!","Вася, undefined","Вася","Будет ошибка",2],
      ["<img src='images/goCoding/JSq3.jpg'><br>","Нет, нельзя","Можно, будет 1","Хочу на ручки","Недостаточно данных",1],
      ["<img src='images/goCoding/JSq4.jpg'><br>И-и-и X = ?","2","3","5","+infinity",3],
      ["<img src='images/goCoding/JSq5.jpg'><br>Кто этот милый парень?","Илон Маск","Владимир Жириновский","Кончита Вурс","Брендан Эйх",4],
      ["<img src='images/goCoding/JSq6.jpg'><br>Сколько баллов нам поставит Павел?","1","2","3","4",4],
    ];

    var answer = 0;
    var currentAnswer = 0;
    var countAnswer = quizArray.length;
          

    function checkAnswer(num){

        if (num == 0){ 
        
            document.getElementById('answer1').style.display='block';
            document.getElementById('answer2').style.display='block';
            document.getElementById('answer3').style.display='block';
            document.getElementById('answer4').style.display='block';
            document.getElementById('question').style.display='block';

            document.getElementById('answer1').innerHTML=quizArray[currentAnswer][1];
            document.getElementById('answer2').innerHTML=quizArray[currentAnswer][2];
            document.getElementById('answer3').innerHTML=quizArray[currentAnswer][3];
            document.getElementById('answer4').innerHTML=quizArray[currentAnswer][4];
            document.getElementById('question').innerHTML=quizArray[currentAnswer][0];            
            document.getElementById('start').style.display='none';     
            
        } else {

            if (num ==  quizArray[currentAnswer][5]){
                answer++;
                document.getElementById('result').innerHTML='Правильно!<br/>Следующий вопрос:';
            } else {
                document.getElementById('result').innerHTML="Неправильно!<br/>Правильный ответ: " + quizArray[currentAnswer][quizArray[currentAnswer][5]] + '<br/>' + "Следующий вопрос:";
            }
                
            currentAnswer++;
            if (currentAnswer < countAnswer){
            
                document.getElementById('answer1').innerHTML=quizArray[currentAnswer][1];
                document.getElementById('answer2').innerHTML=quizArray[currentAnswer][2];
                document.getElementById('answer3').innerHTML=quizArray[currentAnswer][3];
                document.getElementById('answer4').innerHTML=quizArray[currentAnswer][4];
                document.getElementById('question').innerHTML=quizArray[currentAnswer][0];
                document.getElementById('start').style.display='none';
                
            } else {
                                
                document.getElementById('answer1').style.display='none';
                document.getElementById('answer2').style.display='none';
                document.getElementById('answer3').style.display='none';
                document.getElementById('answer4').style.display='none';
                document.getElementById('question').style.display='none';
                document.getElementById('start').style.display='none';
                                
                var percent =  Math.round(answer/countAnswer*100);               
                var res = '<img src="images/goCoding/JSresSuck.jpg"><br/>Ужасно! Лучше испеките печенье.';
                if (percent>=50) res = '<img src="images/goCoding/JSresSoSo.jpg"><br/>Нормально! Но есть над чем поработать.';
                if (percent==100) res = '<img src="images/goCoding/JSresTop.jpg"><br/>Шикарно! Ваше будущее - на картинке!';
                
                document.getElementById('result').innerHTML='Правильных ответов: ' + answer + ' из ' + countAnswer + ' (' + percent + '%)<br>' + res;
            }
        }
    }
//Каракулько закончил