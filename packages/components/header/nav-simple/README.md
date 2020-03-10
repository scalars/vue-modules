# @vuemodules/navsimple

#### Usage
```
//js
links: [
           {name: "mylink.com", url: "mylink.com", isActive: true}, //Active element to be underlined
           {name: "mylink1.com", id: "#test1"}, //Will scroll to #test1
           {name: "mylink2.com", id: "#test2"},
           {name: "otherlink.net", url: "otherlink.net", target: "_blank"}, //Allows to set the target attribute for <a>
           {name: "otherlink1.net", url: "otherlink1.net"}
       ]

//template
<nav-simple :links="links"/>
```
Demo https://vuemodules.scalars.co/?path=/story/nav-nav-simple--default

