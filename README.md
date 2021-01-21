# _Pig Latin Translator_

#### _A web-based application to translate English into Pig Latin._

#### By _**Jessica R. Williams and Chloe Loveall**_

## Technologies Used

* _JavaScript_

## Description

_This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have._

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command $ git clone https://github.com/jessicarubinwilliams/pig-latin-translator_
* _Navigate to the top level of the repository with the command $ cd pig-latin-translator_
* _Open index.html in the browser of your choice with the command $ open index.html_.

## Specs

Behavior, Our program should handle:
Input Example, When it receives:
Output Example, It should return:

Behavior, Our program should handle: Words that begin with a vowel
Input Example, When it receives: Ice
Output Example, It should return: Iceway

Behavior, Our program should handle: Words that begin with one consonant
Input Example, When it receives: Cup
Output Example, It should return: Upcay

Behavior, Our program should handle: Words that begin with two consonants
Input Example, When it receives: Tree
Output Example, It should return: Eetray

Behavior, Our program should handle: Words that begin with three or more consonants 
Input Example, When it receives: Scrape
Output Example, It should return: Apescray

Behavior, Our program should handle: Words that begin "qu"
Input Example, When it receives: Quarry
Output Example, It should return: Arryquay

Behavior, Our program should handle: Words that begin with a string of consecutive consonants in which the last consecutive consecutive consonant is a "q" and that "q" is followed by a "u"
Input Example, When it receives: Squeal
Output Example, It should return: Ealsquay

Behavior, Our program should handle: Words that begin with "Y"
Input Example, When it receives: Yellow
Output Example, It should return: Ellowyay

## Tests 

Describe: pigLatin()
Test: "It adds 'way' to the end of words that begin with a vowel"
Expect(pigLatin(Ice)).toEqual(Iceway);

<!-- Test: "It moves the first consonant to the end of word for words that begin with a single consonant"  -->

## Known Bugs

* _This application is still being developed_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Chloe Loveall and Jessica R Williams_**
## Contact Information
**_Jessica R Williams (mailto:jessicarubinwilliams@gmail.com) Chloe Loveall (mailto:5696284+chloeloveall@users.noreply.github.com)_**
