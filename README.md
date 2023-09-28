# Xpert Gym Web-app


---

### Backend 

```bash
npm install express sqlite3 typescript cors @types/cors @types/node @types/express @types/node @types/


npm install -D concurrently nodemon
```

### Frontend

- init front end with
`npx create-react-app . --template typescript`



```bash
xpert-app/
│
├── frontend/                 # Frontend
│   ├── src/                  # source files
│   │   ├── components/       # react components
│   │   │   ├── calendar.tsx  # example comps..
│   │   │   └── catalog.tsx
│   │   ├── App.tsx           # main app component
│   │   └── index.tsx         # entry point
│   ├── public/               # static files
│   ├── package.json          # frontend deps.
│   └── tsconfig.json         # typeScript conf. 
│
├── backend/                  # Backend
│   ├── src/                  # source files
│   │   ├── controller/       # server actions
│   │   ├── db/               # db setup
│   │   ├── routes/           # api routes
│   │   ├── services/         # sql queries/returning obj.
│   │   ├── index.ts          # Entry point
│   ├── database.sqlite       # SQLite DB
│   ├── package.json          # Backend dep.
│   └── tsconfig.json         # TypeScript conf.
└── README.md 


```

```mermaid
%%{init: {'theme':'dark'}}%%
graph LR 
  subgraph Presentation_Layer["Presentation Layer"]
    A["Web Browser"]
    B["ReactJS (Frontend)"]
  end
  subgraph Business_Logic_Layer["Business Logic Layer"]
    C["NodeJS (Backend)"]
    D["ExpressJS (Server)"]
    E["Authentication (JSON Web Token)"]
    F["Authorization"]
  end
  subgraph Data_Access_Layer["Data Access Layer"]
    G["PostgreSQL (Database)"]
  end
  A --> B
  B --> C
  C --> D
  D --> E
  D --> F
  D --> G
```

---

<p>
<details>
<summary>Mermaid ER-diagram</summary>

These details <em>remain</em> <strong>hidden</strong> until expanded.

```mermaid
erDiagram 

    exercise_attribute }o--o{ exercise_type_attribute: has
    exercise_type }o--o{ exercise_type_attribute: has
    exercise ||--o{ user_exercise : is

    exercise }o--|| exercise_type: is
    USER }o--o{ workout : uses    
    USER ||--o{ PLANNED_WORKOUT: owns
    USER }o--|| ROLE : is
    ROLE }o--o{ AUTHORIZATION : has
    workout ||--o{ user_exercise: has
    user_exercise ||--o{ user_exercise_attribute: contains
    exercise_attribute ||--o{ user_exercise_attribute: is


    workout ||--o{ PLANNED_WORKOUT: is

    USER {
        id int
        username string
        password string
        role_id int
    }

    ROLE {
        id int
        name string
    }

    AUTHORIZATION {
        role_id int
        name string
    }

    PLANNED_WORKOUT {
        id int
        date date
    }

    workout {
        id int
        name string
        user_id id
    }
    user_exercise {
        id int
        sets int
        reps int
        intervalles int
    }
    exercise {
       id int
       name string
       description string
       exercise_type id
    }
    exercise_type {
        name string
        id int
    }
    exercise_type_attribute {
        exercise_type_id int
        attribute_id int
    }
    user_exercise_attribute {
        value int
        user_exercise_id int
        attribute id
    }
    exercise_attribute {
        name string
        id int
    }

```

---


```mermaid
erDiagram 
    workout ||--o{ user_exercise: has
    user_exercise ||--o{ user_exercise_attribute: contains
    exercise_attribute }o--o{ exercise_type_attribute: has
    exercise_attribute ||--o{ user_exercise_attribute: is
    exercise_type }o--o{ exercise_type_attribute: has
    exercise }o--|| exercise_type: is
    exercise ||--o{ user_exercise : is



    workout {
        id int
        name string
        user_id id
    }
    user_exercise {
        id int
        sets int
        reps int
        intervalles int
    }
    exercise {
       id int
       name string
       description string
       exercise_type id
    }
    exercise_type {
        name string
        id int
    }
    exercise_type_attribute {
        exercise_type_id int
        attribute_id int
    }
    user_exercise_attribute {
        value int
        user_exercise_id int
        attribute id
    }
    exercise_attribute {
        name string
        id int
    }


```
</details>
</p>


---

*This project was created by the following people:*
*- Gabriel Bülow*
*- Isak Ekman*
*- Martin Karlsson*
*- Mohammad Faisal Issaqi*
*- Viktor Alexandersson*
