// Utilities function
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

// Script code
var plus_1_extension_github_url = "https://github.com/gabceb/github-minus-1-extension";
var plus_1_text_array = [":+1:", "+1"];

var hidden_plus_1_comments = true;
var $plus_1_comments = null;

$(document).ready(initialize);

function initialize()
{
	$plus_1_comments = $(".comment-content:contains('+1')").filter(function() {
	    var comment_content = $(this).text();

	    return plus_1_text_array.indexOf(comment_content.trim());
	}).parents(".js-comment-container");

	// Bye bye comments!
	$plus_1_comments.hide();

	plus_1_comments_count = $plus_1_comments.length;

	$plus_1_tab = $('<li><a class="tabnav-tab" href="#"><span><span class="comments-plus-1-status">Hidden</span> +1(s)</span><span class="counter">' + plus_1_comments_count + '</span></a></li>');
	$plus_1_tab.click(toggleCommentsStatus)

	$(".js-hard-tabs").append($plus_1_tab);

	if(plus_1_comments_count > 0)
	{
		console.log("Hey! " + plus_1_comments_count + " +1 comments were hidden from this issue. Fork and contribute to this extension at " + plus_1_extension_github_url + ". Enjoy!");
	}
}

function toggleCommentsStatus()
{
	hidden_plus_1_comments = !hidden_plus_1_comments;

	hidden_plus_1_comments ? $plus_1_comments.hide() : $plus_1_comments.show();

	$(".comments-plus-1-status", this).text(statusString())
}

function statusString()
{
	return hidden_plus_1_comments ? "Hidden" : "Shown";
}