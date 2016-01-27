# Build JS on Federalist

This is a standalone test of an idea that [Brian](https://github.com/gemfarmer)
and I cooked up for [EITI](https://github.com/18F/doi-extractives-data), in
which we use a [Jekyll plugin](http://jekyllrb.com/docs/plugins/) to fire off a
production build (using [WebPack] in this case, but it could be anything) of
our JavaScript in the Federalist build container. That way, we can keep
minified JS out of version control (which inevitably causes merge conflicts, as
in [College Scorecard](https://github.com/18F/college-choice/)) and have
production JS built on specific branches.

Here's how it works:

1. Our Jekyll plugin, [_plugins/build.rb](_plugins/build.rb),
   compares the `BRANCH` environment variable (set by Federalist during a
   build) to a list of known "production" branches.
1. If the branch is in our production list, we set `ENV['NODE_ENV'] =
   'production'` and build the JavaScript with `npm install && npm run build`.
1. Our npm [`build` script](package.json#L7) calls `webpack`.
1. Our webpack config [conditionally uglifies] the JavaScript if
   `process.env.NODE_ENV === 'production'`.

You can see the results built by Federalist [here][live].

[WebPack]: https://webpack.github.io/
[conditionally uglifies]: https://github.com/shawnbot/federalist-build-js/blob/master/webpack.config.js#L16-L20
[live]: http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/shawnbot/federalist-build-js/
