
function createPanel(desktop) {
    desktop.panel = $('<div class="plasma-panel plasma-widget"></div>');
    desktop.body.append(desktop.panel);
}

function createKaramba(desktop) {
    desktop.karamba = $('<div class="plasma-karamba plasma-widget invisible"></div>');
    desktop.karambaButton = $('<div class="karamba-button"></div>');

    desktop.karambaButton.click(function() {
        desktop.karamba.toggleClass('invisible');
        desktop.karamba.toggleClass('visible-block');
    });

    desktop.panel.append(desktop.karambaButton);
    desktop.body.append(desktop.karamba);
}

function createUserWidgets(desktop) {
    $('.plasma-window').each(function() {
        console.log('found a user widget');
        let container = $('<div class="plasma-wcontainer"></div>'),
            titleBar = $('<div class="plasma-titbar"></div>'),
            closeBtn = $('<div class="wclose-icon"></div>'),
            content = $(this);

        closeBtn.click(function() {
            container.toggleClass('invisible');
            container.toggleClass('visible-block');
        });

        content.detach();
        desktop.body.append(container);
        container.append(titleBar);
        titleBar.append(closeBtn);
        container.append(content);
    });
}

$(document).ready(function() {
    var desktop = {
        body: $('body')
    };

    createPanel(desktop);
    createKaramba(desktop);
    createUserWidgets(desktop);
});
