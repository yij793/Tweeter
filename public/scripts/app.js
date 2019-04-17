const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": {
                "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": {
                "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    },
    {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
                "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
    }
];
//// time function
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
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
    let $span = $('<span>').text(timeSince(created_at))///<span> timefunction(date code) <span>
    let $footer = $('<footer>');
    let $userID = $('<span>').addClass('userID').text(name); ///<span> userName </span>
    let $mrField = $('<span>').addClass('mrField').text(handle); //<span> userFIELD </span>
    let $icon = $('<span>').addClass('icon').text('will add icon later'); /// <span> ICONs </span> 
    /// creat DOM
    $($header).append($img)
    $($header).append($userID)
    $($header).append($mrField)
    $($footer).append($span)
    $($footer).append($icon)
    $($tweet).append($header)
    $($tweet).append($p)
    $($tweet).append($footer)
    return $tweet
}
function renderTweets(data) {
    data.forEach(element => {
        let data = createTweetElement(element)
        $('#tweets-container').prepend(data)
    });
}





function loadTweets() {
    $.ajax('/tweets', { method: 'GET' }).then(renderTweets(data))
}

// $(document).ready(function () {
//     $('form').on('submit', function (e) {
//         let value = $('textarea').val()
//         console.log(value)
//         $.post('index.js', { content: value })
//     })
// })
$(document).ready(function () {

    $(".tweetForm").submit(function (e) {
        if ($('textarea').val().length > 140 || $('textarea').val().length === 0) {
            e.preventDefault()
        } else {
            e.preventDefault(); // avoid to execute the actual submit of the form.
            var form = $(this);
            var url = form.attr('action');
            var text = $('textarea').val();

            $.ajax({
                type: "POST",
                url: url,
                data: { text },
            }).then(
                data.push(
                    {
                        "user": {
                            "name": "ME ",
                            "avatars": {
                                "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                                "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                            },
                            "handle": "@ME"
                        },
                        "content": {
                            "text": text
                        },
                        "created_at": new Date()
                    }


                )


            ).then(loadTweets())
        }

    });

    // 
})