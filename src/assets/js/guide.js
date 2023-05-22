'use strict';

setTimeout(title01, 10);
function title01() {
  let scrollElemToWatch_1 = document.getElementById('title01'),
  watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -10),                
  rev1 = new RevealFx(scrollElemToWatch_1, {
    revealSettings : {
      bgcolor: '#26baf0',
      duration: 300,
      onStart: function(contentEl, revealerEl) { 
        anime.remove(contentEl);
        contentEl.style.opacity = 0; 
      },
      onCover: function(contentEl, revealerEl) { 
        contentEl.style.opacity = 1;
        anime({
          targets: contentEl,
          duration: 100,
          delay: 10,
          easing: 'easeOutExpo',
          opacity: [0,1]
        });
      }
    }
  })
  watcher_1.enterViewport(function() {
    rev1.reveal();
    watcher_1.destroy();
  });
}