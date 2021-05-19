source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

 ruby "2.6.5"

gem "rails", "~> 6.0.2", ">= 6.0.2.2"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 4.3"
gem "webpacker", "~> 4.0"
gem "jbuilder", "~> 2.7"
gem "react-rails"
gem "bcrypt", "~> 3.1", ">= 3.1.13"
gem "knock", "~> 2.1", ">= 2.1.1"
gem "httparty", "~> 0.18.0"
gem "bootsnap", ">= 1.4.2", require: false
gem "responders"
gem 'kaminari'


group :development, :test do
  gem "rspec-rails", "~> 4.0.0"
  gem "factory_bot_rails"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :test do
  gem "shoulda-matchers"
  gem 'database_cleaner-active_record'
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "simplecov", require: false, group: :test
