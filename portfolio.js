const app = {};

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

}

app.init = () => {
    app.eventHandlers();
} 

$(() => {
    app.init();
})