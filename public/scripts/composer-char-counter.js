$(document).ready(function () {
    // $('textarea').click(function () {
    //     console.log(this)
    // })
    // $('textarea').keydown(function (event) {
    //     console.log(event)
    // })
    // $('textarea').change(function () {
    //     console.log(this)
    // })
    $('textarea').on('input', function (e) {
        console.log('e', e.target.value, e.target.value.length)
        const maxValue = 140
        const currentValue = maxValue - this.value.length;
        console.log(currentValue);
        $(this).siblings('.counter').text(currentValue)

        // $('.counter').html()
        // $('.counter').html(Number($('.counter').html()) - this.value.length)
        if (currentValue < 0) {
            $(this).siblings('.counter').css('color', 'red')
        }
    })

    // $('textarea').keypress(function (event) {
    //     console.log(event)
    // })

});

