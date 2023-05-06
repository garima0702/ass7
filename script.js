var index = 0;

function changecolours(){
    var colours = ["url(d7.avif)","url(d8.avif)","url(d3.avif)","url(d4.avif)","url(d5.avif)","url(d6.jpg)"] ;

    document.getElementsByTagName("body")[0].
    style.backgroundImage  = colours[index++];


    if(index > colours.length - 1)
    index = 0;
}

