function ResizeVideo( _VideoElement ) {
    var $VideoElement = $( _VideoElement ); //Cache Jquery reference of this
    var iOriginalVideoHeight = _VideoElement.videoHeight;
    var iCurrentVideoHeight = $VideoElement.height();
    var iVideoContainerHeight = $VideoElement.parent().height();
    var iCurrentScale = iOriginalVideoHeight / iCurrentVideoHeight;
    var iScaleY = (iVideoContainerHeight / iOriginalVideoHeight) * iCurrentScale;

    //Important to note: Set the origin to the top left corner (0% 0%), or else the position of the video goes astray
    $VideoElement.css( {
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

$( document ).ready( function () {
    ResizeVideo( "video" );
} );