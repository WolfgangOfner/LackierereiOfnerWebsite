```docker run -it --rm --volume="$($PWD):/srv/jekyll" -p 4000:4000 jekyll/jekyll:4.2.0 jekyll serve```

```docker run -it --rm --env JEKYLL_ENV=production --volume="$($PWD):/srv/jekyll" jekyll/jekyll:4.2.0 jekyll build```