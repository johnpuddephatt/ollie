let videos = document.querySelectorAll('.video-item--proportional iframe');

videos.forEach(video => {
  // video.setAttribute('loading', 'lazy');
  let width = video.getAttribute('width');
  let height = video.getAttribute('height');
  if(height > width) {
    video.parentNode.parentNode.classList.add('portrait');
  }
  let ratio = height/width * 100;
  video.parentNode.style.paddingTop = ratio + '%';
});
