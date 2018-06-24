 
#Electronic Color Calculator

###Definition

The electronic color code is used to indicate the values or ratings of electronic components, very commonly for resistors.
    
###Description
[here](http://en.wikipedia.org/wiki/Electronic_color_code) is some of the best details.

###Demon
[demo]()

####Requirements
Write a class that implements the following interface. Feel free to include any supporting types as necessary.

public interface IOhmValueCalculator
{
   /// <summary>
   /// 					.
   /// </summary>
   /// <param name="bandAColor">The color of the first figure of component value band.</param>
   /// <param name="bandBColor">The color of the second significant figure band.</param>
   /// <param name="bandCColor">The color of the decimal multiplier band.</param>
   /// <param name="bandDColor">The color of the tolerance value band.</param>
   int CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor);
}

2. Create an ASP.NET MVC or React JS web interface that will allow someone to use the calculator you created in step one.

3. Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to question one.

4. Submit your code by a public or private repository like github, gitlab or bitbucket.  Your repository should include instructions on how to set up, compile & run your application.  You can assume your instructions will be read by a developer.

5.  We will look at your GUI, so it’s important we are able to compile and run your application.

####Info

 Be aware that the application is set to black color for BAnd A and B in order to start ohm val by 0.
 
 ####Tech
 
1-This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
2- for Unit test I used [jest](https://github.com/jsdom/jsdom) and [Enzyme](https://github.com/airbnb/enzyme) 
