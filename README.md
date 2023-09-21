# Xpert Gym Web-app

### What can be broken down into modules?

### What will speak with what?

### Should we use a CRUD backend API?

---

```mermaid
erDiagram

    EXERCISE ||--o{ USER_EXERCISE : is
    WORKOUT ||--|{ USER_EXERCISE : contains
    USER }o--o{ WORKOUT : uses    

    USER {
        id int PK 
        username string 
        password string
        role_id string FK
        workout_catalogue object 
    }
    WORKOUT {
       id int PK 
       name string
       user_id int FK 
    }
    EXERCISE {
        id int PK
        name string
        description string
        sets int
        reps int
        intervalles int
    }

    USER_EXERCISE {
       id int PK
       exercise_id int FK
       workout_id int FK 
    }

```



---

This project was created by the following people:

Gabriel Bülow
Isak Ekman
Martin Karlsson
Mohammad Faisal Issaqi
Viktor Alexandersson

