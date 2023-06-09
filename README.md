# ほろよいメーター タスクランナー環境

## 前提条件
gitをcloneする際は基本的に日本語ディレクトリを挟まないでください。
タスクランナーがうまく動作しない可能性があります。


**NG**

```
C:\Desktop\日本語ディレクトリ\.git

```

**OK**

```
C:\Desktop\bpj_renewal\.git
C:\xampp\htdocs\bpj_renewal\.git

```

## バージョン情報
バージョン確認はコマンドプロンプトで「～ -v」を打つと参照可能です。

| 名称 | バージョン |
| ---- | ---- |
| volta | 1.1.0 |
| node | 18.12.1 （LTS）|
| npm | 8.19.2 |
| npx | 8.19.2 |

## 初回セットアップ
以下のコマンドでpackage.jsonをもとにセットアップされます。
※リボ時鳥をcloneし、該当ディレクトリに「cd」で移動する。

```
npm install
```

## タスク実行

基本「src」フォルダ内でコーディングや画像ファイルなどを配置する。
下記タスクを実行すると「dest」フォルダにアップロード用のファイルが出力される。

### 開発（コーディング時）タスク実行

```
npx gulp
```

実行するとローカルサーバーが立ち上がり、「http://localhost:3000/」
が表示されます。
実行中はscssなどは自動的にコンパイルされます。

※画像ファイルなども自動的に圧縮がかかります。

終了する場合は「ctrl+c」を入力し、「バッチ ジョブを終了しますか (Y/N)?」で「Y」→「Enter」を入力してください。

### 本番（アップロード時）タスク実行

```
npx gulp release
```

開発タスク実行中は削除ファイルなどが「dest」フォルダに残ったままなので、
本番タスクを実行し、フォルダ内を整理した後、サーバー等にアップロードする。