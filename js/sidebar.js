/**
 * Sidebar
 * @type {*|Window.jQuery}
 */
$("#sidebar").mCustomScrollbar({
    theme: "minimal"
});

$('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
});

$('#drawer').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});


var $ul   =   $('.sidebar-navigation > ul');
$ul.find('li a').click(function(e){
    var $li = $(this).parent();

    if($li.find('ul').length > 0){
        e.preventDefault();

        if($li.hasClass('selected')){
            $li.removeClass('selected').find('li').removeClass('selected');
            $li.find('ul').slideUp(400);
            $li.find('a em').addClass('fa-chevron-down');
            $li.find('a em').removeClass('fa-chevron-up');
        }else{

            if($li.parents('li.selected').length == 0){
                $ul.find('li').removeClass('selected');
                $ul.find('ul').slideUp(400);
                $ul.find('li a em').addClass('fa-chevron-down');
                $ul.find('li a em').removeClass('fa-chevron-up');
            }else{
                $li.parent().find('li').removeClass('selected');
                $li.parent().find('> li ul').slideUp(400);
                $li.parent().find('> li a em').addClass('fa-chevron-down');
                $li.parent().find('> li a em').removeClass('fa-chevron-up');
            }

            $li.addClass('selected');
            $li.find('>ul').slideDown(400);
            $li.find('>a>em').addClass('fa-chevron-up');
            $li.find('>a>em').removeClass('fa-chevron-down');
        }
    }
});
$('.sidebar-navigation > ul ul').each(function(i){
    if($(this).find('>li>ul').length > 0){
        var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
        var pIntPLeft   = parseInt(paddingLeft);
        var result      = pIntPLeft + 20;

        $(this).find('>li>a').css('padding-left',result);
    }else{
        var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
        var pIntPLeft   = parseInt(paddingLeft);
        var result      = pIntPLeft + 20;

        $(this).find('>li>a').css('padding-left',result).parent().addClass('selected--last');
    }
});
