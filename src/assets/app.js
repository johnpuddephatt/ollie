let videos = document.querySelectorAll('.video-item--proportional iframe');

videos.forEach(video => {
  let width = video.getAttribute('width');
  let height = video.getAttribute('height');
  let ratio = height/width * 100;
  video.parentNode.style.paddingTop = ratio + '%';
});
