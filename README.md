# NgTodo

## Dependencies:
- node version 18.20.4
- xcode
- android studio

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running mobile applications

This system uses [capacitorjs](https://capacitorjs.com/) for the mobile layer. To run the mobile applications:

```
$ npm i
$ npm run build
$ npx cap sync
$ # To run iOS
$ npx cap run ios
$ # To run Android 
$ npx cap run android
```

# Challenge

Your challenge, should you choose to accept it, is to take this wonderfully robust web application, and progressively enhance it in order to optimize the mobile experience.

- [x] on iOS, ensure the header rests below the notch
- [x] ensure there is no zoom when interacting with fields
- [x] organize the different lists so that in a mobile form factor they appear one above the other (responsive or adaptive approach)
- [x] add a tap gesture to the **row** in order to toggle the todo
- [x] add long press gesture or a slide gesture to the rows in order to prompt the user to delete a given task
- [x] when creating a todo for a given section, allow the user to add a photo from the device library
- [x] add a button to the top right in the header to create a new todo list. Use a modal interface to achieve this

# Note
- will be testaing against iPhone 15 simulator
