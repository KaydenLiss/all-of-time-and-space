# All of Time and Space

Travel Blog built with Hugo

## Setup

1. Make sure you have git and hugo installed
2. In your console, navigate to the folder in which you want the project
3. clone the project
4. run the project locally using ```hugo serve```

The website should now be running under http://localhost:1313/.

## Create a new post

1. Navigate to the project via command line (Eingabeaufforderung) using cd
2. Make sure your repository is up to date by running ```git pull```
3. If project is not running, run ```hugo.exe serve```
4. Create the post with ```hugo.exe new posts/NAME-OF-POST/_index.md```
5. Adjust meta-data as needed, add
    * author
    * description (for preview on front page)
    * categories (= country)
6. Add an image named preview.jpg (other endings also possible)
6. Write your text
7. Set draft to false
8. Check your changes under http://localhost:1313/
9. Build the project by running ```hugo.exe``` on the command line
10. Add your changes to git using ```git add *```
11. Commit your changes using ```git commit -m "YOUR COMMIT MESSAGE"``` (Commit message can be something like "added new article" or "changed about page")
12. Push your changes using ```git push```
