### **📄 BioConnect - Plateforme pour l'Agriculture Biologique**
🚀 **BioConnect** est une plateforme web qui connecte les consommateurs avec les producteurs biologiques, permettant l'achat de produits bio, la gestion des associations locales et la participation à des événements liés à l'agriculture biologique.

---

## **📌 Technologies utilisées**
### **Frontend**
- **Angular 19** (Framework SPA)
- **Bootstrap 5** (UI/UX)
- **NgBootstrap** (Composants UI)
- **RxJS** (Gestion des flux de données)

### **Backend**
- **Spring Boot 3** (Framework Java)
- **Spring Security + JWT** (Authentification)
- **Hibernate + JPA** (ORM pour la base de données)
- **MySQL** (Base de données)
- **Lombok** (Simplification du code Java)

---

## **🚀 Installation et Configuration**
### **1️⃣ Cloner le projet**
```sh
git clone https://github.com/ton-user/bioconnect.git
cd bioconnect
```

### **2️⃣ Backend : Configuration et Lancement**
#### **🔹 Prérequis**
- **JDK 17**
- **MySQL 8**
- **Maven**

#### **🔹 Configuration de la base de données**
Créer une base de données **`bioconnect_db`** dans MySQL :
```sql
CREATE DATABASE bioconnect_db;
```
Configurer `application.properties` :
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bioconnect_db
spring.datasource.username=root
spring.datasource.password=motdepasse
spring.jpa.hibernate.ddl-auto=update
```

#### **🔹 Lancer le backend**
```sh
cd backend
mvn spring-boot:run
```

---

### **3️⃣ Frontend : Installation et Démarrage**
#### **🔹 Prérequis**
- **Node.js 18+**
- **Angular CLI 19**

#### **🔹 Installer les dépendances**
```sh
cd front
npm install
```

#### **🔹 Lancer l’application**
```sh
ng serve
```
📌 L’application sera accessible sur :  
➡ **Frontend** : `http://localhost:4200`  
➡ **Backend** : `http://localhost:8080`

---

## **📂 Architecture du projet**
```
bioconnect
│── backend/                     # Backend (Spring Boot)
│   ├── src/main/java/com/bioconnect/
│   │   ├── controller/           # API REST
│   │   ├── entity/               # Modèles (JPA)
│   │   ├── repository/           # Gestion de la BD
│   │   ├── service/              # Logique métier
│   │   ├── security/             # Authentification JWT
│── front/                        # Frontend (Angular)
│   ├── src/app/
│   │   ├── components/           # Composants Angular
│   │   ├── services/             # Services (API Calls)
│   │   ├── models/               # Modèles TypeScript
│── README.md                     # Documentation du projet
│── .gitignore                     # Fichiers à ignorer
```

---

## **🛠️ Fonctionnalités Principales**
### **🔐 Authentification et Sécurité**
✅ **Inscription & Connexion** avec JWT  
✅ **Gestion du profil utilisateur**  
✅ **Affichage du nom/prénom une fois connecté**  

### **🛍️ Gestion des Produits & Commandes**
✅ **Afficher les produits disponibles**  
✅ **Ajouter au panier**  
✅ **Passer une commande**  
✅ **Lister les commandes d'un utilisateur**  

### **🏢 Gestion des Associations**
✅ **Lister les associations locales**  
✅ **Créer une association**  
✅ **Voir les détails d’une association avec produits & événements**  

### **📅 Gestion des Événements**
✅ **Afficher les événements bio**  
✅ **Associer un événement à une association**  

### **📝 Gestion des Blogs**
✅ **Ajouter un blog**  
✅ **Voir les blogs des utilisateurs**  

---

## **📌 API (Backend)**
| **Méthode**  | **Endpoint**                  | **Description**                        |
|-------------|------------------------------|----------------------------------------|
| `POST`      | `/api/auth/inscription`       | Inscription d'un utilisateur          |
| `POST`      | `/api/auth/connexion`         | Connexion et génération de JWT        |
| `GET`       | `/api/produits`               | Lister tous les produits              |
| `POST`      | `/api/commandes/passer`       | Passer une commande                   |
| `GET`       | `/api/commandes/user/{id}`    | Voir commandes d'un utilisateur       |
| `POST`      | `/api/associations/create`    | Créer une association                 |
| `GET`       | `/api/associations/{id}`      | Voir une association                  |
| `POST`      | `/api/blogs/ajouter`          | Ajouter un blog                       |

---

## **📸 Captures d'écran**
📌 *Ajoute ici des captures d'écran du projet pour illustrer l'interface utilisateur.*

---

## **👨‍💻 Contributeurs**
- **Nom 1** - Développement Backend  
- **Nom 2** - Développement Frontend  
- **Nom 3** - UI/UX Design  

📌 *N’hésitez pas à contribuer au projet en ouvrant une issue ou une pull request !*  

---

## **📜 Licence**
🔓 Ce projet est sous licence **MIT**. Vous pouvez l'utiliser librement.  

---

📢 **Si ce projet vous plaît, laissez une ⭐ sur GitHub !** 🚀
