var tv = null;

var clip_list = [
    "content/video/neavetv/weird_dog.mp4"
    , "content/video/neavetv/adhisaya_piravi.mp4"
    , "content/video/neavetv/aerobic.mp4"
    , "content/video/neavetv/armpit_hair.mp4"
    , "content/video/neavetv/bells_dubstep.mp4"
    , "content/video/neavetv/bim_bam_boom.mp4"
    , "content/video/neavetv/bomb.mp4"
    , "content/video/neavetv/broken.mp4"
    , "content/video/neavetv/carnival.mp4"
    , "content/video/neavetv/club_of_friends.mp4"
    , "content/video/neavetv/dark_star.mp4"
    , "content/video/neavetv/death_koala.mp4"
    , "content/video/neavetv/devil_girl.mp4"
    , "content/video/neavetv/eegah.mp4"
    , "content/video/neavetv/erogenous_zone.mp4"
    , "content/video/neavetv/for_your_height_only.mp4"
    , "content/video/neavetv/germs.mp4"
    , "content/video/neavetv/godzilla_flying_kick.mp4"
    , "content/video/neavetv/hand_dj.mp4"
    , "content/video/neavetv/happy_xmas.mp4"
    , "content/video/neavetv/hello_dave.mp4"
    , "content/video/neavetv/helvetica_scenario.mp4"
    , "content/video/neavetv/hungry.mp4"
    , "content/video/neavetv/internal_conflict.mp4"
    , "content/video/neavetv/jacko_cat.mp4"
    , "content/video/neavetv/kkssee.mp4"
    , "content/video/neavetv/laptop_drop.mp4"
    , "content/video/neavetv/late_for_meeting.mp4"
    , "content/video/neavetv/laughing_owl.mp4"
    , "content/video/neavetv/lets_get_it_on.mp4"
    , "content/video/neavetv/lost_babies.mp4"
    , "content/video/neavetv/massive_viral_outbreak.mp4"
    , "content/video/neavetv/motorcycle.mp4"
    , "content/video/neavetv/noodle_monster.mp4"
    , "content/video/neavetv/pizza.mp4"
    , "content/video/neavetv/prank_call.mp4"
    , "content/video/neavetv/ronald_mcdonald.mp4"
    , "content/video/neavetv/skifcha.mp4"
    , "content/video/neavetv/someone_here.mp4"
    , "content/video/neavetv/sonar_dog.mp4"
    , "content/video/neavetv/spoon.mp4"
    , "content/video/neavetv/squirrel_monster.mp4"
    , "content/video/neavetv/street_monster.mp4"
    , "content/video/neavetv/streetlamp.mp4"
    , "content/video/neavetv/useless_superpower.mp4"
    , "content/video/neavetv/wolf_spirit.mp4"

    , "content/video/yt/liesontheinternet.webm"
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
     * When we're playing an interstitial, this will
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