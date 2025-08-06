let all_quiz = [
    {
      id: 1,
      type: "Java",
      questions: [
        {
          question: "Which of the following is not a Java feature?",
          options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
          answer: "Use of pointers",
        },
        {
          question: "Which keyword is used to inherit a class in Java?",
          options: ["implement", "extends", "inherits", "super"],
          answer: "extends",
        },
        {
          question: "Which of these is a wrapper class in Java?",
          options: ["int", "Integer", "float", "double"],
          answer: "Integer",
        },
        {
          question: "Which method is the entry point of a Java program?",
          options: ["start()", "main()", "run()", "init()"],
          answer: "main()",
        },
        {
          question: "Which of these is not a Java access modifier?",
          options: ["public", "private", "protected", "package"],
          answer: "package",
        },
        {
          question: "Which keyword is used to stop inheritance of a class?",
          options: ["final", "static", "const", "super"],
          answer: "final",
        },
        {
          question: "Which collection class allows key-value pairs?",
          options: ["ArrayList", "HashMap", "Vector", "Stack"],
          answer: "HashMap",
        },
        {
          question: "What is JVM short for?",
          options: [
            "Java Variable Machine",
            "Java Virtual Machine",
            "Java Verified Machine",
            "Java Visual Machine",
          ],
          answer: "Java Virtual Machine",
        },
        {
          question: "Which package contains the Random class?",
          options: ["java.util", "java.lang", "java.io", "java.math"],
          answer: "java.util",
        },
        {
          question: "Which operator is used to allocate memory in Java?",
          options: ["alloc", "malloc", "new", "create"],
          answer: "new",
        },
      ],
    },
    {
      id: 2,
      type: "JavaScript",
      questions: [
        {
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
          answer: "Netscape",
        },
        {
          question: "Which symbol is used for single-line comments in JavaScript?",
          options: ["//", "/*", "#", "<!--"],
          answer: "//",
        },
        {
          question: "Which of the following is not a JavaScript data type?",
          options: ["String", "Number", "Boolean", "Character"],
          answer: "Character",
        },
        {
          question: "What keyword is used to declare a constant in JavaScript?",
          options: ["let", "var", "const", "static"],
          answer: "const",
        },
        {
          question: "Which method converts JSON to a JavaScript object?",
          options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.objectify()",
            "JSON.convert()",
          ],
          answer: "JSON.parse()",
        },
        {
          question: "Which operator is used to compare both value and type?",
          options: ["==", "===", "=", "!="],
          answer: "===",
        },
        {
          question: "Which function is used to print something in console?",
          options: ["print()", "echo()", "console.log()", "document.write()"],
          answer: "console.log()",
        },
        {
          question: "Which keyword is used to handle exceptions in JavaScript?",
          options: ["catch", "error", "exception", "try"],
          answer: "catch",
        },
        {
          question: "Which built-in method returns the length of a string?",
          options: ["length()", "size()", "count()", "len()"],
          answer: "length()",
        },
        {
          question: "JavaScript is ____ language?",
          options: ["compiled", "interpreted", "machine", "markup"],
          answer: "interpreted",
        },
      ],
    },
    {
      id: 3,
      type: "Python",
      questions: [
        {
          question: "Which is the correct file extension for Python files?",
          options: [".py", ".pyt", ".pt", ".python"],
          answer: ".py",
        },
        {
          question: "Which keyword is used to define a function in Python?",
          options: ["function", "define", "def", "fun"],
          answer: "def",
        },
        {
          question: "Which data type is immutable in Python?",
          options: ["List", "Set", "Dictionary", "Tuple"],
          answer: "Tuple",
        },
        {
          question: "What is the output of: type([])?",
          options: ["list", "tuple", "dict", "set"],
          answer: "list",
        },
        {
          question: "Which keyword is used to handle exceptions in Python?",
          options: ["try", "catch", "exception", "throw"],
          answer: "try",
        },
        {
          question: "Which of the following is used to install packages?",
          options: ["install", "import", "pip", "load"],
          answer: "pip",
        },
        {
          question: "Which function is used to display output in Python?",
          options: ["echo()", "print()", "console()", "display()"],
          answer: "print()",
        },
        {
          question: "Which keyword is used to create a class in Python?",
          options: ["class", "Class", "define", "object"],
          answer: "class",
        },
        {
          question: "Which operator is used for exponentiation?",
          options: ["^", "**", "//", "%%"],
          answer: "**",
        },
        {
          question: "Which keyword is used to exit a loop?",
          options: ["stop", "exit", "break", "end"],
          answer: "break",
        },
      ],
    },
    {
      id: 4,
      type: "MySQL",
      questions: [
        {
          question: "Which SQL statement is used to extract data?",
          options: ["GET", "EXTRACT", "SELECT", "OPEN"],
          answer: "SELECT",
        },
        {
          question: "Which command is used to create a database?",
          options: ["CREATE DATABASE", "NEW DB", "MAKE DATABASE", "INIT DB"],
          answer: "CREATE DATABASE",
        },
        {
          question: "Which command is used to delete a table?",
          options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
          answer: "DROP TABLE",
        },
        {
          question: "Which statement is used to update data?",
          options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
          answer: "UPDATE",
        },
        {
          question: "Which SQL clause is used to filter results?",
          options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
          answer: "WHERE",
        },
        {
          question: "Which keyword sorts the result-set?",
          options: ["SORT", "ORDER", "ORDER BY", "ARRANGE"],
          answer: "ORDER BY",
        },
        {
          question: "Which SQL function is used to count rows?",
          options: ["SUM()", "COUNT()", "ROWS()", "TOTAL()"],
          answer: "COUNT()",
        },
        {
          question: "Which statement is used to remove all rows from a table?",
          options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
          answer: "TRUNCATE",
        },
        {
          question: "Which statement is used to join tables?",
          options: ["COMBINE", "JOIN", "MERGE", "ATTACH"],
          answer: "JOIN",
        },
        {
          question: "Which operator is used for pattern matching?",
          options: ["LIKE", "MATCH", "SEARCH", "FIND"],
          answer: "LIKE",
        },
      ],
    },
    {
      id: 5,
      type: "PostgreSQL",
      questions: [
        {
          question: "Which command lists all databases?",
          options: ["SHOW DATABASES;", "\\l", "LIST DATABASES;", "DATABASES;"],
          answer: "\\l",
        },
        {
          question: "PostgreSQL supports which data type?",
          options: ["JSON", "XML", "Key-Value", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "Which keyword adds a new row?",
          options: ["ADD", "INSERT", "UPDATE", "CREATE"],
          answer: "INSERT",
        },
        {
          question: "Which command removes a database?",
          options: ["DELETE DATABASE", "REMOVE DATABASE", "DROP DATABASE", "CLEAR DB"],
          answer: "DROP DATABASE",
        },
        {
          question: "Which command changes table structure?",
          options: ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "UPDATE TABLE"],
          answer: "ALTER TABLE",
        },
        {
          question: "Which keyword enforces uniqueness?",
          options: ["PRIMARY KEY", "UNIQUE", "INDEX", "DISTINCT"],
          answer: "UNIQUE",
        },
        {
          question: "Which command is used to exit psql?",
          options: ["quit", "exit", "\\q", "close"],
          answer: "\\q",
        },
        {
          question: "Which type of replication does PostgreSQL support?",
          options: ["Streaming", "Logical", "Physical", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "Which is the default port of PostgreSQL?",
          options: ["3306", "1521", "5432", "8080"],
          answer: "5432",
        },
        {
          question: "Which command shows current user?",
          options: ["SHOW USER", "SELECT USER;", "CURRENT_USER", "\\u"],
          answer: "CURRENT_USER",
        },
      ],
    },
    {
      id: 6,
      type: "React",
      questions: [
        {
          question: "Which command creates a new React app?",
          options: [
            "npx create-react-app app",
            "npm init react-app app",
            "npm create app",
            "npx new-react-app app",
          ],
          answer: "npx create-react-app app",
        },
        {
          question: "What is the default port for React?",
          options: ["3000", "8080", "5000", "4000"],
          answer: "3000",
        },
        {
          question: "Which hook is used for state in React?",
          options: ["useEffect", "useState", "useReducer", "useRef"],
          answer: "useState",
        },
        {
          question: "Which hook is used for side effects?",
          options: ["useContext", "useState", "useEffect", "useMemo"],
          answer: "useEffect",
        },
        {
          question: "React is mainly used for?",
          options: ["Database", "Styling", "Building UI", "Server"],
          answer: "Building UI",
        },
        {
          question: "Which is the correct way to pass data to child component?",
          options: ["state", "props", "emit", "bind"],
          answer: "props",
        },
        {
          question: "Which keyword creates a React component?",
          options: ["function", "class", "both", "object"],
          answer: "both",
        },
        {
          question: "What is JSX?",
          options: [
            "JavaScript Syntax Extension",
            "Java Syntax Extension",
            "JSON Extension",
            "None",
          ],
          answer: "JavaScript Syntax Extension",
        },
        {
          question: "Which method is used to update state in class components?",
          options: ["this.update()", "this.change()", "this.setState()", "this.state()"],
          answer: "this.setState()",
        },
        {
          question: "Which library is used for routing in React?",
          options: ["React Router", "Redux", "Axios", "Next.js"],
          answer: "React Router",
        },
      ],
    },
  ];
  
  export default all_quiz;
  