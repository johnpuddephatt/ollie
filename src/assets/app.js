let videos = document.querySelectorAll('.video-item--proportional iframe');

videos.forEach(video => {
  // video.setAttribute('loading', 'lazy');
  let width = video.getAttribute('width');
  let height = video.getAttribute('height');
  if(height > width) {
    video.parentNode.parentNode.classList.add('portrait');
  }
  if(height == width) {
    video.parentNode.parentNode.classList.add('square');
  }
  if(width >= (2 * height)) {
    video.parentNode.parentNode.classList.add('wide');
  }
  let ratio = height/width * 100;
  video.parentNode.style.paddingTop = ratio + '%';
});
