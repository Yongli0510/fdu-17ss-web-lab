
for(var i = 0;i < 4;i++){
    document.write("<div class = 'item'>");
    document.write("<h2>");
    document.write(countries[i].name);
    document.write("</h2>");
    document.write("<p>");
    document.write(countries[i].continent);
    document.write("</p>");
    document.write("<div class = 'inner-box'>");
    document.write("<h3>Cities</h3>");
    document.write("<ul>");
    for(var j = 0;j < countries[i].cities.length;j++){
        document.write("<li>");
        document.write(countries[i].cities[j]);
        document.write("</li>");
    }
    document.write("</ul>");
    document.write("</div>");
    document.write("<div class='inner-box'>");
    document.write("<h3>Popular Photos</h3>");
    document.write("<ul>");
    for(var k = 0;k < countries[i].photos.length;k++){
        var  url = "./images/"+countries[i].photos[k];
        document.write('<img src="'+url+'" class="photo"/>');
    }
    document.write("</ul>");
    document.write("</div>");
    document.write("<button type='button'>Visit</button>");
    document.write("</div>");
}