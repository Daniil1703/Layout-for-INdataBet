$ShowHideMore = $('.container-bet');
$ShowHideMore.each(function() {
    var $times = $(this).children('.bet__item');
    if ($times.length > 5 && window.innerWidth <=600){
        $ShowHideMore.children(':nth-of-type(n+6)').addClass('moreShow').hide();
        $(this).find('span.message').addClass('more-times').html('Show more');
    }
});

$(document).on('click', '.container-bet > span', function() {
    var that = $(this);
    var thisParent = that.closest('.container-bet');
    if (that.hasClass('more-times')) {
        thisParent.find('.moreShow').show();
        that.toggleClass('more-times', 'less-times').html('Show less');
    } else {
        thisParent.find('.moreShow').hide();
        that.toggleClass('more-times', 'less-times').html('Show more');
    }
})

$ShowHideMore2 = $('.container-bet2');
$ShowHideMore2.each(function() {
    var $times = $(this).children('.bet__item2');
    if ($times.length > 5 && window.innerWidth <=600){
        $ShowHideMore2.children(':nth-of-type(n+6)').addClass('moreShow2').hide();
        $(this).find('span.message2').addClass('more-times2').html('Show more');
    }
});

$(document).on('click', '.container-bet2 > span', function() {
    var that = $(this);
    var thisParent = that.closest('.container-bet2');
    if (that.hasClass('more-times2')) {
        thisParent.find('.moreShow2').show();
        that.toggleClass('more-times2', 'less-times2').html('Show less');
    } else {
        thisParent.find('.moreShow2').hide();
        that.toggleClass('more-times2', 'less-times2').html('Show more');
    }
})

$ShowHideMore3 = $('.container-bet3');
$ShowHideMore3.each(function() {
    var $times = $(this).children('.bet__item3');
    if ($times.length > 9 && window.innerWidth <=600){
        $ShowHideMore3.children(':nth-of-type(n+9)').addClass('moreShow3').hide();
        $(this).find('span.message3').addClass('more-times3').html('Show more');
    }
});

$(document).on('click', '.container-bet3 > span', function() {
    var that = $(this);
    var thisParent = that.closest('.container-bet3');
    if (that.hasClass('more-times3')) {
        thisParent.find('.moreShow3').show();
        that.toggleClass('more-times3', 'less-times3').html('Show less');
    } else {
        thisParent.find('.moreShow3').hide();
        that.toggleClass('more-times3', 'less-times3').html('Show more');
    }
})