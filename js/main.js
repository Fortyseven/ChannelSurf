var tv = null;

var clip_list = [
//    "content/video/weird_dog.mp4",
    "content/video/yt/liesontheinternet.webm"
    , "content/video/yt/noice.webm"
    , "content/video/yt/kebab.webm"
    , "content/video/yt/murder.webm"
    , "content/video/yt/technology.webm"
    , "content/video/yt/cry-autotune.webm"
    , "content/video/yt/dream.webm"
    , "content/video/yt/cubanspider.webm"
    , "content/video/yt/mybrand.webm"
    , "content/video/yt/smokeweedrobot.webm"
    , "content/video/yt/testchamber.webm"
    , "content/video/yt/retarded.webm"
    , "content/video/yt/horrible.webm"
    , "content/video/yt/cliff.webm"
    , "content/video/yt/snout.webm"
    , "content/video/yt/lunchables.webm"
    , "content/video/yt/shrivel.webm"
    , "content/video/yt/ramen.webm"
    , "content/video/yt/burrito.webm"
    , "content/video/yt/n64.webm"
    , "content/video/yt/nickelstats.webm"
    , "content/video/yt/wouldificould.webm"
    , "content/video/yt/sendhelp.webm"
    , "content/video/yt/wristcutter.webm"
    , "content/video/yt/dildocopter.webm"
    , "content/video/yt/deathmetalrooster.webm"
    , "content/video/yt/internet.mp4"
    , "content/video/yt/wildebeest.webm"
    , "content/video/yt/collective.webm"
    , "content/video/yt/slaves.webm"
    , "content/video/yt/ketchup.webm"
    , "content/video/yt/loaf.webm"
    , "content/video/yt/jp-melodica.webm"
    , "content/video/yt/sports-recovery_edit.mp4"
    , "content/video/yt/kampf.webm"
    , "content/video/yt/bear.webm"
    , "content/video/yt/correct.webm"
    , "content/video/yt/drdeuce.webm"
    , "content/video/yt/pumpkindance.webm"
    , "content/video/yt/dickback.webm"
    , "content/video/yt/dogtirebite.webm"
    , "content/video/yt/swang.webm"
    , "content/video/yt/armstrong.webm"
    , "content/video/yt/hulkvsbear.webm"
    , "content/video/yt/bless.webm"
    , "content/video/yt/zerog.webm"
    , "content/video/yt/seinfeld.webm"
    , "content/video/yt/cheese.webm"
    , "content/video/yt/aids.webm"
    , "content/video/yt/nixon.webm"
    , "content/video/yt/asdf.webm"
    , "content/video/yt/beenfar.webm"
    , "content/video/yt/grrr.webm"
    , "content/video/yt/darkness.webm"
    , "content/video/yt/boner.webm"
    , "content/video/yt/vader.webm"
    , "content/video/yt/porkins.webm"
    , "content/video/yt/ballsohard.webm"
    , "content/video/yt/eagleman.webm"
    , "content/video/yt/2spooky.webm"


    //"http://v14.lscache3.c.youtube.com/videoplayback?sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Cratebypass%2Coc%3AU0hQRVVRV19FSkNOMF9NS0FD&amp;itag=43&amp;ip=0.0.0.0&amp;signature=60D26B708E92E1636CA3B34A389B1A4406DF290F.BD57D8B601A61EFF68CEF6726754DAD6D9C7C2A9&amp;sver=3&amp;ratebypass=yes&amp;expire=1310569200&amp;key=yt1&amp;ipbits=0&amp;id=885f37c308a3f36f"
    //"http://r7---sn-p5qlsnlk.googlevideo.com/videoplayback?ratebypass=yes&ip=2a03:8180:1001:16a::8ee1&mm=31&source=youtube&mn=sn-p5qlsnlk&id=o-ABG1CqwxnB0wPLDvZivnseRZQ9P3ylJj_hcrT9W5ZQ_F&ms=au&mt=1440096890&pl=40&mv=m&mime=video/webm&dur=0.000&upn=Rc0dPdOmQC8&itag=43&ipbits=0&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&fexp=9405265,9407016,9408509,9408710,9409069,9412774,9415365,9415485,9416023,9416126,9416687,9416838,9417117,9417280,9417707,9417712,9418153,9418199,9418223,9418393,9418449&sver=3&signature=23ED2F7F7F45BF1B26D4F7D4A8E2B4D239DFC63F.6A95D914028EC9518F64BDF4321248D83F1F21EB&key=yt5&initcwndbps=1870000&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&expire=1440118631&lmt=1297937138435273",
    //"http://r1---sn-p5qlsnly.googlevideo.com/videoplayback?mime=video/webm&key=yt5&expire=1440118539&lmt=1298115949986690&sver=3&ipbits=0&itag=43&initcwndbps=1870000&pl=40&dur=0.000&ratebypass=yes&source=youtube&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&id=o-AF_RY9-mGzB_aLp25QH6FMBvaMxfGH9bQog98J40W_qP&ip=2a03:8180:1001:16a::8ee1&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&fexp=9406511,9407178,9407991,9408503,9408710,9409069,9412774,9412839,9415365,9415417,9415485,9416023,9416126,9416231,9416324,9417707,9418153,9418449,9418465,9418901,9419341,9419444,9419675,9419831&ms=au&signature=B8DD6CF04CC50A7C9885AA74FBBE31FAD46491.7B6D29BFC73A89A260ABA28A47DBD78E8DADDCD7&mt=1440096890&mv=m&mm=31&mn=sn-p5qlsnly&upn=FPPJuavZgcI",
    //"http://r4---sn-p5qlsnll.googlevideo.com/videoplayback?mime=video/webm&id=o-AJT1kvuyHzTWnxDgja5-_fWcMlrX3-8ha0mRi5J8dc1P&pl=40&mm=31&mn=sn-p5qlsnll&ipbits=0&ip=2a03:8180:1001:16a::8ee1&ms=au&mt=1440096003&mv=m&dur=0.000&initcwndbps=2067500&expire=1440117735&sver=3&fexp=9407700,9407991,9408710,9409069,9409207,9415365,9415485,9415555,9415822,9416023,9416126,9416729,9416838,9417203,9417223,9417448,9417689,9417707,9418153,9418200,9418449,9418901,9419299,9419767&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,source,upn,expire&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&source=youtube&ratebypass=yes&signature=64BA13C2FD337A29844255B35EE5A4A1C47FF47C.3E08B48D15A71B4A184E862E7988192CED663B01&upn=eCqZaboQkzY&itag=43&key=yt5&lmt=1297056240067091"
];

var TV = function ( video_selector, interstitial_selector ) {

    var _screen = $( video_selector );
    var _interstitial = $( interstitial_selector );
    var _self = this;
    var _next_interstitial = false;
    var _interstitial_start_time;
    var _clip_pos = 0;

    var _clips_shuffled = [];

    /**
     *
     * Based on:
     * HTML5 video stretch
     * http://coding.vdhdesign.co.nz/?p=29
     * The video tag usually enforces the aspect ratio, but... CSS transforms to the rescue!
     *
     * @constructor
     */
    this.resizeVideo = function ( element ) {
        //console.log( element );
        var iOriginalVideoHeight = element.videoHeight;
        var iCurrentVideoHeight = _screen.height();
        var iVideoContainerHeight = $( element ).parent().height();
        var iCurrentScale = iOriginalVideoHeight / iCurrentVideoHeight;
        var iScaleY = (iVideoContainerHeight / iOriginalVideoHeight) * iCurrentScale;

//        console.log( "iOriginalVideoHeight", iOriginalVideoHeight );
//        console.log( "iCurrentVideoHeight", iCurrentVideoHeight );
//        console.log( "iVideoContainerHeight", iVideoContainerHeight );
//        console.log( "iCurrentScale", iCurrentScale );
//
//        console.log( "iScaleY ", iScaleY );
//        console.log( _screen );

        //Important to note: Set the origin to the top left corner (0% 0%), or else the position of the video goes astray
        $( element ).css( {
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

    /**
     *
     * @param video_src
     */
    function playVideo( video_src ) {
        _screen[0].src = video_src;
    }

    /**
     *
     */
    function loadNextVideo() {

        if ( (new Date().getTime() - _interstitial_start_time) < 750 ) {
            setTimeout( loadNextVideo, 100 );
            return;
        }

        var clip_num = Math.round( Math.random() * (clip_list.length - 1) );

        _clip_pos++;

        playVideo( clip_list[ _clip_pos % clip_list.length ] );
        _next_interstitial = true;
        _self.resizeVideo( _interstitial[0] );
    }

    /**
     *
     */
    function playInterstitial() {
        _next_interstitial = false;
        _screen[0].pause();
        _interstitial[0].currentTime = 0;
        _interstitial[0].loop = true;
        _interstitial[0].play();
        _interstitial.show();
        _interstitial_start_time = new Date().getTime();
        loadNextVideo();
    }

    /**
     *
     */
    this.onClipLoaded = function () {
        _interstitial[0].pause();
        _interstitial.hide();
        this.resizeVideo( _screen[0] );
    }

    /**
     *
     */
    this.onClipFinished = function () {
        if ( _next_interstitial == true ) {
            playInterstitial();
        }
        else {
            loadNextVideo();
        }

    };

    /**
     * Shuffle an array
     * http://stackoverflow.com/a/6274381/14615
     * @param o
     * @returns {*}
     */
    function shuffle( o ) {
        for ( var j, x, i = o.length; i; j = Math.floor( Math.random() * i ), x = o[--i], o[i] = o[j], o[j] = x ) {
            ;
        }
        return o;
    }

    function buildPlaylist() {
        shuffle( clip_list );
    }

    buildPlaylist();
    loadNextVideo();
}

/************************************************************
 * Main
 ************************************************************/
$( document ).ready( function () {
    tv = new TV( "video.screen", "video.interstitial" );
    $( ".overlay" ).click( function () {
        tv.onClipFinished();
    } );
} );