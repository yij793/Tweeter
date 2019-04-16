$(document).ready(function () {
    $('textarea').on('input', function (e) {
        const maxValue = 140
        const currentValue = maxValue - this.value.length;
        $(this).siblings('.counter').text(currentValue)
        if (currentValue < 0) {
            $(this).siblings('.counter').css('color', 'red')
        } else { $(this).siblings('.counter').css('color', 'blue') }
    })
});

