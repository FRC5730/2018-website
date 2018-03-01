# FRC 5730 website repository

Travis CI Status:

![alt text](https://travis-ci.org/FRC5730/2018-website.svg?branch=master "Build Status")

## Information

Our website uses a heavily customized derivative of Rick Kim's Agency [theme](https://github.com/y7kim/agency-jekyll-theme) and [Jekyll](http://jekyllrb.com/). Travis CI performs automated builds with Jekyll and uploads the newly generated content to the website.

## Student Customizations

### Site Settings

The following settings are available at the beginning of the `_config.yaml`.

``` yaml
title:
email:
phone:
address:
description:
```

### Sponsors

Sponsors are managed in the `sponsors:` section of the `_config.yaml`.

``` yaml
- name: Sponsor/Business Name
  alt: Image alt info # Used by screen readers and text browsers
  link: https://www.domain.tld # Full URL for sponsor's website
  logo: logo.png # Image name. Images are located in ./img/logos/
```

### Sponsorship Levels

Sponsorship levels are managed in the `levels:` section of the `_config.yaml`.

``` yaml
- name: Level Name # Bronze, Silver, Partner, Supporter, etc.
  amount: $ Any # Dollar or material amount
  items: # Array of items listed on the level
    - title: Something Cool
    - title: Something else cooler
    - title: ... # Continue adding additional titles as needed.
```

### History Timeline

Timeline items are managed in the `timeline:` section of the `_config.yaml`.

``` yaml
- date: MM/DD/YYYY # Date of the event
  header: "Title of event" # Short Title/header for timeline entry.
  details: "Detailed description of event" # Long description. HTML tags are acceptable. Make sure to use double quotes to prevent errors with character escaping/ HTML tags.
  stats: # Statistics array
    - stat: "Record"
      val: "#-#" # Win/Loss/Tie record for the event
    - stat: "Rank"
      val: "##" # Final rank
    - stat: "Av. Score"
      val: "###" # Average score from all matches played
    - stat: "Awards"
      val: "Awesomest Robot" # Awards and brags
  class: # Leave blank to place an item on the left side. specify 'timeline-inverted' to place item on the right
  image: myawesomephoto.jpg # Name of photo for timeline bubble. shrink size to ~480px and crop to square. Place photo in /img/history/
```

### Social Media

Social media accounts are managed in the `social:` section of the `_config.yaml`.

``` yaml
# Social networks usernames (many more available: google-plus, flickr, dribbble, pinterest, instagram, tumblr, linkedin, etc.)
social:
  - title: twitter
    url: https://twitter.com/thefrcpros
    # Add additional title/url pairs for additional social media networks
```

## Robots

Robot pages are managed as Jekyll posts located in the `/posts/` folder using the following format:

``` yaml
---
title: YYYY # Competition year
subtitle: "Robot Name"
layout: default
modal-id: 1 # ID should be unique and sequential.
img: robot.jpg # This will eventually change to a photo album of some sort.
thumbnail: robot_thumb.jpg # resize to 490x375 to maintain formatting
alt: image-alt
event-date: Month, YYYY
event: Event Name
event_url: https://www.thebluealliance.com/event/xxxxxxx
description: "Long description"
---
```

## Demographic Information

The demographics are currently statically assigned in the `/js/agency.js` file.

Gender counts are on line 46:

``` javascript
// Change ## to the appropriate values
var data = google.visualization.arrayToDataTable([
['Gender', 'Count', { role: 'style' }, { role: 'annotation' }],
['Female', ##, 'color: #E93F33', '##'],
['Male', ##, 'color: #E93F33', '##']
]);
```

Grade counts are on line 61:

``` javascript
// Change ## to the appropriate values
var data = google.visualization.arrayToDataTable([
['Grade', 'Count', { role: 'style' }, { role: 'annotation' }],
['Freshman', ##, 'color: #E93F33', '##'],
['Sophomore', ##, 'color: #E93F33', '##'],
['Junior', ##, 'color: #E93F33', '##'],
['Senior', ##, 'color: #E93F33', '##']
]);
```