# Picsum

# What is done

- Backend api tests `./spec`
- Backend functionality as Tests are being written `./app/controllers` , `./app/models` etc
- Frontend with react `./frontend`
- created specs for `Pic` Model at `./spec/models/pic_spec.rb`
- create specs for `User` Model at `./spec/models/user_spec.rb`
- create specs for `Info` Model at `./spec/models/info_spec.rb`
- create specs for `Info` Model at `./spec/models/like_spec.rb`
- create specs for `Pic` Conttoller at `./spec/requests/pics_requests_spec.rb` (WIP)
- create specs for `User` Conttoller at `./spec/requests/users_requests_spec.rb` (WIP)
- Added JWT token auth
- Added Seed file
- Added Migrations
- When Pics are created, it will also auto populate `infos` table with the info of image (was planning to display info)
- Seed file is in `db/data.txt`

# Gold Plating

- Like feature implemented in backend with tests but not yet implemented in frontend
- Users JWT Token auth is implemented but not in frontend.

# TODO

- Although the feature to get image by dimensions with tests is already implemented in backend, the functionality is not yet implemented in frontend

# How to run

Note: The app is also hosted in [heroku](https://calm-cliffs-76785.herokuapp.com/)

First make sure you have rubu 2.6.5 installed with rails version 6. If not follow this [guide to install ruby on rails](https://gorails.com/setup/osx/10.15-catalina) , Make sure its ruby 2.6.5 and rails 6. This application uses postgresql database so you will also need postgreslql installed on your system.

Once everything is installed. Navigate to the root of the application in terminal and run the following commands in order

1.  `bundle install && yarn install`
2.  `bundle exec rails db:setup` (This will create database and seed the data)
3.  `yarn test` or `rspec` to run the test suit
4.  `bin/rails s` to run the server at `http://localhost:3000`

![enter image description here](https://i.ibb.co/jJqY4hw/Screen-Shot-2020-04-13-at-11-43-22-PM.png)

![enter image description here](https://i.ibb.co/rcQqjZR/Screen-Shot-2020-04-13-at-11-54-56-PM.png)

![enter image description here](https://i.ibb.co/LgBZg9q/Screen-Shot-2020-04-13-at-11-55-06-PM.png)
