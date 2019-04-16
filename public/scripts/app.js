const tweetData = {
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
    let $p = $('p').text(text);           ///<p>If I have seen further it is by standing on the shoulders of giants</p>
    let $span = $('<span>').text('10 days ago')///<span>10 days ago<span>
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

$(document).ready(function () {

    let element = createTweetElement(tweetData)
    $('#tweets-container').append(element);


})






// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet);
// var $tweet = $("<article>").addClass("tweet")
// var $tweet = createTweetElement(tweetData)