# Express API template
# Express won’t be complete without talking about middleware.
# this repo is mainly for shortner url demo, not implementing a middle ware in this case
# Todo
# decoding short url
# redirect from short url 
#  So far my implementation is done locally with a cloud postgres db
#  Will research more if this needs a delivery to the prod server

$ yarn startdev
$ yarn test
# Url table has been created and that the urls were inserted into the table.
# If you’ve just run your test, remember to run yarn query to recreate the messages table.
$ yarn runQuery

[![Build Status](https://travis-ci.com/Jing-Van/shortner-url-api.svg?branch=master)](https://travis-ci.com/Jing-Van/shortner-url-api)

[![Coverage Status](https://coveralls.io/repos/github/Jing-Van/shortner-url-api/badge.svg?branch=master)](https://coveralls.io/github/Jing-Van/shortner-url-api?branch=master)

<a href="https://codeclimate.com/github/Jing-Van/shortner-url-api/maintainability"><img src="https://api.codeclimate.com/v1/badges/9009cb5e798554576bf2/maintainability" /></a>

<a href="https://codeclimate.com/github/Jing-Van/shortner-url-api/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9009cb5e798554576bf2/test_coverage" /></a>

[![Build status](https://ci.appveyor.com/api/projects/status/64c60ghkkyy8t6em?svg=true)](https://ci.appveyor.com/project/Jing-Van/shortner-url-api)


#### postgres debug lines#### 
delete from "public"."urls" where id = 3;
