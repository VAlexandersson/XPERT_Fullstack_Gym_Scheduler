# Xpert Gym Web-app

### What can be broken down into modules?

### What will speak with what?

### Should we use a CRUD backend API?

---
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
    E["Authentication"]
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

```mermaid
%%{init: {'theme':'dark'}}%%
erDiagram 

    EXERCISE ||--o{ USER_EXERCISE : is
    WORKOUT ||--|{ USER_EXERCISE : contains
    USER }o--o{ WORKOUT : uses    

    USER {
        id int
        username string
        password string
        role_id int
        workout_collection json
    }
    WORKOUT {
       id int
       name string
       user_id int
    }
    EXERCISE {
        id int
        name string
        description string
        sets int
        reps int
        intervalles int
    }
    USER_EXERCISE {
       id int
       exercise_id int
       workout_id int
       position int
    }

```


---

This project was created by the following people:

- Gabriel Bülow
- Isak Ekman
- Martin Karlsson
- Mohammad Faisal Issaqi
- Viktor Alexandersson

