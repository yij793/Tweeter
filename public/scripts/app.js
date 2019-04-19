
//// time function
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds + 1) + " seconds ago";
}


function createTweetElement(tweetDATA) {
    // get all infor from data
    let { user, content, created_at } = tweetDATA;
    let { name, avatars, handle } = user;
    let { text } = content;
    let src = avatars.regular;

    ///start creat all element
    let $tweet = $('<article>').addClass("tweet");
    let $header = $('<header>');
    let $img = $('<img>').attr('src', src);///<img src='src'>
    let $p = $('<p>').text(text);           ///<p> text </p>
    let $timeOfpost = $('<span>').addClass('timeOfpost').text(timeSince(created_at))///<span> timefunction(date code) <span>
    let $footer = $('<footer>');
    let $userID = $('<span>').addClass('userID').text(name); ///<span> userName </span>
    let $mrField = $('<span>').addClass('mrField').text(handle); //<span> userFIELD </span>
    let $icon = $('<span>').addClass('icon').text('will add icon later'); /// <span> ICONs </span> 
    /// creat DOM
    $($header).append($img)
    $($header).append($userID)
    $($header).append($mrField)
    $($footer).append($timeOfpost)
    $($footer).append($icon)
    $($tweet).append($header)
    $($tweet).append($p)
    $($tweet).append($footer)
    return $tweet
}
// function renderTweets(data) {
//     let element = createTweetElement(data[data.length - 1]);
//     $('#tweets-container').prepend(element);
// }
function renderTweets(data) {
    console.log(data)
    $('#tweets-container').empty()
    data.forEach(element => {
        let data = createTweetElement(element)
        $('#tweets-container').prepend(data)
    });
}

function loadTweets() {
    $.get('/tweets', (data, status) => {
        renderTweets(data)
    })
}
function show_hideCompose() {
    $('#nav-bar button').on('click', (e) => {
        $('.chatWindow').slideToggle("fast", function () {
            $('.tweetForm textarea').focus();
        })
    })

}




function ajaxPost() {
    $('.tweetForm').submit(function (e) {
        if ($('textarea').val().length > 140 || $('textarea').val().length === 0) {
            $('#errorMessage').show()
            e.preventDefault();
        } else {
            $('#errorMessage').hide()
            e.preventDefault(); // avoid to execute the actual submit of the form.
            const form = $(this);
            const url = form.attr('action');
            const text = $('textarea').val();

            $.ajax({
                type: "POST",
                url: url,
                data: { text },
            }).then(loadTweets())
        }

    });

}
function resetText() {
    $('.tweetForm').on('submit', () => {
        $('textarea').val('')
    })
}

// $(document).ready(function () {
//     $('form').on('submit', function (e) {
//         let value = $('textarea').val()
//         console.log(value)
//         $.post('index.js', { content: value })
//     })
// })

$(document).ready(function () {
    loadTweets()
    ajaxPost();
    show_hideCompose();
    resetText();

    // 
})
