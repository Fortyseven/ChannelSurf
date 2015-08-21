var tv = null;

var clip_list = [
    "content/video/weird_dog.mp4",
    "http://r7---sn-p5qlsnlk.googlevideo.com/videoplayback?ratebypass=yes&ip=2a03:8180:1001:16a::8ee1&mm=31&source=youtube&mn=sn-p5qlsnlk&id=o-ABG1CqwxnB0wPLDvZivnseRZQ9P3ylJj_hcrT9W5ZQ_F&ms=au&mt=1440096890&pl=40&mv=m&mime=video/webm&dur=0.000&upn=Rc0dPdOmQC8&itag=43&ipbits=0&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&fexp=9405265,9407016,9408509,9408710,9409069,9412774,9415365,9415485,9416023,9416126,9416687,9416838,9417117,9417280,9417707,9417712,9418153,9418199,9418223,9418393,9418449&sver=3&signature=23ED2F7F7F45BF1B26D4F7D4A8E2B4D239DFC63F.6A95D914028EC9518F64BDF4321248D83F1F21EB&key=yt5&initcwndbps=1870000&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&expire=1440118631&lmt=1297937138435273",
    "http://r1---sn-p5qlsnly.googlevideo.com/videoplayback?mime=video/webm&key=yt5&expire=1440118539&lmt=1298115949986690&sver=3&ipbits=0&itag=43&initcwndbps=1870000&pl=40&dur=0.000&ratebypass=yes&source=youtube&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&id=o-AF_RY9-mGzB_aLp25QH6FMBvaMxfGH9bQog98J40W_qP&ip=2a03:8180:1001:16a::8ee1&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&fexp=9406511,9407178,9407991,9408503,9408710,9409069,9412774,9412839,9415365,9415417,9415485,9416023,9416126,9416231,9416324,9417707,9418153,9418449,9418465,9418901,9419341,9419444,9419675,9419831&ms=au&signature=B8DD6CF04CC50A7C9885AA74FBBE31FAD46491.7B6D29BFC73A89A260ABA28A47DBD78E8DADDCD7&mt=1440096890&mv=m&mm=31&mn=sn-p5qlsnly&upn=FPPJuavZgcI",
    "http://r4---sn-p5qlsnll.googlevideo.com/videoplayback?mime=video/webm&id=o-AJT1kvuyHzTWnxDgja5-_fWcMlrX3-8ha0mRi5J8dc1P&pl=40&mm=31&mn=sn-p5qlsnll&ipbits=0&ip=2a03:8180:1001:16a::8ee1&ms=au&mt=1440096003&mv=m&dur=0.000&initcwndbps=2067500&expire=1440117735&sver=3&fexp=9407700,9407991,9408710,9409069,9409207,9415365,9415485,9415555,9415822,9416023,9416126,9416729,9416838,9417203,9417223,9417448,9417689,9417707,9418153,9418200,9418449,9418901,9419299,9419767&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&source=youtube&ratebypass=yes&signature=64BA13C2FD337A29844255B35EE5A4A1C47FF47C.3E08B48D15A71B4A184E862E7988192CED663B01&upn=eCqZaboQkzY&itag=43&key=yt5&lmt=1297056240067091"
];

var TV = function ( video_selector ) {

    var _screen = $( video_selector );
    var _self = this;

    /**
     *
     * HTML5 video stretching - http://coding.vdhdesign.co.nz/?p=29
     * The video tag usually enforces the aspect ratio, but...
     * ...CSS transforms to the rescue!
     *
     * @constructor
     */
    this.resizeVideo = function () {

        var iOriginalVideoHeight = _screen[0].videoHeight;
        var iCurrentVideoHeight = _screen.height();
        var iVideoContainerHeight = _screen.parent().height();
        var iCurrentScale = iOriginalVideoHeight / iCurrentVideoHeight;
        var iScaleY = (iVideoContainerHeight / iOriginalVideoHeight) * iCurrentScale;

        //Important to note: Set the origin to the top left corner (0% 0%), or else the position of the video goes astray
        _screen.css( {
                         "transform-origin":         "0% 0%",
                         "transform": "scaleY(" + iScaleY + ")",
                         "-ms-transform-origin":     "0% 0% ", /* IE 9 */
                         "-ms-transform": "scaleY(" + iScaleY + ")", /* IE 9 */
                         "-moz-transform-origin":    "0% 0%", /* Firefox */
                         "-moz-transform": "scaleY(" + iScaleY + ")", /* Firefox */
                         "-webkit-transform-origin": "0% 0%", /* Safari and Chrome */
                         "-webkit-transform": "scaleY(" + iScaleY + ")", /* Safari and Chrome */
                         "-o-transform-origin":      "0% 0%", /* Opera */
                         "-o-transform": "scaleY(" + iScaleY + ")" /* Opera */
                     } );
    }

    function playVideo( video_src ) {
        _screen[0].src = video_src;
        _self.resizeVideo();
    }

    function loadNewVideo() {
        var clip_num = Math.round( Math.random() * (clip_list.length - 1) );

        playVideo( clip_list[ clip_num ] );
    }

    this.onClipFinished = function () {
        loadNewVideo();
    };

    loadNewVideo();
}

/**
 *
 */
$( document ).ready( function () {
    tv = new TV( "video.tv-screen" );
} );