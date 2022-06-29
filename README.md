###  Module 11: Javascript, Bootstrap, and UFOs


![Website Landing Page](https://user-images.githubusercontent.com/102566199/176564568-119d0b6b-b377-47cd-b0f2-cd6708213d0f.png)


## Overview: 

*Background* 

Dana, a data journalist, has the freedom to write about her hometown in Oregon. She decides her topic will be UFOs and she will use Javascipt to display the data in a cool and interactive dashboard by using HTML, CSS, and Bootstrap.

Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, table filters for the city, state, country, and shape will be added to increase the interactivity of the dashboard.

*Purpose* 

Making a website more interactive makes it easier for users to engage with the content being presented. In this assignment, the data set is very large so increasing the amount of categories that the users can search within wil make is easier to navigate the data. 

## Results

*How to Perform a Search* 

When a user navigates to the page, they should be able to scroll down and see the raw, unfiltered data in the table on the right. If the user would like to search for UFO sightings based on one of the specific parameters, then they can type in the Date, City, State, Country, or Shape into the Filter Search. 

![Table with Filter Search](https://user-images.githubusercontent.com/102566199/176560955-8e912672-1835-4b1b-963c-27cb00eb92d9.png)


Below is an example search of any UFO sightings for 01/05/2010. There are 7 results that come up from this search. 

![Example Date Search](https://user-images.githubusercontent.com/102566199/176562107-2eb0ab45-3120-43ba-a720-8e21b460d5ec.png)

If the user would like to search a different set of parameters, they can reset the Filter Search by scrolling up and clicking the "UFO Sightings" heading. This will clear the results of the last search completely and will repopulate the table with the full data set. 

![Resetting the Filter Search Options](https://user-images.githubusercontent.com/102566199/176562536-1f11d3e8-d255-4dfa-ab78-fee51c3055c8.png)

Since the dataset is small, there are only so many sightings in the table to search within, so I find it helpful to search one of the other parameters. Shape and State are two filters that can also be used to search the sightings data. 

![Sightings in CA that were triangles](https://user-images.githubusercontent.com/102566199/176562767-94ea027d-f00b-46cf-b904-86b2678798ef.png)

The Filter Search will only return results if the user uses the correct formatting of the data, such as lowercase and the date form of M/D/YYYY. 

## Summary

*Webpage Drawbacks*

When I tried to use the Filter Search to test how well it would work for potential users, I realized that you have to scroll through the data set to see what you can search by. You have to know how to format the search terms in the filter bars or the data will not be manipulated to display what is being searched for. It's a small data set, so it's possible to scroll through it fairly fast to determine what can be searched for, but if it was going to contain more data then it would need to be updated with better functions.

Also when searching for specific sightings, it's unclear how to make it filter the data. The Enter button must be pressed to make the search populate, but that is not exactly intuitive for everyone. Another drawback is that resetting the data requires the user to understand that the UFO Sighting header at the top needs to be pressed to reset the table data. 

*Additional Development Recommendations*

This webpage has a great potential and could easily be upgraded to be used for larger projects that will have a more diverse audience. Adding a Search button to make the Filter Search begin would make it easier for users to use this function. Adding a reset button to the Filter Search would make it more user friendly because they wouldn't have to scroll up to the top of the page and figure out that the UFO Sighting header has this function. 

It might be a bit more work, but making the Filter Search have a dropdown menu of possible search terms could fix the issue of users needing to input their search parameters in a specific case or format. Either a dropdown menu or a lessened case sensitivity would greatly increase the functionality of the search bar. 

This page has a great functionality, but it would need a lot more content to be engaging. The page could have additional resources for reporting a sighting, an images and videos section, and more information on how to get more involved in the community. For now, the page is doing the bare minimum of what it needs to. 
