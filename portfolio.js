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
            app.menuOpen = true
        }else{
            app.menuBtn.removeClass('open');
            app.nav.removeClass('show-dropdown');
            app.menuOpen = false
        }
    })
}

app.init = () => {
    app.menuBtn = $('.menu-btn');
    app.nav = $('header ul');
    app.eventHandlers();
} 

$(() => {
    app.init();
})