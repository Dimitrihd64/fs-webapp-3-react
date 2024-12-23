export default function (plop) {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is this component's name?",
            },
            {
                type: "input",
                name: "element",
                message: "HTML element (div is default)",
                default: "div",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
                templateFile: "templates/Component.jsx.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/styles.js",
                templateFile: "templates/styles.js.hbs",
            },
        ],
    });
}