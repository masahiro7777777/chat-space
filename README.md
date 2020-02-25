# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
#  ChatspaceのDB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|nickname|string||
### Association
- has_many:tweets
- has_many:groups

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|null: false|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign: true|
|user_id|string|null: false, foreign: true|
### Association
- belongs_to :user
- has_many :tweets


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
