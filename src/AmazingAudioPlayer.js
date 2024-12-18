import React, { useEffect } from 'react';
import $ from 'jquery';
import './component/audioplayerengine/jquery.js'; // Adjust the path as necessary
import './component/audioplayerengine/initaudioplayer-1.css'; // Adjust the path as necessary

const AmazingAudioPlayer = () => {
    useEffect(() => {
        const scripts = document.getElementsByTagName("script");
        let jsFolder = "";

        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i)) {
                jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
            }
        }

        $("#amazingaudioplayer-1").amazingaudioplayer({
            jsfolder: jsFolder,
            skinsfoldername: "",
            tracklistarrowimage: "tracklistarrow-48-16-0.png",
            timeformatlive: "%CURRENT% / LIVE",
            volumeimagewidth: 24,
            barbackgroundimage: "",
            tracklistarrowimageheight: 16,
            showtime: true,
            titleinbarwidth: 80,
            showprogress: true,
            random: false,
            titleformat: "%TITLE%",
            height: 600,
            loopimage: "loop-24-24-0.png",
            prevnextimage: "prevnext-24-24-0.png",
            showinfo: false,
            imageheight: 100,
            skin: "BarWithPlaylist",
            responsive: true,
            loopimagewidth: 24,
            showstop: false,
            prevnextimageheight: 24,
            infoformat: "By %ARTIST% %ALBUM%<br />%INFO%",
            tracklistbackgroundimage: "",
            showloading: false,
            forcefirefoxflash: false,
            tracklistscroll: true,
            preloadaudio: true,
            showvolumebar: true,
            imagefullwidth: false,
            width: 300,
            showimage: false,
            showloop: true,
            volumeimage: "volume-24-24-0.png",
            playpauseimagewidth: 24,
            loopimageheight: 24,
            tracklistitemformat: "<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
            prevnextimagewidth: 24,
            titleinbarwidthmode: "fixed",
            forceflash: false,
            tracklistarrowimagewidth: 48,
            playpauseimageheight: 24,
            showbackgroundimage: false,
            stopimage: "stop-24-24-0.png",
            showvolume: true,
            playpauseimage: "playpause-24-24-0.png",
            forcehtml5: false,
            showprevnext: true,
            backgroundimage: "",
            loadingformat: "Loading...",
            progressheight: 8,
            showtracklistbackgroundimage: false,
            titleinbarscroll: true,
            showtitle: false,
            defaultvolume: 100,
            showtitleinbar: false,
            heightmode: "auto",
            titleinbarformat: "%TITLE%",
            showtracklist: true,
            stopimageheight: 24,
            volumeimageheight: 24,
            stopimagewidth: 24,
            volumebarheight: 80,
            noncontinous: false,
            stopotherplayers: true,
            showbarbackgroundimage: false,
            volumebarpadding: 8,
            imagewidth: 100,
            timeformat: "%CURRENT% / %DURATION%",
            autoplay: false,
            fullwidth: false,
            loop: 1,
            tracklistitem: 10
        });
    }, []);

    return (
        <div id="amazingaudioplayer-1" className="flex flex-col justify-center items-center relative">
            {/* Additional HTML structure for the audio player can go here */}
        </div>
    );
};

export default AmazingAudioPlayer;