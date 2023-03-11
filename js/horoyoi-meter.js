'use strict';

// ========== 月ごとのメッセージ ========== //
let season = new Date().getMonth() + 1; // 「月」を0から11の整数で返す
let season_message;

if (season === 1) {
    season_message = ('あけましておめでとうございます。年末年始、飲みすぎていませんか？');
} else if (season === 2) {
    season_message = ('厳しい寒さが続きます。日本酒や赤ワインには体を温めてくれる作用があります。');
} else if (season === 3) {
    season_message = ('桜の季節がやってきましたね。お花見しながらのお酒はおいしいですね。');
} else if (season === 4) {
    season_message = ('新入生や新社会人のみなさん、おめでとうございます。歓迎会シーズンがやってきました。');
} else if (season === 5) {
    season_message = ('新しい環境には慣れてきましたか？疲れをためると酔いやすくなります。');
} else if (season === 6) {
    season_message = ('梅酒を漬ける作業は「梅雨」の風物詩。梅酒を飲んで乗り切りましょう。');
} else if (season === 7) {
    season_message = ('梅雨が終わり、暑い季節がやってきます。ビールや冷酒がおいしい季節になりました。');
} else if (season === 8) {
    season_message = ('毎日暑いこの季節、野球を見ながら飲むビールはおいしいですね。');
} else if (season === 9) {
    season_message = ('まだまだ暑い日が続きます。夏バテしていませんか？');
} else if (season === 10) {
    season_message = ('食欲の秋！ご飯と一緒にお酒も楽しみたいですね。日本酒がおすすめです。');
} else if (season === 11) {
    season_message = ('11月頃から日本酒の新酒シーズンが始まります。酒蔵巡りはいかがでしょうか。');
} else if (season === 12) {
    season_message = ('一年間お疲れ様です。忘年会、新年会シーズンがやってきます。');
} else {
}

document.getElementById('season_message').textContent = season_message;

// =============== 計算 =============== //
document.getElementById('result_button').onclick = function () {
    // 入力された「体重」を取得
    let input_weight = parseInt(document.getElementById('input_weight').value);

    // 入力されたお酒の「本数」を取得
    let num_beer = Math.floor(document.getElementById('num_beer').value);
    let num_whisky = Math.floor(document.getElementById('num_whisky').value);
    let num_high = Math.floor(document.getElementById('num_high').value);
    let num_nihon = Math.floor(document.getElementById('num_nihon').value);
    let num_shochu = Math.floor(document.getElementById('num_shochu').value);
    let num_glasswine = Math.floor(document.getElementById('num_glasswine').value);
    let num_bottlewine = Math.floor(document.getElementById('num_bottlewine').value);
    let num_awamori = Math.floor(document.getElementById('num_awamori').value);
    let num_habu = Math.floor(document.getElementById('num_habu').value);

    // お酒の合計本数
    let num_total = num_beer + num_whisky + num_high + num_glasswine + num_bottlewine + num_nihon + num_shochu + num_awamori + num_habu;

    // 各アルコールの量 = 本数 × 容量
    let cap_beer = num_beer * 350;
    let cap_whisky = num_whisky * 30;
    let cap_high = num_high * 350;
    let cap_nihon = num_nihon * 180;
    let cap_shochu = num_shochu * 110;
    let cap_glasswine = num_glasswine * 125;
    let cap_bottlewine = num_bottlewine * 750;
    let cap_awamori = num_awamori * 90;
    let cap_habu = num_habu * 30;

    // 各アルコール量の合計
    let cap_total = cap_beer + cap_whisky + cap_high + cap_glasswine + cap_bottlewine + cap_nihon + cap_shochu + cap_awamori + cap_habu;

    // 純アルコール量 容量 × 度数 × 比重0.8
    let pure_beer = Math.floor(num_beer * 350 * 0.05 * 0.8);
    let pure_whisky = Math.floor(num_whisky * 30 * 0.4 * 0.8);
    let pure_high = Math.floor(num_high * 350 * 0.07 * 0.8);
    let pure_nihon = Math.floor(num_nihon * 180 * 0.15 * 0.8);
    let pure_shochu = Math.floor(num_shochu * 110 * 0.25 * 0.8);
    let pure_glasswine = Math.floor(num_glasswine * 125 * 0.12 * 0.8);
    let pure_bottlewine = Math.floor(num_bottlewine * 750 * 0.12 * 0.8);
    let pure_awamori = Math.floor(num_awamori * 90 * 0.3 * 0.8);
    let pure_habu = Math.floor(num_habu * 30 * 0.25 * 0.8);

    // 純アルコール量の合計
    let pure_total = Math.floor(pure_beer + pure_whisky + pure_high + pure_nihon + pure_shochu + pure_glasswine + pure_bottlewine + pure_awamori + pure_habu) + 'g';

    // お酒の本数を入力したら、計算して「純アルコール量」を表示する
    document.getElementById('output_beer').textContent = pure_beer + 'g';
    document.getElementById('output_whisky').textContent = pure_whisky + 'g';
    document.getElementById('output_high').textContent = pure_high + 'g';
    document.getElementById('output_nihon').textContent = pure_nihon + 'g';
    document.getElementById('output_shochu').textContent = pure_shochu + 'g';
    document.getElementById('output_glasswine').textContent = pure_glasswine + 'g';
    document.getElementById('output_bottlewine').textContent = pure_bottlewine + 'g';
    document.getElementById('output_awamori').textContent = pure_awamori + 'g';
    document.getElementById('output_habu').textContent = pure_habu + 'g';

    // 本数 × 容量 × 濃度
    let alc_beer = num_beer * 350 * 0.05;
    let alc_whisky = num_whisky * 30 * 0.4;
    let alc_high = num_high * 350 * 0.07;
    let alc_nihon = num_nihon * 180 * 0.15;
    let alc_shochu = num_shochu * 110 * 0.25;
    let alc_glasswine = num_glasswine * 125 * 0.12;
    let alc_bottlewine = num_bottlewine * 750 * 0.12;
    let alc_awamori = num_awamori * 90 * 0.3;
    let alc_habu = num_habu * 30 *0.25;

    // 合計
    let alc_total = alc_beer + alc_whisky + alc_high + alc_glasswine + alc_bottlewine + alc_nihon + alc_shochu + alc_awamori + alc_habu;

    // 血中アルコール濃度:飲酒量（ml）× アルコール度数（%）／ 833 × 体重（kg）
    let blood_alc =  (alc_total / ( 833 * input_weight )) * 100;

    let error_message;
    //let alcoholism;
    
    // 測定結果により文章と画像を切り替える
    if (input_weight > 0 && input_weight != '') {
        
        // 結果の文章
        document.getElementById('blood_alc').textContent = point(blood_alc , 2) + '%';
        //document.getElementById('your_status').textContent = your_status;
        document.getElementById('pure_alc').textContent = pure_total;
        document.getElementById('error_message').textContent = error_message;
        document.getElementById('num_total').textContent = num_total + '本,';
        document.getElementById('cap_total').textContent = cap_total + 'ml';
        //document.getElementById('alcoholism').textContent = alcoholism;

            if (blood_alc >= 0.02 && blood_alc < 0.05) {
                document.getElementById('your_status').textContent = ('爽快期');
                document.getElementById('main').src = "img/soukai-d.jpg";
            } else if (blood_alc >= 0.05 && blood_alc < 0.1) {
                document.getElementById('your_status').textContent = ('ほろよい期');
                document.getElementById('main').src = "img/horoyoi-d.jpg";
            } else if (blood_alc >= 0.1 && blood_alc < 0.15) {
                document.getElementById('your_status').textContent = ('酩酊初期');
                document.getElementById('main').src = "img/shoki-d.jpg";
            } else if (blood_alc >= 0.15 && blood_alc < 0.3) {
                document.getElementById('your_status').textContent = ('酩酊期');
                document.getElementById('main').src = "img/meitei-d.jpg";
            } else if (blood_alc >= 0.3 && blood_alc < 0.4) {
                document.getElementById('your_status').textContent = ('泥酔期');
                document.getElementById('main').src = "img/deisui-d.jpg";
            } else if (blood_alc >= 0.4 && blood_alc < 0.5) {
                document.getElementById('your_status').textContent = ('昏睡期');
                document.getElementById('alcoholism').textContent = 'アルコール中毒の危険性があります。';
                document.getElementById('main').src = "img/konsui-d.jpg";
            } else if (blood_alc >= 0.5 ) {
                document.getElementById('your_status').textContent = ('昏睡期または測定不能');
                document.getElementById('alcoholism').textContent = 'アルコール中毒の危険性があります。';
                document.getElementById('main').src = "img/konsui-d.jpg";
            } else {
                document.getElementById('your_status').textContent = ('測定不能');
            }
        } else {
            window.alert('体重を入力してください。');
            document.getElementById('message_1').textContent = '※体重を0以上の半角数字で入力してください。';
    }
}


// 血中アルコール濃度 小数点第2位で切り捨て
function point(num, digit) {
    const mover = 10** digit;
    return Math.floor(num * mover) / mover;
}

// 入力値のリセット
document.getElementById('reset_button').onclick = function () {
    document.alc_form.reset();
    document.getElementById('main').src = "img/soukai-d.jpg"; // リセットで爽快期に戻る
    document.getElementById('message_1').textContent = '';
    document.getElementById('cap_total').textContent = '';
    document.getElementById('blood_alc').textContent = '??' + '%';
    document.getElementById('your_status').textContent = '??' + '期';
    document.getElementById('pure_alc').textContent = '??'+ 'ml';
    document.getElementById('num_total').textContent = '??' + '本';
    document.getElementById('alcoholism').textContent = '';
    document.getElementById('output_beer').textContent = '';
    document.getElementById('output_whisky').textContent = '';
    document.getElementById('output_high').textContent = '';
    document.getElementById('output_nihon').textContent = '';
    document.getElementById('output_shochu').textContent = '';
    document.getElementById('output_glasswine').textContent = '';
    document.getElementById('output_bottlewine').textContent = '';
    document.getElementById('output_awamori').textContent = '';
    document.getElementById('output_habu').textContent = '';
}

// 画像の切り替え
const thumbs = document.querySelectorAll('.thumbnail');

thumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('main').src = this.dataset.image;
    }
});



