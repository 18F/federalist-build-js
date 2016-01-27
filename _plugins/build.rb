Jekyll::Hooks.register :site, :after_reset do |site|
    # these are the branches for which we build production assets
    branches = ['master', 'staging', 'js-build']

    if branches.include?(ENV['BRANCH'])
        puts '[build.rb] building for production'
        ENV['NODE_ENV'] = 'production'
        `npm install && npm run build > build.log`
    end
end
