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

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

// Test / driver code (temporary)
function createTweetElement(tweetDATA) {
    let { user, content, created_at } = tweetDATA;
    let { name, avatars, handle } = user;
    let { text } = content;
    let src = avatars.regular;

    ///start creat all element
    let $tweet = $('<article>').addClass("tweet");
    let $header = $('<header>');
    let $img = $('<img>').attr('src', src);///<img src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png">
    let $p = $('<p>').text(text);           ///<p>If I have seen further it is by standing on the shoulders of giants</p>
    console.log($p)
    let $span = $('<span>').text(timeSince(created_at))///<span>10 days ago<span>
    let $footer = $('<footer>');
    let $userID = $('<span>').addClass('userID').text(name); ///<span> Newton </span>
    let $mrField = $('<span>').addClass('mrField').text(handle); //<span> @SirIsaac </span>
    let $icon = $('<span>').addClass('icon').text('will add icon later'); /// <span>will add icon later</span> 
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

$(document).ready(function () {
    renderTweets(data)
})






// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet);
// var $tweet = $("<article>").addClass("tweet")
// var $tweet = createTweetElement(tweetData)