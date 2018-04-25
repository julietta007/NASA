var apod = {

    randomDate: function(start, end){
        var date = new Date(
            start.getTime() + Math.random() *
            (end.getTime() - start.getTime())
        );

        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();

        if(m < 10){
            m = '0'+m;
        }

        if(d < 10){
            d = '0'+d;
        }
        
        return y + '-' + m + '-' + d;
        },

    buildDOM: function(result){
            $('#apodTitle').text(result.title);
            if(result.media_type ==='video'){
                $('#apodImg').hide();
                $('#apodVideo > iframe').attr('src', result.url).show();
            }else{
                $('#apodVideo').hide();
                $('#apodImg')
                    .attr('src', result.url)
                    .attr('alt', result.title)
                    .show();
            }
            $('#apodCopyright').text('Copyright: ' + result.copyright);
            $('#apodDate').text('Date: ' + result.date);
            $('#apodDesc').text(result.explanation);
    },

    getRrequest: function(){
        var date = this.randomDate(new Date(1995, 5, 16), new Date());
        var that = this;
        var nasaKey = 'maxqw9xwNbXzmjgybhKjwwxAU6mL1OyquhSSZF6q';
        var url = 'https://api.nasa.gov/planetary/apod?api_key=';

        $.ajax({
            url: url + nasaKey + '&date=' + date
        }).done(function(result){

            that.buildDOM(result);

        }).fail(function(result){
            console.log(result);
        });
    },

    init: function() {
        this.getRrequest();
    }
};

apod.init();

$('#randBtn').on('click', function(){
    apod.getRequest();
});
