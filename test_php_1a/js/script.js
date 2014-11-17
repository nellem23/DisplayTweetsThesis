 $(document).ready(function() {
  $(document).on("pageshow", "[data-role='page']", function() {
    if ($($(this)).hasClass("header_default")) {
      $('<header data-theme="b" data-role="header"><h1></h1><a href="#" class="ui-btn-left ui-btn ui-btn-inline ui-btn-icon-notext ui-mini ui-corner-all ui-icon-back" data-rel="back">Back</a><a href="#" class="ui-btn-right ui-btn ui-btn-inline ui-btn-icon-notext ui-mini ui-corner-all ui-icon-info">Info</a></header>')
        .prependTo( $(this) )
        .toolbar({ position: "fixed" });
        $("[data-role='header'] h1").text($(this).jqmData("title"));
    } //if header_default
    $.mobile.resetActivePageHeight();

    if ($($(this)).hasClass("footer_default")) {
      $('<footer data-theme="b" data-role="footer" data-position="fixed"><nav data-role="navbar"><ul><li><a href="#home" class="ui-btn ui-icon-home ui-btn-icon-top">Home</a></li><li><a href="#blog" class="ui-btn ui-icon-edit ui-btn-icon-top">Blog</a></li><li><a href="#videos" class="ui-btn ui-icon-video ui-btn-icon-top">Videos</a></li><li><a href="#photos" class="ui-btn ui-icon-camera ui-btn-icon-top">Photos</a></li><li><a href="#tweets" class="ui-btn ui-icon-comment ui-btn-icon-top">Tweets</a></li></ul></nav></footer>')
        .appendTo($(this))
        .toolbar({position: "fixed"});
    }

    var current = $(".ui-page-active").attr('id');

    $("[data-role='footer'] a.ui-btn-active").removeClass("ui-btn-active");
    $("[data-role='footer'] a").each(function() {
      if ($(this).attr('href') === '#' + current) {
        $(this).addClass("ui-btn-active");
      }
    }); //each link in navbar

  }); //show_page
}); //document.ready

function listTweets (data) {
  var output = '<ul data-role="listview">';
  $.each(data, function(key,val) {
      var text = data[key].text;
      var thumbnail = data[key].user.profile_image_url;
      var name = data[key].user.name;

      output += '<li>';
      output += '<img src="' + thumbnail + '" alt="Photo of' + name + ' ">' ;
      output += '<div>' + text + '</div>';
      output += '</li>';

  }); //Go through each data
  output +='</ul>';
  console.log(done);
  console.log(data);
  $('#tweetlist').html(output);
}// listTweets 