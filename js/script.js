'use strict';

        (function() {
            setTimeout(title01, 10);
                function title01() {
                    var scrollElemToWatch_1 = document.getElementById('title01'),
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


            (function() {
                setTimeout(title02, 10);
                    function title02() {
                        var scrollElemToWatch_2 = document.getElementById('title02'),
                            watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -10),                
                            rev2 = new RevealFx(scrollElemToWatch_2, {
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
                        watcher_2.enterViewport(function() {
                            rev2.reveal();
                            watcher_2.destroy();
                        });
                    }
                })();


                (function() {
                    setTimeout(title03, 10);
                        function title03() {
                            var scrollElemToWatch_3 = document.getElementById('title03'),
                                watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -10),                
                                rev3 = new RevealFx(scrollElemToWatch_3, {
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
                            watcher_3.enterViewport(function() {
                                rev3.reveal();
                                watcher_3.destroy();
                            });
                        }
                    })();