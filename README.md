
- When a user clicks play: a random number, 1-6, will be generated

[If the random number is a 1, the rolling player’s score is 0, and it becomes player 2’s turn]
[If the number is anything else, the roll result goes into a cumulative counter, and player CAN roll again]

- 2 Player objects
[K: current score V: # | K: cum score V: #]


functions:

- triggered by click functions:
One for die roll
One for holding points & rolling die
One for ending turn & moving points to cum score
random number function
die function gets called into the score function?

function moves points, clears current score, tells function it’s now playing w other player

- Needs a way to toggle between players [show/hide?]

Branch in a loop for hitting 100

—
Further exp:
series of loops





———————————————
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
	•	If the player rolls a 1, they score nothing and it becomes the next player's turn.
	•	If the player rolls any other number, it is added to their turn total and the player's turn continues.
	•	If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.
