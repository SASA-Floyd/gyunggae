function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var horizontalScrollAction = function () {

    var container, scroll, pages, buttons;
    var netWidth = window.innerWidth;
    var netHeight = window.innerHeight;

    var init = function () {
        scroll = document.getElementsByClassName('horizontal-scroll-wrapper');
        container = document.getElementsByClassName('container')
        pages = document.getElementsByClassName('horizontal-page');
        buttons = document.getElementsByClassName('next');

        container[0].style.width = netWidth + 'px';
        container[0].style.height = netHeight + 'px';
        container[1].style.width = netWidth + 'px';
        container[1].style.height = netHeight + 'px';

        scroll[0].style.height = netHeight + 'px';
        scroll[0].style.width = netWidth * 22 / 6 + 'px';
        scroll[1].style.height = netHeight + 'px';
        scroll[1].style.width = netWidth * 22 / 6 + 'px';

        for (var i = 0; i < 10; i++) {
            pages[i].style.width = netWidth * 2 / 3 + 'px';
            pages[i].style.height = netHeight * 2 / 3 + 'px';
            pages[i].getElementsByTagName('img')[0].style.height = netHeight * 2 / 3 + 'px';
        }
        _addEventHandlers();
    }

    var _addEventHandlers = function () {
        // for (var i = 0; i < 2; i++) {
        //     buttons[i].addEventListener('click', () => { _scrollPage(i) });
        // }
        buttons[0].addEventListener('click', () => { _scrollPage(0) });
        buttons[1].addEventListener('click', () => { _scrollPage(1) });
        buttons[2].addEventListener('click', () => { _scrollPage(2) });
        buttons[3].addEventListener('click', () => { _scrollPage(3) });
        buttons[4].addEventListener('click', () => { _scrollPage(4) });
        buttons[5].addEventListener('click', () => { _scrollPage(5) });
        buttons[6].addEventListener('click', () => { _scrollPage(6) });
        buttons[7].addEventListener('click', () => { _scrollPage(7) });
        // buttons[4].addEventListener('click', () => { _scrollPage(4) });
    }

    var _scrollPage = async function (i) {
        console.log(netWidth);
        console.log(pages[i + 1].getBoundingClientRect().left);


        // while (pages[i + 1].getBoundingClientRect().left >= 0) {
        // // for (var i = 0; i < 50; i++) {
        //     await sleep(4).then(() => { scroll.scrollLeft += netWidth / 50; });
        // }
        _triggerFadeIn(i);
        var x = i < 4 ? 0 : 1;
        container[x].scrollLeft += netWidth * 2 / 3;


    }

    var _triggerFadeIn = function (i) {
        console.log(i);
        var x = i < 4 ? 1 : 2;
        var nextPage = pages[i + x];
        // var contents = nextPage.getElementsByClassName('hidden');
        var img = nextPage.getElementsByTagName('img')[0];
        var contents = nextPage.getElementsByClassName('article')[0];
        // img.className = img.className.replace("hidden", "fade-in");
        contents.className = contents.className.replace("hidden", "fade-in");
    }

    return {
        init: init
    };
}


function downButtonAction() {

    var pages, buttons;
    var netHeight = window.innerHeight;
    var netWidth = window.innerWidth;

    function init() {
        pages = document.getElementsByClassName("vertical-page");
        buttons = document.getElementsByClassName("down-button");

        for (var i = 0; i < 2; i++) {
            pages[i].style.width = netWidth + 'px';
            pages[i].style.height = netHeight + 'px';
            pages[i].getElementsByTagName('img')[0].style.width = netWidth / 2 + 'px';
        }
        _addEventHandlers();
    }

    function _addEventHandlers() {
        for (var i = 0; i < 3; i++) {
            buttons[i].addEventListener('click', _triggerScrollDown);
        }
    }

    function _triggerScrollDown() {
        console.log('sdf');
        window.scrollBy(0, netHeight);
    }

    return {
        init: init
    };
}

horizontalScrollAction().init();
downButtonAction().init();

