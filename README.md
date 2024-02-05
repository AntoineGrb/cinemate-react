# Cinémate 🎥

Cinémate est une application web permettant de trouver un film à regarder en rentrant ses différents critères.

L'appli est uploadée sur Vercel, voici le [lien](https://cinemate-react.vercel.app/) ! 

## Présentation 🌟

Ce projet est un des projets qui me tenait le plus à coeur. A vrai dire, c'est la première "idée" que j'ai eu lorsque j'ai commencé à faire du développement web. Je voulais créer une petite application permettant de chercher un film à partir de ses critères, sélectionner son choix parmi une liste et accéder aux informations du film dont sa bande annonce.

Dans un second temps, je voulais ajouter un système de gestion de liste des films vus ou à voir de l'utilisateur.

L'application est responsive et développée en mobile-first, pour que les utilisateurs puissent l'utiliser sur un téléphone ou un pc. Je souhaitais un design épuré et simple qui mettrais en avant les affiches et images extraites du film.

## Comment ça marche ? 📖

### Chercher un film
La page d'accueil permet de sélectionner ses critères et de lancer une recherche pour obtenir une liste de films correspondants.

![image](https://github.com/AntoineGrb/cinemate-react/assets/119600392/ceb0fe3b-28fc-40aa-af18-9ef0781f1566)


### Obtenir les détails du film
Les détails du film mis en avant sur la page film sont : 
- Les informations du film (langue, date de sortie, durée, réalisateur, acteurs, disponibilité sur les plateformes de streaming...)
- La bande annonce du film
- Les films associés recommandés

![image](https://github.com/AntoineGrb/cinemate-react/assets/119600392/24b6bd6f-6da9-4128-b429-3eb5663d7c1d)


### Ajouter des films à sa liste
J'ai créé une section profil utilisateur (non reliée à une base de données mais simplement basée sur le local storage), dans lequel l'utilisateur peut retrouver ses listes de films à voir ou vus.
Les icones pour ajouter un film à sa liste de films à voir ou pour noter un film sont accessibles sur les cartouches sur la page d'accueil et sur la page du film.

![image](https://github.com/AntoineGrb/cinemate-react/assets/119600392/87dd9019-06c2-4069-b996-c6867bff25ab)


### Recherche un film par son nom
J'ai également ajouté la possibilité de faire une recherche par nom pour accéder directement à la fiche du film de son choix.

## Technologies utilisées 🛠️

- **React**
- **SCSS**

J'ai utilisé l'API de TMDB pour obtenir les informations sur les films.

## Auteur 👩‍💻👨‍💻

C'est moi ! Si vous voulez en savoir plus sur moi ou discuter de ce projet ou d'autres sujets intéressants, n'hésitez pas à me suivre ou à m'envoyer un message.
