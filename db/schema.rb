# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_12_031139) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "infos", force: :cascade do |t|
    t.string "author"
    t.string "url"
    t.string "download_url"
    t.integer "height"
    t.integer "width"
    t.bigint "pic_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author"], name: "index_infos_on_author"
    t.index ["pic_id"], name: "index_infos_on_pic_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pic_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pic_id"], name: "index_likes_on_pic_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "pics", force: :cascade do |t|
    t.integer "width"
    t.integer "height"
    t.integer "picsum_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "url"
    t.index ["height"], name: "index_pics_on_height"
    t.index ["picsum_id"], name: "index_pics_on_picsum_id"
    t.index ["width"], name: "index_pics_on_width"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "password_confirmation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "infos", "pics"
end
