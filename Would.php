<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Would You Rather</title>
        <link rel="stylesheet" href="Engine.css">
        <style>@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Fredoka+One&family=Varela+Round&display=swap');
            body {
                background-color: #e8e8e8; overflow-x: hidden; font-family: 'Varela Round', sans-serif;
            }
            .container {
            position: relative;
            }
        </style>
    </head>
    <body>
        <div id="headOfId">
            <h1 align="center" class="headParaf">Would You Rather Game</h1>
            <h3 align="center" style="margin: 2rem;" id="HeadT">What İs Your Choose <span class="textHead">Mercedes G500</span> Or <span class="textHead">Mercedes AMG GT R</span></h3>
            
             <div id="oneP" class="column" style="margin-left: 5.5rem;" onmouseover="lefti()" onmouseout="lefti2()">
                <img src="Img/Mercedes.jpg" width="100%">
                <div class="left"><button class="wbutton" value='1' onclick='buttonV(this)'>
               
                </button></div>
            </div>
            <div id="twoP" class="column" style="margin-right: 5.5rem;" onmouseover="righti()" onmouseout="righti2()">
                <img src="Img/Mercedes2.jpg" width="100%">
                <div class="right"><button class="wbutton" value='2' onclick='buttonV(this)'></button><br></div>
            </div> 
           
            <div id="addMe" style="display: none;"></div>
        </div>

            <!-- The Modal -->
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <h2>The humans %<span id="modal-percent"> </span> choose the option you choose</h2>
                </div>
            </div>
    </body>
    
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="Exhaust.js"></script>
</html>