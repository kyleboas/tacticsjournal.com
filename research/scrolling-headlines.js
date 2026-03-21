// Scrolling Headlines - JS Ticker (handles seamless loop better)
(function() {
  function initTicker() {
    const rows = document.querySelectorAll('.sh-row');
    
    rows.forEach(row => {
      const track = row.querySelector('.sh-track');
      if (!track) return;
      
      // Clone the first track and append it
      const clone = track.cloneNode(true);
      clone.removeAttribute('aria-hidden');
      row.appendChild(clone);
      
      // Get the total width of the original track
      const trackWidth = track.scrollWidth;
      
      // Set up animation
      const isLeft = row.classList.contains('sh-row-left');
      const isSlow = row.classList.contains('sh-row-slow');
      let speed = isSlow ? 30 : 50; // pixels per second
      
      let position = isLeft ? 0 : -trackWidth;
      let lastTime = performance.now();
      
      function animate(currentTime) {
        const delta = (currentTime - lastTime) / 1000; // seconds
        lastTime = currentTime;
        
        if (isLeft) {
          position -= speed * delta;
          if (position <= -trackWidth) {
            position = 0;
          }
        } else {
          position += speed * delta;
          if (position >= 0) {
            position = -trackWidth;
          }
        }
        
        row.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      }
      
      // Remove CSS animation
      row.style.animation = 'none';
      row.style.position = 'absolute';
      row.style.left = '0';
      
      // Start animation
      requestAnimationFrame(animate);
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTicker);
  } else {
    initTicker();
  }
})();