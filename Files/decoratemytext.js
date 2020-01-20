
(function(){

    
    
}) ();

window.onload = function () {

    var decorateButton = document.getElementById('decButton');
    var textArea = document.getElementById('decTextArea');
    var chBox = document.getElementById('chBox');

    textArea.style.fontSize = '12pt';

    var increaseFontSize = function () {
        let cSize = parseInt(textArea.style.fontSize);
        cSize += 2;
        textArea.style.fontSize = cSize + 'pt';
    }

    decorateButton.onclick = function () {
        setInterval(increaseFontSize, 2000);
    }

    chBox.onchange = function () {
        if (chBox.checked == true) {
            textArea.style.fontWeight = 'bold';
            textArea.style.color = 'green';
            textArea.style.textDecoration = 'underline';
            document.getElementById('body').style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        else {
            textArea.style.fontWeight = 'normal';
            textArea.style.color = 'black';
            textArea.style.textDecoration = 'none';
            document.getElementById('body').style.backgroundImage = 'none';
        }
    }

}

