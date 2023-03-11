'use strict';

// よくあるご質問 プルダウン
$(function(){
    $('dd').hide();
    $('dt').click(function(){
        $(this).toggleClass('arrow');
        $(this).next('dd').slideToggle();
        });
    });

// はじめはdd(答え)を隠す
// dtをクリックするとイベントが発生

// this:イベントが発生した要素。dtのこと。

// toggleClass:クラスが有る場合はクラスを削除、無い場合はクラスを追加。ON、OFFを切り替える動き
// ここではクラス名「ac」を追加し、矢印の向きを逆にする。

// sideToggle:クリックで下に降りてくるメニューを実装。アコーディオンメニュー。



    $(function() {
        setTimeout(faq_title01, 10);
            function faq_title01() {
                var scrollElemToWatch_1 = document.getElementById('faq_title01'),
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