# Angular Tutorial from [this rather well presented video](https://www.youtube.com/watch?v=_-CD_5YhJTA)

## Main Parts of each Angular Application:

## Components

## Routers

## Directives

## Services

### Component: Encapsulates the template, data, and behavior of a view (AKA View Component).

- Each application has at least a root component.
- In the real world, each section of a page mgiht have its own component. For example: navbar, sidebar components.
- Components can contain child components. For example, the course component can have a component for each course.
- Components are not limited to the Angular application they exist within. For example, the above mentioned course component can be used elsewhere. 
- A component is nothing but a plain, TypeScript class. Like all OOP classes, the commponent can have properties and data for the view. For example:

```TypeScript
export class RatingComponent{
    averageRating: number;
    setRating(value){
        //some code here
    }
}
```

- components are completely decoupled from the DOM.
- Instead of doing DOM manipulation, we bind to the properties and views of our component.
- By decoupling from the DOM, we can actually unit test in JavaScript.

### Services:

- sometimes, the component needs to talk to backend APIs to get or save data. To have good separations of concerns in the app, we delegate any logic that is not related to a view to a _service_.
- A _service_ is a plain class that encapsulates any non user interface logic; such as making HTTP calls, logging, business rules, ect. 

### Router: Responsible for navigation

- As a user navigates from one page to another, Angular will figure out based on URL what component to present to the user. 

### Directive: To modify DOM elements and/or extend their behavior.

- Unlike component, directive doesn't have HTML markup for view. Often, use them to add behavior to existing DOM elements.

```TypeScript
<input type = "text" autoGrow/>
```

- Angular has a bunch of directives for common tasks, such as adding or removing DOM elements, adding classes or styles to them, or repeating them.
- We can also create custom directives.
