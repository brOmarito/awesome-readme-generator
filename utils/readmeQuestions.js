module.exports = [
    {
        type: 'input',
        message: 'What is the title of your repo?',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Please type a description of the application:',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Please provide instructions on how to install the application:',
        name: 'installation-instructions',
    },
    {
        type: 'editor',
        message: 'Please provide any usage information for the application/repo:',
        name: 'usage-information',
    },
    {
        type: 'list',
        choices: ["Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        "Attribution 4.0 International",
        "Eclipse Public License 1.0",
        "The Hippocratic License 3.0",
        "The MIT License",
        "Mozilla Public License 2.0",
        "None"],
        name: "license"
    },
    {
        type: 'editor',
        message: 'Please outline any contribution guidelines for the repo:',
        name: 'contribution-guidelines',
    },
    {
        type: 'editor',
        message: 'Please provide any instructions on testing the application:',
        name: 'testing-instructions',
    },
    {
        type: 'editor',
        message: 'Please provide information on how and where to contact you if there are any questions:',
        name: 'questions',
    },
    // {
    //     type: 'input',
    //     message: 'Please provide the filepath for the generated Readme file, or leave this blank for the default location.',
    //     name: 'filepath'
    // }
]