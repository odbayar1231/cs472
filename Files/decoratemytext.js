
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
            document.getElementById('body').style.backgroundImage = "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_face:auto,h_494,q_60,w_1700/v1/clients/saltlake/SkiCity_ResortsMarch2017_HiRez_AustenDiamondPhotography_69_f2359e3f-0f6c-430d-8392-7146a18714b6.jpg')";
        }
        else {
            textArea.style.fontWeight = 'normal';
            textArea.style.color = 'black';
            textArea.style.textDecoration = 'none';
            document.getElementById('body').style.backgroundImage = 'none';
        }
    }

}

