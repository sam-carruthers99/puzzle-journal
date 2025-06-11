// src/data/hintData.js
const hintData = {
  1: {
    hints: [
      "Can you reflect the backwards word?",
    ],
    solution: "Greek",
    solutionExplanation: "Flip the word to reveal the word GREEK"
  },
  2: {
    hints: [
      "Each arrow direction (up, down, left, and right) represents a different mathematical operation",
      "Double arrows mean digit swapping, up=+1, right=+10, down=-10, left=-1",
      "Apply these rules to fill in the missing numbers in the sequence"
    ],
    solution: "62511636",
    solutionExplanation: "Fill To solve this puzzle, you need to find the pattern that is being presented by the diagram, and fill in the missing circles based on that pattern. The pattern works like this: if there is a double arrow, it means the digits of the number switch between those circles. If there is an arrow upwards, the number increases by 1. If there is an arrow to the right, the number increases by 10. If there is an arrow pointing down, the number decreases by 10, and to the left is decreasing by 1. The solution for the missing circles (in order of the border style) is then 62-51-16-36, or just 62511636."
  },
  3: {
    hints: [
      "Think about the main rule of dominoes: touching pieces must match numbers",
      "Identify which dominoes in the set violate this rule",
      "Remove the invalid dominoes and note the remaining numbers"
    ],
    solution: "937",
    solutionExplanation: "After removing all dominoes that violate number matching, you are left with these three The key to this puzzle is remembering the critical rule of dominoes, that touching pieces must be connected by the same number. If we analyze each set of dominoes and remove pieces that go against the rules, we are left with 937."
  },
  4: {
    hints: [
      "Match each symbol on top with its corresponding meaning on the bottom",
      "Down arrow = D, Up arrow = U, etc.",
      "You will need to physically connect (draw) the matches",
      "The lines between matches will form Roman numerals"
    ],
    solution: "429",
    solutionExplanation: "This puzzle works almost like a matching exam. For each of the three sets, you must draw a line connecting the item on the left side to its counterpart on the right side. For example, the down arrow corresponds to “D” for “DOWN”, and the up arrow corresponds to “U” for “UP”. Once you draw a line between each item, it reveals the roman numerals V, II, and IX, which becomes 529."
  },
  5: {
    hints: [
      "Solve the maze like you normally would",
      "The letter grid is the same size as the maze",
      "What if you take the same path in the letter grid that you used to solve the maze?",
      "The phrase you spell out from taking the same path is 'MILLENIUM MINUS ONE'"
    ],
    solution: "999",
    solutionExplanation: "On this page, we must use the solution from the maze at the top to find the letters on the bottom. If we use the same path from the top maze solution on the bottom letters, we cross letters to spell “MILLENNIUM MINUS ONE”. Since a millennium is 1000 years, we subtract 1 to get 999 as the solution."
  },
  6: {
    hints: [
      "Position your hand as shown in the first diagram",
      "You will need a sign language reference",
      "The chart will show you how to postion your fingers (A, B, C, D, E), in four different ways",
      "Combine the letters from all four hand positions"
    ],
    solution: "Slab",
    solutionExplanation: "To solve this puzzle, you must position your hand as shown in the picture, then position your fingers based on the arrows in four different ways. In the first one, you have the first four fingers down, and your thumb pointed up and to the left. At this point, you are making an “S” in sign language. When you do the next three, you get the sign language letters “L”, “A”, and “B” to spell the word SLAB. "
  },
  7: {
    hints: [
      "What is the best way to get a number from a shape?",
      "There is an inner shape and an outer shape for each number",
      "How many sides does each shape have?",
      "A circle counts as having 1 side"
    ],
    solution: "31116314",
    solutionExplanation: "For this puzzle, the top three nested shapes show us the rules of the pattern. The first number is “43” because there is a square on the outside (4 sides) and a triangle on the inside (3 sides). The second one is “61” because there is a hexagon on the outside (6 sides) and circle on the inside (which we count as 1 side for the sake of the puzzle). Applying this logic to the bottom shapes, we get the solution 31-11-63-14, or just 31116314."
  },
  8: {
    hints: [
      "When the line goes off the page, continue it on the opposite side",
      "Note the numbers you cross in order as you follow the complete path",
      "The path forms a continuous loop through all numbers, from start to end"
    ],
    solution: "25467",
    solutionExplanation: "On this page, you begin on “start”, and continue to follow the line. The key is that when the line travels off of the page, it continues to travel on the opposite side of the page in the same spot. For example, at the beginning, when you travel past the “1” at the top of the page, you continue along the bottom where you cross the “2”. Taking all the numbers as you travel to the end, you get the code 25467."
  },
  9: {
    hints: [
      "What happens when you go from M to C?",
      "Pay attention to what you cross as you go from letter to letter",
      "Going from M->C, you cross over 'P'. What about the other ones?"
    ],
    solution: "Planet",
    solutionExplanation: "For this puzzle, you need to find the letter that you cross when you travel from letter to letter. For example, when you travel from M to C, you cross the letter P. When you go from I to F, you cross the letter L. Following this pattern, you spell out PLANET."
  },
  10: {
    hints: [
      "You don't need to know how to play Tic-Tac-Toe to solve this",
      "Pay attention to just the Xs",
      "In the letter grids below, what letters are in the same position as the Xs above?",
      "Get the letters in the same position as the Xs from left to right, top to bottom, doing one grid at a time"
    ],
    solution: "76891",
    solutionExplanation: "For this, you need to only pay attention to the letters in the lower Tic Tac Toe boards that correspond to the Xs in the upper boards, and ignore the letters associated with Os. If we look at the first one, we get the word SEVEN. Continuing this, we spell out SEVEN SIX EIGHT NINE ONE, so the solution is 76891."
  },
  11: {
    hints: [
      "Use actual coins (penny, nickel, quarter) and place them on their marked positions",
      "Observe the shape formed by the coins when placed correctly",
      "Think of winter themed figures that match this shape"
    ],
    solution: "Snowman",
    solutionExplanation: "This puzzle shows an incomplete picture. When you place a quarter on the 25 cent spot, a nickel on 5 cents, and a dime on 10 cents, it will form the shape of a SNOWMAN."
  },
  12: {
    hints: [
      "The ooze is spreading, and will soon cover all five numbers",
      "What number will it cover first?",
      "Based on distance, what order will it cover the numbers?"
    ],
    solution: "62517",
    solutionExplanation: "To start this puzzle, you have to notice that the sentence “I can’t stop it from spreading” implies that the black ooze is continuing to spread in the picture. Assuming it spreads at the same rate at all points, you have to find the order in which it will touch the numbers as it spreads. This means that exact distance from the ooze is important for this puzzle. The order that it will touch the numbers is 62517."
  },
  13: {
    hints: [
      "What path leads to the basement?",
      "Note the sequence of rooms you must pass through in your path to the basement",
      "What is the first letter of each room you go through?"
    ],
    solution: "Lockers",
    solutionExplanation: "In this puzzle, we have to follow the logic of the sentence, “I need to get to the basement”. If we look at the map of the house, we see that the entrance to the house is the living room. After this, the only way to get to the basement is to go through the office, conservatory, kitchen, electrical room, restroom, and finally the study. If we take the first letter from each of the rooms we traveled through, we spell the word LOCKERS."
  },
  14: {
    hints: [
      "Start at the black dot and follow the movement instructions (U4 = Up 4, R2 = Right 2)",
      "Connect the dots as you plot each new position",
      "The final shape is a well known constellation"
    ],
    solution: "Dipper",
    solutionExplanation: "This puzzle requires tracing out a connected path starting from the one black dot on the grid. The U4, R2 indicates to travel UP 4 spaces, and RIGHT 2 spaces, draw a dot, and connect it to where you came from. The next connected one is D1, R2, so you would travel DOWN 1 and RIGHT 2 from the dot you just created, draw a new dot in that space, and connect it with the previous one. Then, you would do the same thing with the bottom path. Once trace out and connect all the dots, it shows the constellation LITTLE DIPPER or just DIPPER."
  },
  15: {
    hints: [
      "Can you take the question on the page more literally?",
      "What letters are in 'Cure'?",
      "Each letter has a number associated with it. Can you convert CURE to 4 numbers?"
    ],
    solution: "3793",
    solutionExplanation: "For this page, you have to take the message, “How do I make the cure?” literally. You have to find the vials that are associated with C-U-R-E. The associated vials are C3, U7, R9, E3, so if we take only the numbers, we get 3793."
  },
  16: {
    hints: [
      "This is a classic sentence containing all letters of the alphabet",
      "There are a few things wrong about this sentence",
      "What letters are present here that shouldn't be? What are the letters that should be there?",
      "You need both the incorrect letters that are present, and the correct letters that are not present"
    ],
    solution: "Infectious",
    solutionExplanation: "This puzzle takes the classic typing practice line “The quick brown fox jumps over the lazy dog” and substitutes some of the letters for incorrect ones. To solve it, you need to start by identifying which letters are incorrect. First, you take the current letters that are incorrect, which are INFEC. Then you combine it with the letters that should be there, which is TIOUS. Altogether, it is INFECTIOUS."
  },
  17: {
    hints: [
      "What words on the outside relate to Water, Fire, and Air?",
      "Can you physically connect the two related words for each category?",
      "'Sun' and 'Heat' relate to 'Fire'",
      "When you draw in all three connections, what word is surrounded by the lines?"
    ],
    solution: "Brick",
    solutionExplanation: "For this page, you need to connect the two words that relate to each concept with a straight line. For “water”, you connect “ice” and “steam”. For “fire” you connect “sun” and “heat”. For “earth”, you connect “plant” and “sphere”. When these three are connected, they will triangulate around the word BRICK. For this puzzle, it is important that the connecting lines don’t cross over any words in the circle."
  },
  18: {
    hints: [
      "You do not need to do any math for this puzzle",
      "2 + 5 + 6 means that you need to combine those three tiles",
      "When you combine and overlap tiles, it should create a number"
    ],
    solution: "6358",
    solutionExplanation: "In this puzzle, you have to use the math “equation” as an indicator to overlay the numbered tiles. For example, “1 + 2 + 6 + 7 =” means that you have to imagine that you overlay tiles 1, 2, 6, and 7. When you overlay those tiles, the lines create the number 6. When you do this with the others as well, you get the code 6358."
  },
  19: {
    hints: [
      "On the left side, pay attention to just the letter in KITE",
      "The letters to the left of the line are in the same spread as the numbers to the right of the line",
      "What numbers on the right would be associated with the letters K-I-T-E on the left"
    ],
    solution: "7538",
    solutionExplanation: "To solve this puzzle, you have to create the left and right side of the line as reflections. So when you take the word KITE, you have to find the number that is the reflection of K, then I, and so on. When you do this, you get 7538. It is important that the two sides are almost exact reflections of each other in terms of distance."
  },
  20: {
    hints: [
      "What does P+12 equal?",
      "+12 means going forward 12 in the alphabet",
      "What new word is made when you shift 'P' in 'PONY' forward by 12?"
    ],
    solution: "Cane",
    solutionExplanation: "For this puzzle, you need to shift letters to new letters based on a number. If you shift the letter “P” 12 places forward (+12) in the alphabet, you get the letter “B”. Now, we have the word BONY. Next, when we shift “Y” forward by 6 in the alphabet (assuming Z loops back to A), we get the letter “E”. Now, our word is BONE. After we apply two more translations (B+1 and O+12), we will end up with our final word, which is CANE."
  },
  21: {
    hints: [
      "X marks the spot, but where is the buried treasure?",
      "Usually, the buried treasure is below the X. Take this literally",
      "Find the treasure chest and a different page, below one of the Xs ",
      "Combine the number found on the treasure chest with the number of the specific X that you found it under"
    ],
    solution: "746",
    solutionExplanation: "This page actually requires looking at one of the later pages. From the setup, we see a treasure chest, and multiple Xs branching to different locations. If we look ahead to page 23, we will see there is a treasure chest labeled “527”. Looking at both pages at once, we see that the X that is directly over the chest is the normal looking capital X associated with “219”. If we add 219 and 527, we get 746. For this one, it is important that the correct X on page 42 is directly above the treasure chest from page 23."
  },
  22: {
    hints: [
      "In a game of hangman, the letters that aren't found in the answer are crossed out",
      "Remove the crossed out letters from the sentence 'LARGE DRAGONS CAN DEFEAT TINY KNIGHTS FAST'",
      "What is left when you remove a, d, e, f, g, h, i, n, r, s, t, and y?"
    ],
    solution: "Lock",
    solutionExplanation: "This puzzle is based on the game Hangman. To solve it, we have to ignore any letters that have been crossed out. When we take away the crossed out letters from the sentence “LARGE DRAGONS CAN DEFEAT TINY KNIGHTS FAST”, we are left with just the word LOCK."
  },
  23: {
    hints: [
      "The treasure chest is not relevant for this puzzle",
      "'D' means down, and 'U' means up",
      "T - D2 means you need to move any Ts down by two positions",
      "After each rearrangement, move to the next line of instructions for the next letter",
      "A new word will be formed when all the letters are rearranged correctly"
    ],
    solution: "Deforestation",
    solutionExplanation: "On this page, we have some letters arranged vertically. To solve it, we have to follow the direction on the right to shift some of the letters. The first one is “T - D2”, which means we have to shift all Ts in the sequence down by two spaces. Then for “O - D2”, we would take our new sequence, and shift any Os in the word down by two. After we do the last two shifts, we end up with the word DEFORESTATION from top to bottom. For treasure chest, reference page 42, since it must be directly under one of the Xs."
  },
  24: {
    hints: [
      "When traveling through the grid, you cannot cross through the rocks",
      "What path can you take through the grid that matches the directions, without hitting any rocks or going outside the grid?",
      "The solution will be the starting and ending coordinate combined"
    ],
    solution: "F3G4",
    solutionExplanation: "For this puzzle, you are given a grid and a set of directions to travel, but you don’t know the start and end points. Assuming you can’t move through the rocks, there is only one valid start and end point on the grid, which are F3-G4, or just F3G4."
  },
  25: {
    hints: [
      "What makes 'phone' heavier than 'car'? Don't think about the actual objects",
      "Find the heavier option for each pair of words. If the left is heavier, it is a 1, and it is a 0 if the right is heavier",
      "Pay attention to the number of letters in each word"
    ],
    solution: "11010",
    solutionExplanation: "In this page, the top three scales show examples of how the pattern works, which is that the “heavier” word is the one with more letters. If two words have the same amount of letters, they are the same “weight”. Now, you choose either “1” or “0” in the sequence based on which word is heavier. When you do this with all the scales, it gives the sequence 11010."
  },
  26: {
    hints: [
      "Does the layout and color of this remind you of anything?",
      "Think about musical instruments",
      "You will need a reference for piano keys",
      "What notes are 1, 2, 3, and 4 referring to?"
    ],
    solution: "Bead",
    solutionExplanation: "The picture shows a picture of a piano, except it is laid out with the black key right next to the white keys rather than nested between them. From the layout, we know that the order of the white keys from left to right must be C, D, E, F, G, A, B. Then, if we take the numbers in labeled order, we get the word BEAD."
  },
  27: {
    hints: [
      "Start by filling in the letters of San Diego onto the blank spots, starting with 'S' on the top most spike, then going clockwise to fill the rest",
      "Pay attention to the length of each spike",
      "Now, start from the shortest spike and increase from there"
    ],
    solution: "Diagnose",
    solutionExplanation: "On this page, all you have to do is place the letters in “San Diego” on the spikes, starting with “S” on the top spike and moving clockwise. After that, you reorder the letters based on the length of the spikes from smallest to largest, which reshuffles to DIAGNOSE."
  },
  28: {
    hints: [
      "Usually when you think of water, there is a reflection",
      "The symbols / letters by the lake are only half letters. Specifically the upper half",
      "Create the bottom half of each letter by drawing in the reflection of the top half"
    ],
    solution: "Hide",
    solutionExplanation: "In this page, you are given a scene of some half completed letters next to a lake at night. When you imagine what the reflection of the letters would be in the lake, it gives complete letters, which spells out the word HIDE."
  },
  29: {
    hints: [
      "Have you seen these colors in this layout before?",
      "Think about classic board games"
    ],
    solution: "Monopoly",
    solutionExplanation: "For this page, you just have to realize that the picture is just a simplified version of MONOPOLY, where the filled in colors are copied from a normal Monopoly board, but enough information is removed that it hopefully isn’t immediately obvious. "
  },
  30: {
    hints: [
      "Each circle has a number and a letter associated with it",
      "The position 'A' means position 4",
      "Once you know the position, what is the number across that is connected to it?"
    ],
    solution: "3516",
    solutionExplanation: "In this puzzle, the left column of the table will tell you the position of the number, and the thing it connects to will give you the actual value. For position “A”, we see that the line connects to the “4”, so it is in the 4th position. If we follow the line across to the other circle, it connects to the “6”. Therefore, the number 6 is in the 4th position, so the code will be _ _ _ 6. If we do this with the other positions in the table, we get the solution 3516."
  },
  31: {
    hints: [
      "Can you slide the blocks so a single conencted line goes from top to bottom?",
      "Once the black lines are aligned, read the letters from top to bottom",
      "There will be six numbers that are spelled out when the blocks are aligned correctly"
    ],
    solution: "253841",
    solutionExplanation: "In this puzzle, we need to follow the clue “Slide and align to complete the line”. We need to imagine sliding all of the tiles so that the black line that we see on each tile creates a complete connection from top to bottom. It may also help to just redraw the tiles so they are aligned, but it is important that the letters and black line are the same as the originals. Once they are aligned, they form words looking from top to bottom. It forms the words “TWO”, “FIVE”, “THREE”, “EIGHT”, “FOUR”, and “ONE” to get the answer 253841. There are a couple letters that aren’t used in forming these words. In this puzzle, it is important that the spacing is very accurate so that it forms words correctly when you slide and align them."
  },
  32: {
    hints: [
      "What materials shown will be affected by magnets?",
      "Remove the materials that are metal, since they will be drawn towards the magnets",
      "What is left behind after the metals are removed?"
    ],
    solution: "427",
    solutionExplanation: "On this page, we see different types of materials in the center surrounded by magnets. We have to think about which materials will be attracted to the magnets, which will be copper, lead, iron, zinc, and tin. The ones that will not be attracted (they will stay in place) are sand, sugar, salt, pepper, and plastic. If we imagine removing all of the metal elements that are attracted to the magnets, we are left with 427 in the center."
  },
  33: {
    hints: [
      "There are the same amount of numbers in the sequence as there are letters",
      "Split the letters into groups of 4",
      "The sequence '4132', which keeps repeating, will be used with each group of 4 letters",
      "The sequence '4132' refers to the position the letters should be in each group of 4",
      "The first group of letters, 'EPGA', rearranges to 'PAGE'",
      "The rearranged sentence is 'PAGE ELEVEN ANSWER WITH FOUR ALSO'. Can you add up the number solutions from previously solved puzzles?"
    ],
    solution: "6558",
    solutionExplanation: "For this puzzle, the top sequence indicates how to rearrange the letters below it. It uses groups of four with the repeating sequence “4132”. So, you would start with the first four letters, “EPGA”, then put the “E” in the 4th position, “P” in the 1st position, “G” in the 3rd position, and “A” in the 2nd position. We get “PAGE” from this first group. We do this for each group of four in the rest of the letter sequence, spelling out “PAGE ELEVEN ANSWER WITH FOUR ALSO”, which means we take the answer on page eleven, 6029, and add page four’s answer, which is 529. The whole thing becomes 6558."
  },
  34: {
    hints: [
      "Each chunk of letters refers to a direction on the compass",
      "What letter is associated with each direction?",
      "Get a letter from each direction to spell out four numbers"
    ],
    solution: "5912",
    solutionExplanation: "This puzzle requires becoming more familiar with directions on a compass. For example, “WNW” refers to the point between West and Northwest or “West of Northwest”, while “NNW” refers to the point between North and Northwest, or “North of Northwest”. Other directions are interpreted normally such as “N” for North or “SE” for Southeast. If we interpret all of these directions given and take the letters that appear at the end of the point, we spell out “FIVE”, “NINE”, “ONE”, “TWO”, so the answer is 5912."
  },
  35: {
    hints: [
      "'34' can be interpreted as '3' and '4' separately",
      "What colors are associated with '3' and '4'? Where do you see those colors on the right?",
      "For each line of numbers (i.e. '34 ->'), focus on just the two associated colors in the picture",
      "The orange and purple lines and circle look like a number when seen together"
    ],
    solution: "74068",
    solutionExplanation: "For this puzzle, you will be focusing on specific colors and ignoring other colors based on the given clue. Each color is assigned a number, and below that, we see pairs of numbers. “34” represents orange and green, since “3” is assigned to orange and “4” is assigned to green. If we only focus on the orange and green lines on the abstract picture, we see that it forms as “7”. If we do this with the other combinations of colors, we get the complete code 74068."
  },
  36: {
    hints: [
      "There is pattern and a shape that is part of each symbol",
      "There are two places that a pattern / shape pair will intersect",
      "Each symbol (pattern / shape), will give two letters where they intersect",
      "The first letter in the pair is in the top right grid, and the second is in the bottom left grid"
    ],
    solution: "Archived",
    solutionExplanation: "Find the zones in the grid that match each symbol (which will have a pattern, and a shape). For the first symbol, the shape is a square, and the pattern is zig-zags. These intersect at two places in the letter grids: the 'A' and the 'R', which means these are the first two letters. For the other symbols, the pairs where the features intersect are 'C' 'H' for the second, 'I' 'V' for the third, and 'E' 'S' for the last. This spells out the final answer, ARCHIVES."
  },
  37: {
    hints: [
      "Pay attention to pages 27, 29, 31, 33, 35, 37, and 39",
      "There should be colored dots on each of those pages",
      "The colored dots change positions on each page",
      "Trace out how each colored dot moves, starting from page 27 and continuing upward"
    ],
    solution: "5296",
    solutionExplanation: "This page relates the colored dots from pages 27, 29, 31, 33, 35, 37, and 39. To solve it, we have to start from page 27 and work our way up from there. To simplify the solution, we can just focus on the red dot for now. It starts at an arbitrary position that we can mark on page 27. When we flip to page 29, we see that the red dot has moved to the left in relation to where it previously was. When we flip to page 31, the red dot has moved down. Then it moves right on page 33, down on page 37, and finally left on page 39. In total, it moves left, down, right, down, left. If we trace that out to scale, we see that we have traced out a “5”, so that is the first number in the solution. We do the same thing with the blue, green, and purple dots to get the solution 5296."
  },
  38: {
    hints: [
      "The letter / number pairs each refer to a section of the grid with a specific shape",
      "You will need to physically draw out these paths from the grid. Pay attention to the direction of the arrows",
      "Each line will form a letter when fully drawn out. Make sure you keep the scale of the paths from the grid"
    ],
    solution: "Gold",
    solutionExplanation: "This puzzle tells you how to trace out numbers using the coordinates in the grid. For example, the line “A2-A2-C3-C4” tells you to draw a downward stroke, another downward stroke, a quarter circle up and to the right, and finally another quarter circle up and to the left. This should draw out the letter “D”. If you do this for all four lines, you get the word GOLD. "
  },
  39: {
    hints: [
      "This is a triple venn diagram, where each circle has a property, and the very center has all three",
      "One category relates to number of letters, one relates to number of vowels, and one relates to number of syllables",
      "How many letters are in the words from sections 3, 5, 6, and 7?",
      "How many vowels are in the words from sections 2, 4, 5, and 7?",
      "How many syllables are in the words from sections 1, 4, 6, and 7?",
      "The word 'cold' is in section 0, which means it doesn't fit into any of the categories",
      "Categorize all of the other words into one of the numbered categories"
    ],
    solution: "71406",
    solutionExplanation: "In this puzzle, we see a triple venn diagram. To solve it, you must figure out the rule for each circle of the diagram based on the example words that are already provided. Then, you have to categorize the words below, and use the section number that each one appears in as the answer. The section labeled “1” is the rule “Has 2 syllables”. The section labeled “2” is the rule, “Has 2 vowels”. The section labeled “3” is the rule “Has 5 letters”. The sections in the middle work like a normal venn diagram like this, where the center corresponds to words that share all three properties, and “COLD” is outside of the whole thing because it doesn’t have any of the properties. When you categorize the other words (“sonar”, “trainer”, etc.) you get the solution 71406, which is the numbered category that each word is placed in."
  },
  40: {
    hints: [
      "Reference solutions from pages 16, 9, 6, and 27",
      "Note the number of tick marks near certain letters in the diagram",
      "Follow the sequence of ticks from 1-6 to select letters in order"
    ],
    solution: "Finale",
    solutionExplanation: "This puzzle requires referencing solutions from pages 16, 9, 6, and 27. When you fill in those solutions- INFECTIOUS, PLANET, SLAB, and DIAGNOSE- you can then start to take individual letters. Start with the circle that has one tick on the left, which is “F”, then the one with two ticks, which is “I”, and so on. This will give you the solution to the final page, which is FINALE."
  }
};

export default hintData;