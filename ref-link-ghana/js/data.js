function linkEncoder(s) {
    var str = "";
    for (let i = 0; i < s.split(' ').length; i++) {
        if (s.split(' ')[i] != undefined) {
            str = s.split(' ')[i] + '-' + str;
        } else {
            str = s;
        }
    }
    if (str.substr(str.length - 1) == "-") {
        str = str.slice(0, -1);
    }
    return str.toLowerCase();
}

var url = "https://raw.githubusercontent.com/semzone/willlabs-shop/master/data.json?token=GHSAT0AAAAAAB7ROEANPTZDIO3SIUS7EWJOZAJHLYA";
$.getJSON( url, {
    format: "json"
}).done(function(data) {
    
    for (let i = 0; i < data.length; i++) {

        if (i == 0) {
            $("div#data").html("<div "+"id=categ-"+i+">"+data[i].name+"</div>");
        } else {
            $("<div "+"id=categ-"+i+"></div>").insertAfter("div#data div#categ-"+(i-1));
        }

        if (data[i].type != null) {
            $("div#data div#categ-"+i).html("<button type=\"button\" class=\"accordion\">"+data[i].name+"</button>");
            $("<div class=\"panel\"><ul></ul></div>").insertAfter("div#data div#categ-"+i+" button.accordion");
            for (let j = 0; j < data[i].type.length; j++) {
                if (j == 0) {
                    $("div#data div#categ-"+i+" div.panel ul").html("<li><a href=\"../products/index.html?p_type="+linkEncoder(data[i].type[j].name)+"&p_model="+linkEncoder(data[i].name)+"\">"+data[i].type[j].name+"</a></li>");
                } else {
                    $("<li><a href=\"../products/index.html?p_type="+linkEncoder(data[i].type[j].name)+"&p_model="+linkEncoder(data[i].name)+"\">"+data[i].type[j].name+"</a></li>").insertAfter($("div#data div#categ-"+i+" div.panel ul li").last());
                }
                
            }
        } else {
            $("div#data div#categ-"+i).addClass('left-link');
            $("div#data div#categ-"+i).html("<ul></ul>");
            $("div#data div#categ-"+i+" ul").html("<li><a href=\""+"../products/index.html?p_model="+linkEncoder(data[i].name)+"\"><span>"+data[i].name+"</span></a></li>");
        }

    }
    var acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    }
});