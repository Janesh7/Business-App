# Business App


- Create a folder with the required name
- cd name
- code .

## Create react app using vite

We are using a vite (a tool came recently for faster react applications)
- Create an app using vite
```
 npm create vite@latest
```

- give project name
- choose react framework

```
npm install
```


- To run
```
npm run dev
``` 



Vite has better minimal default file structure



## Install Tailwind using npm

```
npm install -D tailwindcss postcss autoprefixer
```

and then

```
npx tailwindcss init -p
```
This create the config files for tcss


#### To add the tailwoind config

The file is tailwind.config.cjs




Add the styles which u want to use in the entire project like  colors, fonts, screensizes etc.




## File Structure


- Creating a constant foler and having all text constants used in website on it so a non tech guy can also change the text whenever they want. Also helps if we use CMS.


- styles.js in src folder to provide basic styles like for heading paragraph flexCenter paddings,etc.
TO USE these in programs :

```
<div classname={`${styles.paddingX} ${styles.flexCenter}`}>
```
note: has backtick, also this takes 2 classes as mentioned



- index.js in components folder
- export all the components made resp
- import all in index.js and export all of these
```
export { 
    Navbar,
    Billiong,etc
}
```


## Coding and Tailwind


- Html 5 has a navbar syntax: <nav className=""></nav>



- Go to tailwind website for detailed explnation of all tailwind tags used, like w-full makes use of full width
- For width of iumage etc, className="w-{124px} h-{32px}"
