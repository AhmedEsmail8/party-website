function slide(flag) {
    // flag = 0 if right (open)
    // flag = 1 if left (close)

    let aside = $('aside');
    if (flag == 1) {
        aside.animate({ left: `-${aside.outerWidth()}px` })
    }
    else {
        aside.animate({ left: `0px` })
    }
}

$('#closeBtn').click(function () {
    slide(1)
})

$('#sideButton').click(function () {
    slide(0);
})

$('.singer').click(function () {
    $('.singer-caption').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})

function countDownTO(targetDate) {
    let currDate = new Date();
    let diff = targetDate - currDate;
    let remaining = diff;

    let days = Math.floor(diff / (24 * 60 * 60 * 1000));
    remaining -= days * (24 * 60 * 60 * 1000);

    let hours = Math.floor(remaining / 3600000);
    remaining -= hours * 3600000;

    let mins = Math.floor(remaining / 60000);
    remaining -= mins*60000;
    
    let sec = Math.floor(remaining / 1000);

    if (targetDate < currDate){
        days = 0;
        hours = 0;
        mins = 0;
        sec = 0;
    }

    $('#days').html(`${days} D`)
    $('#hours').html(`${hours} H`)
    $('#mins').html(`${mins} M`)
    $('#sec').html(`${sec} S`)
    
    setTimeout(function(){
        countDownTO(targetDate)
    }, 1000);
}

$(window).on('load', function(){
    const partyDate = new Date("2025-03-25");
    countDownTO(partyDate);
})

$('#message').on('input', function(e){
    let remaining = 100 - $('#message').val().length;
    if (remaining <= 0){
        $(this).val($(this).val().substring(0, 100));
        remaining = 0;
    }
        
    $('#remainingChars').html(remaining)
})


$('.link').on('click', function(){
    slide(1);
    let secTop = $(this.Attr('href').offsetTop())
    $('html, body').animate({scrollTop: secTop}, 500)
})