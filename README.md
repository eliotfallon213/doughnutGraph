# doughnutGraph

##Three different avenues

###First iteration - used ChartJS. 
- Quick to get set up.
- Added extras out of the box, animations, etc.
- Combined code base with bar charts, line charts, etc.

###Second iteration - wrote my own function
- Much lower overhead in terms of code to be loaded
- Doesn't have as many variables which can be used.
- Allows better control over appearence if there is the technical skills.

###Third iteration - implemented BEM
- Not had a green field opportunity to trial BEM methodology since hearing about it.
- Previously stuck to a SMACSS style approach with less restriction on class names.
- My apprehension is it requires quite long class names and a greater amount of mark up so I wanted to experiment for myself and see how it can be applied within SASS.
- No real difference in terms of page weight, which surprised me.
- Easy to use with SASS if a little cumbersome to product the markup for.

##Why trial with and without a plugin?
- Unsure of the context with which the code would be used.
- In a larger site where lots of different types of graphs would used with wildly different stylings it would be more efficient to use a plugin. It means you don't have to spend time constructing the code for each and spend time maintaining it.
- In a project with a very tight turnaround it also allows you to construct graphs quickly.
- Producing your own code allows you to have greater control over the appearence of the graphs.
- Producing your own can also reduce code overhead when the breadth of what you require is quite narrow (i.e. If the site this code was being used in only had this type of graph in this style.) There's a few other options which can be added in without much fuss, but for the most part it's closed in what it offers.
- Page weight with and without the plugin differs from ~12kb to ~8kb so there's a substantial saving in terms of percentage of page weight, which would also be beneficial for high traffic applications, but for other low traffic sites 4kb won't make a huge difference if it is the only plugin being used, large numbers of plugins can add up though. 

