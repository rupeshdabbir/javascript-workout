## Middeware, you made me crazy!!!

### First step, reduce the requirements.
Image that the middeware instance has a middewares array
as its property.  
Everytime we call `use(fn)`, it will **push** that function
into middeware's array property.  
Fair enought? Now when we `call()` of a middleware instance,
it will interate through the list and call each function of
the middleware array with context.
```
fn.call(this, args);
```

### Second, think about `next()` function
<Coming soon>
