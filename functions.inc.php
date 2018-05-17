<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    echo "<div class = 'row'><div class='col-md-4'>";
    $src = './images/';
    $thumb = "thumb".$number;
    $src .= $$thumb;
    $title = "title".$number;
    $alt = $$title;
    $label = "<img src = '".$src."' alt = '".$alt."' class='img-responsive'/>";
    $postId = "postId".$number;
    $post = $$postId;
    echo generateLink('post.php?id='.$post,$label,'');
    echo "</div><div class = 'col-md-8'>";
        echo "<h2>";
        echo $alt;
        echo "</h2>";
        echo "<div class = 'details'>POSTED BY ";
	$userId = "userId".$number;
    	$user = $$userId;
	$userNameString = "userName".$number;
	$userName = $$userNameString;
        echo generateLink('user.php?id='.$user,$userName,'');
	echo "<span class = 'pull-right'>";
	$dateString = "date".$number;
	$date = $$dateString;
	echo $date;
	echo "</span>";
	echo "<p class='ratings'>";
	$reviewsRatingString = "reviewsRating".$number;
	$reviewsRating = $$reviewsRatingString;
	echo constructRating($reviewsRating);
	$reviewsNumString = "reviewsNum".$number;
	$reviewsNum = $$reviewsNumString;
	echo $reviewsNum;
	echo " REVIEWS</p></div>";
	echo "<p class='excerpt'>";
	$excerptString = "excerpt".$number;
	$excerpt = $$excerptString;
	echo $excerpt;
	echo "</p><p>";
	echo generateLink('post.php?id='.$post,'Read more','btn btn-primary btn-sm');
	echo "</p></div></div><hr/>";
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>