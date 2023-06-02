# Sequence
Sequence is a little library to help make handling keystroke sequences easier.

## How to use Sequence
All you need to do to make a Sequence is to make a `new Sequence` with an array of keys (based on event.key), and a callback function.

## Example
Here's a little example of <kbd>G</kbd> then <kbd>I</kbd>, which Linear uses to take you to your inbox:
```js
new Sequence(["g", "i"], event => {
  // Code goes here
})
```

### Killing a Sequence
You can easily kill a Sequence by calling it's `kill()` method.

## Credits
This library was made by [Aetinx](https://aetinx.lata.dev) for Latapals.

Licensed under [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/).

![CC BY-ND](https://licensebuttons.net/l/by-nd/4.0/88x31.png)
