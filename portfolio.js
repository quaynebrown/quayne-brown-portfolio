const app = {
    menuBtn: '',
    menuOpen: false
};


app.handleHoverIn =  function() {
    $(this).find('div').addClass('toggle-btn');
}

app.handleHoverOut = function(){
    $(this).find('div').removeClass('toggle-btn');
}

app.eventHandlers = () => {
    // cache projects selectors
    const $project = $('.portfolio-container article'); 

    $project.hover(app.handleHoverIn, app.handleHoverOut);

    // menu button
    app.menuBtn.on('click', () => {
        if(!app.menuOpen){
            app.menuBtn.addClass('open');
            app.nav.addClass('show-dropdown');
            app.listItems.addClass('show-list-items');
            app.menuOpen = true
        }else{
            app.menuBtn.removeClass('open');
            app.nav.removeClass('show-dropdown');
            app.listItems.removeClass('show-list-items');
            app.menuOpen = false
        }
    })
}

app.init = () => {
    app.menuBtn = $('.menu-btn');
    app.nav = $('header ul');
    app.listItems = $('header li');
    app.eventHandlers();
} 

$(() => {
    app.init();
    AOS.init({
        duration: 500,
        delay: 200
    });
})