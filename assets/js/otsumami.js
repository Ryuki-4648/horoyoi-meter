'use strict';


    $(function() {
        setTimeout(title01, 10);
            function title01() {
                var scrollElemToWatch_1 = document.getElementById('title01'),
                    watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -10),                
                    rev1 = new RevealFx(scrollElemToWatch_1, {
                        revealSettings : {
                            bgcolor: '#26baf0',
                            duration: 300, // 期間
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
        });




        
        
(function() {
    setTimeout(block_01, 10);
        function block_01() {
            var scrollElemToWatch_1 = document.getElementById('block_01'),
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

        setTimeout(block_02, 10);
        function block_02() {
            var scrollElemToWatch_1 = document.getElementById('block_02'),
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


        setTimeout(block_03, 10);
        function block_03() {
            var scrollElemToWatch_1 = document.getElementById('block_03'),
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



        setTimeout(block_04, 10);
        function block_04() {
            var scrollElemToWatch_1 = document.getElementById('block_04'),
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


        setTimeout(block_05, 10);
        function block_05() {
            var scrollElemToWatch_1 = document.getElementById('block_05'),
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



        setTimeout(block_06, 10);
        function block_06() {
            var scrollElemToWatch_1 = document.getElementById('block_06'),
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



        setTimeout(block_07, 10);
        function block_07() {
            var scrollElemToWatch_1 = document.getElementById('block_07'),
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


        
    })();