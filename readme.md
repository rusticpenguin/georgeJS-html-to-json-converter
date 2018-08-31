![georgeJS Logo](#)
___
# georgeJS: HTML-To-JSON Converter
___

![Gif of Converter](#)

### (Currently adding) Features:
*  Converts HTML To JSON in a way georgeJS router can read
*  Intelligently tell when nested elements exist
*  Copy and paste JSON code straight into your code editor

### Live Demo:
Live demo soon

### How does the formatted HTML look?
Unformatted
```
<div id="userSelect" class="red">
    <span>
        Select Your User
    </span>
</div>
<p class="grey"> By selecting a user you agree to the "terms of service" </p>
```
Formatted (JSON)
```
{
    "component": [
        {
            "element": "div",
            "id": "userSelect",
            "class": [red],
            "content": "<span> Select Your User </span>
        },
        {
            "element": "p",
            "class": [grey],
            "content": "By selecting a user you agree to the \"terms of service\""
        }
    ]
}
```
