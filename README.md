To run:
'''
    npm install
    
    npm start

'''

Project is also deployed at: [Pokedex](https://quinnchrest.github.io/Pokedex/)

---

Quinn Chrest
Bushel Application Project

I would like to start out by prefacing that this is the first app I’ve ever built in REACT. It was a lot of fun to get to know, and it came with a lot of challenges being it is my first time working with it. I was not able to complete the project to the point I would have liked to but due to time constraints with working full time I needed to get it in otherwise it would never get done. 

I am happy with what I accomplished but I will go into points that could be improved on:

-	I was unable to create a mobile view of the webpage due to time constraints, but the webpage is responsive in the fact that it handles the size of the window changing until about a width of 850px is when it starts to look funky. To fix this I would add in media rules for screen size to the CSS to change the styling of the page when the screen reaches a max width of 850px.

-	The forward/backward browser buttons work but you can not go from page to page of Pokémon cards with them, it just works when going between home and detailed views.

-	I had troubles with getting the Pokémon cards on the home page to align correctly and I finally had to cave with doing justify content center. Which works and looks fine when each row has equal number of cards but if not, the last row just looks a little funky. I am not sure how to fix this I tried to use flex for the longest time and still am but when wrapping content, the div doesn’t change its width to the nearest card so there is a bunch of space on the right side. If I could solve that problem, then I can just use justify content flex start.

Being that this is something that I haven’t worked with before I spent a lot of time continually refactoring code, because I found a way of doing something but then found a better way to do it so would go back and refactor everything for consistency.
