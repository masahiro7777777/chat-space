# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# PictweetのDB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|strings|null: false|
|password|strings|null: false|
|nickname|strings|null: false|
### Association
- has_many:tweets
- has_many:groups

## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|intiger|null: false, foreign: true|
|group_id|intiger|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|tweet_id|text|null: false|
|group_id|string|null: false|

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign: true|
|menber|string|null: false|
|user_id|string|null: false, foreign: true|
### Association
- belongs_to :user
- has_many :tweets


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
