# Photo Gallery App

This project was create in React

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

## Structure of the project
`public`

`src`
  - Components

    - AsideFavorites.js
    - AsideHome.js (search logic)
    - ErrorContent.js (displaying different messages based on error message received)
    - PageTop.js (to have a page at the begining when routes)
    - PhotoCard.js 
    - ScrollToTop.js
  - Hooks

    - usePageClass.js (adding className="page-title" to a body)
  - Icons 

  - Layout

    - Header
    - Main (aside + main-content)
    - Footer
  - Pages

    - Home (fetch and infiniteScroll logic using Intersection Observer API)
    - FavoritesPage

`App.js`

`App.css`

<br>

In the `public` folder the following things were changed:

- favicon replaced

- title and meta description in index.html adjusted

## Styles management

- `App.css` cointans global and utils styles

- `StyledComponents.js` containes styles of the components

## Margins for improvements (unresolved issues)

### Infinite scroll 'limited'?
I notice that after some scrolling it seems like there is nothing more to fetch.

Searching around to understand better this part i found:

https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/

8 monts ago was said:

_Free Data API<br>Effective July 1, 2023, the rate limits to use the Data API free of charge are:<br>100 queries per minute per OAuth client id if you are using OAuth authentication and 10 queries per minute if you are not using OAuth authentication.<br>Today, over 90% of apps fall into this category and can continue to access the Data API for free_

If that is so, since i'm filtering fetched data to only display Images (png, jpeg, jpg, webp, svg, gif) and on reddit there are a lots of videos, that explains why i dont get 100, but less images.

### Search logic
The request was to 

_"Add a search box to load a proper list.
When the user types something, display the new content as he types."_

In this case the user has to finish to write a subbreddit and then press Enter or click on a submit button.

Potentential idea on how to create a search box requested:
While  user is typing, input should be compared with an array of the list of all subreddits and as soon the word inserted is found in the list of all subreddits, fetching of that subredddit starts, without waiting for an Enter to be pressed...

List of all Subreddits: https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits/#wiki_general_content

### State manager
The request was:

_Use State manager of your choice (e.g. Redux, Zustand, React-query)_

For now just  React's built-in state management features were used.

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

Styled Components

https://styled-components.com/docs/basics#motivation

Various

https://magic.reactjs.net/htmltojsx.htm
https://icomoon.io/app/#/select
