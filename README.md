# Lancement du projet

1. Clonez le projet [git clone git@gitlab.com:Teguimene/cravies.git](git@gitlab.com:Teguimene/cravies.git).
2. Une fois le projet cloné, rassurez-vous d'être dans le répertoire racine `cd cravis`
3. Installez les dépendences en lançant la commande `npm install`
4. Vous pouvez désormais lancer le projet en exécutant `npm start` sur l'invite de commande
5. Ouvrez [http://localhost:3000](http://localhost:3000) pour le rendu.

# Structuration du projet
Le projet est structuré comme suit:
1. Dans le dossier public/, nous décidons d'ajouter un dossier assets qui contiendra les différentes images à utiliser dans le site
2. Le dossier src/ est subdivisé en huit parties dont nous avons utilisés cinq pour effectuer ce travail:

## Structuration du dossier src/
1. Un dossier component/ qui sera utilisé pour contenir les différents éléments réutilisables. Pour réaliser cette tâche, nous
avons mis en place neuf components parmis lesquelles le component Button, CustomInput, FAQItem, IngredientCard, Pack, PackTitle, Subscription, Testimonial et SpoilerSecComponent.
Ceci a été fait tout simplement dans le but de faciliter la réutilisabilité de ceux-ci qi se voyaient répétitifs dans les differentes pages.

2. Un dossier constants/ qui contient les differentes variables utilisables lors du travail. Nous parlons ici principalement des couleurs et du style css.

3. Un dossier datas/ pour contenir les fake datas ou liste d'objets à maper sur les differentes pages pour affichage.

4. Un dossier layouts/ qui contient les differents layouts (header, navbar, footer, etc)

5. Un dossier pages/ pour contenir les differentes pages

Cette structuration est faite dans le but de rester organiser et de facilement maintenir notre tout au long du travail.

# Dépendences utilisés
Comme dépendences, nous avons utilisés:
1. `react-bootstrap` pour faciliter certaines combinaisons css afin de ganer en temps bien que dans le travail fournit c'est en grande partie du css pure.
2. `react-responsive` qui nou aide à facilement manipuler notre aspect responsive

# Durées d'implémentation
1. L'implémentation de la page HomePage a pris environs 6h de temps (Menu mobile absent)
2. L'implémentation de la page PDP à son état actuel a pris environs 8h de temps

Rédigé par Furel De Consol TEGUIMENE YENDJI
