# Angry Purple Tiger - TypeScript
This is a fork of [Angry Purple Tiger] (https://github.com/helium/angry-purple-tiger) rewritten in TypeScript to allow for easy integration into TypeScript projects. Angry Purple Tiger generates animal-based hash digests meant to be memorable and human-readable. Angry Purple Tiger is apt for anthropomorphizing project names, crypto addresses, UUIDs, or any complex string of characters that needs to be displayed in a user interface.

## Example

```js
import animalHash from 'angry-purple-tiger';

const digest = animalHash('my ugly input string');
console.log(digest);
//=> rapid grey rattlesnake
```

## License
Apache 2.0 © 2018 Helium Systems, Inc.
