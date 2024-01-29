# Photo Gallery App

This project was created in React

```
npx create-react-app photo-gallery
cd photo-gallery
npm start
```
It fetches the images from Reddit subreddits.

Here you can check out the result:

https://photo-gallery-by-ada.vercel.app/

## Functionalities 

### - Infinite scroll
### - Search for subreddits
### - Selecting/deselecting images as favorites
### - Favorites page to see o remove favorites images

<br><br>
## Structure of the project
`public`

`src`

  - App.js

  - App.css

  - Components
    - IconSvg 
        - ArrowRight.js
        - Heart.js
        - HomeIcon.js
        - MobHeart.js
    - AsideFavorites.js
    - AsideHome.js (search logic)
    - ErrorContent.js (displaying different messages based on error message received)
    - PageTop.js (to have a page at the begining when routes)
    - PhotoCard.js 
    - ScrollToTop.js
    - StyledComponents.js

  - Hooks

    - usePageClass.js (adding className="page-title" to a body)

  - Icons (used as img in PhotoCard)

  - Layout

    - Header
    - Main (aside + main-content)
    - Footer

  - Pages

    - Home (fetch and infiniteScroll logic using Intersection Observer API)
    - FavoritesPage



<br>

In the `public` folder the following things were changed:

- favicon replaced

- title and meta description in index.html adjusted

<br><br>
## Styles management

- `App.css` cointans global and utils styles

- `StyledComponents.js` containes styles of the components
<br><br>
## Room for improvements (unresolved issues)

### 1. Infinite scroll 'limited'?
I notice that after some scrolling it seems like there is nothing more to fetch.

Searching around to understand better this part i found:

https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/

8 monts ago was said:

_Free Data API<br>Effective July 1, 2023, the rate limits to use the Data API free of charge are:<br>100 queries per minute per OAuth client id if you are using OAuth authentication and 10 queries per minute if you are not using OAuth authentication.<br>Today, over 90% of apps fall into this category and can continue to access the Data API for free_

If that is so, since i'm filtering fetched data to only display Images (png, jpeg, jpg, webp, svg, gif) and on reddit there are a lots of videos, that explains why i dont get 100, but less images.

### 2. Search logic
The request was to 

_"Add a search box to load a proper list.
When the user types something, display the new content as he types."_

In this case the user has to finish to write a subbreddit and then press Enter or click on a submit button.

Potentential idea on how to create a search box requested:
While  user is typing, input should be compared with an array of the list of all subreddits and as soon the word inserted is found in the list of all subreddits, fetching of that subredddit starts, without waiting for an Enter to be pressed...

List of all Subreddits: https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits/#wiki_general_content

### 3. State manager
The request was:

_Use State manager of your choice (e.g. Redux, Zustand, React-query)_

For now just  React's built-in state management features were used.

### 4. Handling responsive images

Could not get a responsive image src from preview -> images -> resolutions -> url to load a better images for a different viewports/breakpoints.

So what I did, i choose to load for small screens a thumbnails (too low quality) and for a big screen a full media (which is too huge for a web).

### 5. Lack of Unit or Component tests :-(

### 6. Different meta for pages


<br><br>
## Tools for measuring the page quality

https://pagespeed.web.dev/analysis/https-photo-gallery-by-ada-vercel-app/

<br><br>
## Helpful resourses

InfiniteScroll:

https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/#basic-setup

https://dev.to/imkrunalkanojiya/how-to-create-infinite-scroll-with-fetch-data-from-api-in-reactjs-1l65

https://dev.to/vishnusatheesh/exploring-infinite-scroll-techniques-in-react-1bn0

Fetching Reddit API

https://www.reddit.com/dev/api/

https://www.reddit.com/subreddits/

https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits/#wiki_general_content

https://www.reddit.com/r/redditdev/comments/21v30m/getting_a_list_of_all_subreddits/

https://www.reddit.com/r/learnjavascript/comments/z7uf87/dealing_with_null_results_from_an_api/

https://stackoverflow.com/questions/31942743/how-to-get-json-data-from-reddit-after-the-first-page

Styled Components

https://styled-components.com/docs/basics#motivation

Various

https://www.w3schools.com/cssref/css3_pr_text-overflow.php

https://www.positronx.io/react-add-dynamic-class-name-to-body-when-navigating-tutorial/

https://www.codingsparkles.com/how-to-add-a-dynamic-class-name/

https://stackoverflow.com/questions/59766986/react-router-dom-link-open-at-the-top-of-page

https://magic.reactjs.net/htmltojsx.htm

https://icomoon.io/app/#/select

https://www.makeuseof.com/react-router-404-page-create/ 

https://prismic.io/blog/next-gen-image-formats

https://bobbyhadz.com/blog/react-scroll-to-top