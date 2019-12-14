$(function () {
  var curAudio;
  $(".audio-button").click(function (e) {
      e.preventDefault();
      var song = $(this).next('audio')[0];

      if (curAudio && song != curAudio && !curAudio.paused) {
          curAudio.pause();
          $(curAudio).prev().find('.btn-text').text('Listen');
          $(curAudio).prev().find('.btn-icon').html('');
      }

      if (song.paused) {
          song.play();
          curAudio = song;
          $(this).find('.btn-text').text('Stop');
          $(this).find('.btn-icon').html('');
      } else {
          song.pause();
          curAudio = undefined;
          $(this).find('.btn-text').text('Listen');
          $(this).find('.btn-icon').html('');
      }
      curPlaying = $(this).parent()[0].id;
  });

  $('audio').on('ended', function() {
     $(this).prev().find('.btn-text').text('Listen');
     $(this).prev().find('.btn-icon').html('');
  });  

});