To run:
```node
    npm install
    
    npm start
```

Project is also deployed at: [Pokedex](https://quinnchrest.github.io/Pokedex/)

---

This was My first experience with REACT and I gotta say, it was a lot of fun. I think my favorite part about REACT is you can dump variables into the html from the javascript side and it just works. Updating content on the page has never been so easy. Not having to deal with page life cycle problems was a nice change for once.

I am happy with what I set out to achieve with this application but there are two things that I had to compromise on:

 - I had troubles with getting the Pokémon cards on the home page to align correctly and I finally had to cave with doing justify content center. Which works and looks fine when each row has equal number of cards but if not, the last row just looks a little funky. I am not sure how to fix this I tried to use flex for the longest time and still am but when wrapping content, the div doesn’t change its width to the nearest card so there is a bunch of space on the right side. If I could solve that problem, then I can just use justify content flex start.

  - The page dosen't support a mobile view. I think I could have fixed this using bootstrap. I am not to knowledgable on bootstrap but will be making my next project a center point for bootstrap.

Some cool things that I had fun with:

 - When opening a detail view of a pokemon I use the color thief library to grab the dominent color of the pokemons picture and set that to the pages primary color.
