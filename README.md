# Picsum

# What is done

- Backend api,Models tests `./spec`
- Backend controllers `./app/controllers`
- Backend Models `./app/models`
- Backend Migrations `./db/migrate`
- Frontend with react `./frontend`
- created specs for `Pic` Model at `./spec/models/pic_spec.rb`
- create specs for `User` Model at `./spec/models/user_spec.rb`
- create specs for `Info` Model at `./spec/models/info_spec.rb`
- create specs for `Info` Model at `./spec/models/like_spec.rb`
- create specs for `Pic` Conttoller at `./spec/requests/pics_requests_spec.rb`
- create specs for `User` Conttoller at `./spec/requests/users_requests_spec.rb`
- Added Migrations
- When Pics are created, it will also auto populate `infos` table with the info of image (was planning to display info)
- Seed file is in `db/data.txt`

# Gold Plating

- `Like` feature implemented in backend but not yet implemented in frontend, also they have tests
- Users JWT Token auth is implemented but not in frontend.
- Added JWT token auth

# TODO

- User authentication. Although JWT functionality is there, User controller needs to be created to handle sign up and sign in

# How to run

Note: The app is also hosted in [heroku](https://calm-cliffs-76785.herokuapp.com/)

First make sure you have ruby 2.6.5 installed with rails version 6. If not follow this [guide to install ruby on rails](https://gorails.com/setup/osx/10.15-catalina) , Make sure its ruby 2.6.5 (or any version compatible with rails 6) and rails 6. This application uses postgresql database so you will also need postgreslql installed on your system.

Once everything is installed. Navigate to the root of the application in terminal and run the following commands in order

1.  `bundle install && yarn install`
2.  `bundle exec rails db:setup` (This will create database and seed the data)
3.  If `step 2` complains, try `bundle exec rake db:migrate && bundle exec rake db:seed`
4.  If `step 3` complains, idk try standing up and stretching a little and repeat from `step 2`
5.  `yarn test` or `rspec` to run the test suit
6.  `bin/rails s` to run the server at `http://localhost:3000`

# Current Specs

```
    Info
    .  is expected to belong to pic required: true

    Like
    .  is expected to belong to user required: true
    .  is expected to belong to pic required: true

    Pic
    .  is expected to have many liking_users
    .  is not valid without default height
    .  is not valid without default width
    .  is not valid without picsum_id
    .  is not valid without url
    .  should be able to be liked by user
    .  should be able to be unliked by user
    .  should have valid url
    .  should return grayscale urls
    .  should return blur urls
    .  should return blurred grayscale urls

    User
    .  is invalid with invalid attributes
    .  is valid with valid attributes
    .  is not valid without first_name
    .  is not valid without password
    .  is not valid without email
    .  is not valid without valid email
    .  is valid with valid email
    .  will create password_digest after save
    .  Validates uniqueness of email with custom message
    .  is expected to have many liked_pics

    API::Pics
      GET /index
        with no params passed
    .      returns http success
    .      it returns no more than 25 pics
    .      it returns current page value
    .      it returns total pages value
    .      it returns total items value
    .      it includes info of the image returned
        with params passed
    .      returns correct page requested
    .      returns correct items per page requested
    .      returns all items with grayscale url if requested
    .      returns all items with blur url if requested
    .      returns all items with blur & grayscale url if requested
    .      returns all items with 250 width if requested
    .      returns all items with 250 height if requested

    API::Users
      GET /index
    .    returns http success


    Finished in 40.07 seconds (files took 1.9 seconds to load)
    38 examples, 0 failures

    Finished in 40.07 seconds (files took 1.9 seconds to load)
    38 examples, 0 failures


    Coverage report generated for RSpec to /Users/suyesh/Desktop/picsum/coverage. 209 / 210 LOC (99.52%) covered.
```

![enter image description here](https://i.ibb.co/jJqY4hw/Screen-Shot-2020-04-13-at-11-43-22-PM.png)

![enter image description here](https://i.ibb.co/rcQqjZR/Screen-Shot-2020-04-13-at-11-54-56-PM.png)

![enter image description here](https://i.ibb.co/LgBZg9q/Screen-Shot-2020-04-13-at-11-55-06-PM.png)
