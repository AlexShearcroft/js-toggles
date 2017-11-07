## Simple Javascript toggle functions using Prototypes

Was looking for a quick and reusable function process using prototypes to use the toggle method with data attributes. Simply add the data attribute 'data-toggle' to the element which will be used as the event trigger. On the element you wish to be toggled add the id value of "js-" plus the value defined on the trigger event attribute.

##### Example of usage
```
<button data-toggle="example" class="js-toggle">Toggle this</button>
<div id="js-example">Hello World</div>
```

**Please note that jQuery needs to be running for this to work correctly.**

[Working example](https://jsbin.com/tawaselehu/2/edit?html,js,output)
